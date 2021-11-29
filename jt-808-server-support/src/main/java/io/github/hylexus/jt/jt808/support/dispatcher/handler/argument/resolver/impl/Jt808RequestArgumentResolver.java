package io.github.hylexus.jt.jt808.support.dispatcher.handler.argument.resolver.impl;

import io.github.hylexus.jt.jt808.request.Jt808Request;
import io.github.hylexus.jt.jt808.support.dispatcher.handler.argument.resolver.ArgumentContext;
import io.github.hylexus.jt.jt808.support.dispatcher.handler.argument.resolver.HandlerMethodArgumentResolver;
import io.github.hylexus.jt.jt808.support.dispatcher.handler.reflection.MethodParameter;
import io.github.hylexus.jt.jt808.support.exception.Jt808ArgumentResolveException;

/**
 * @author hylexus
 */
public class Jt808RequestArgumentResolver implements HandlerMethodArgumentResolver {

    @Override
    public boolean supportsParameter(MethodParameter methodParameter) {
        return Jt808Request.class.isAssignableFrom(methodParameter.getParameterType());
    }

    @Override
    public Object resolveArgument(MethodParameter methodParameter, ArgumentContext context) throws Jt808ArgumentResolveException {
        return context.getRequest();
    }
}
