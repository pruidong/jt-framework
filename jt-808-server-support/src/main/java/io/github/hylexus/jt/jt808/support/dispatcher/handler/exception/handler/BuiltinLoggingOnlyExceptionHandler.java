package io.github.hylexus.jt.jt808.support.dispatcher.handler.exception.handler;

import io.github.hylexus.jt.jt808.support.dispatcher.Jt808ExceptionHandler;
import io.github.hylexus.jt.jt808.support.dispatcher.Jt808HandlerResult;
import io.github.hylexus.jt.jt808.support.dispatcher.handler.argument.resolver.ArgumentContext;
import lombok.extern.slf4j.Slf4j;

import java.util.Set;

/**
 * @author hylexus
 */
@Slf4j
public class BuiltinLoggingOnlyExceptionHandler implements Jt808ExceptionHandler {

    private final Set<Class<? extends Throwable>> supportedExceptionTypes = Set.of(Throwable.class);

    @Override
    public int getOrder() {
        return BUILTIN_COMPONENT_ORDER;
    }

    @Override
    public Set<Class<? extends Throwable>> getSupportedExceptionTypes() {
        return supportedExceptionTypes;
    }

    @Override
    public Jt808HandlerResult handleException(Object handler, ArgumentContext argumentContext) throws Throwable {
        final Throwable throwable = argumentContext.getThrowable();
        if (throwable != null) {
            log.error(throwable.getMessage(), throwable);
        } else {
            log.error("{}", argumentContext);
        }
        return null;
    }
}
