package io.github.hylexus.jt.jt808.support.dispatcher.impl;

import io.github.hylexus.jt.jt808.spec.Jt808Request;
import io.github.hylexus.jt.jt808.spec.Jt808RequestHeader;
import io.github.hylexus.jt.jt808.spec.session.Jt808Session;
import io.github.hylexus.jt.jt808.spec.session.Jt808SessionManager;
import io.github.hylexus.jt.jt808.support.codec.Jt808MsgDecoder;
import io.github.hylexus.jt.jt808.support.dispatcher.Jt808ExceptionHandler;
import io.github.hylexus.jt.jt808.support.dispatcher.Jt808RequestMsgDispatcher;
import io.github.hylexus.jt.jt808.support.dispatcher.Jt808RequestProcessor;
import io.netty.buffer.ByteBuf;
import io.netty.channel.Channel;
import lombok.extern.slf4j.Slf4j;

/**
 * @author hylexus
 */
@Slf4j(topic = "jt-808.channel.dispatcher")
public class SimpleJt808RequestProcessor implements Jt808RequestProcessor {
    private final Jt808MsgDecoder decoder;
    private final Jt808RequestMsgDispatcher msgDispatcher;
    private final Jt808SessionManager sessionManager;
    private final Jt808ExceptionHandler commonExceptionHandler;

    public SimpleJt808RequestProcessor(
            Jt808MsgDecoder decoder,
            Jt808RequestMsgDispatcher msgDispatcher,
            Jt808SessionManager sessionManager,
            Jt808ExceptionHandler commonExceptionHandler) {

        this.decoder = decoder;
        this.msgDispatcher = msgDispatcher;
        this.sessionManager = sessionManager;
        this.commonExceptionHandler = commonExceptionHandler;
    }

    @Override
    public void processJt808Request(ByteBuf buf, Channel channel) throws Exception {
        Jt808Session jt808Session = null;
        Jt808Request request = null;
        try {
            try {
                request = decoder.decode(buf);
                final Jt808RequestHeader header = request.header();
                final String terminalId = header.terminalId();
                jt808Session = sessionManager.persistenceIfNecessary(terminalId, header.version(), channel);

                if (log.isDebugEnabled()) {
                    log.debug("[decode] : {}, terminalId={}, msg = {}", request.msgType(), terminalId, request);
                }
            } catch (Exception e) {
                if (request != null) {
                    request.release();
                }
                throw e;
            }

            this.msgDispatcher.doDispatch(request);
        } catch (Throwable throwable) {
            try {
                log.error("", throwable);
                // TODO exception handler ...
                // commonExceptionHandler.handleException(null, ArgumentContext.of(request, jt808Session, new Jt808NettyException(throwable)));
                throw throwable;
            } catch (Throwable e) {
                log.error("An error occurred while invoke ExceptionHandler", e);
            }
        }
    }
}
