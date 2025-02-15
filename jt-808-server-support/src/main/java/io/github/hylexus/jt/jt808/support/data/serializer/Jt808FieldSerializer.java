package io.github.hylexus.jt.jt808.support.data.serializer;

import io.github.hylexus.jt.core.ReplaceableComponent;
import io.github.hylexus.jt.jt808.support.data.MsgDataType;
import io.github.hylexus.jt.jt808.support.data.ResponseMsgConvertibleMetadata;
import io.github.hylexus.jt.jt808.support.exception.Jt808FieldSerializerException;
import io.netty.buffer.ByteBuf;

import java.util.Set;

public interface Jt808FieldSerializer<T> extends ReplaceableComponent {

    Set<ResponseMsgConvertibleMetadata> getSupportedTypes();

    void serialize(T object, MsgDataType msgDataType, ByteBuf byteBuf) throws Jt808FieldSerializerException;

    @Override
    default int getOrder() {
        return BUILTIN_COMPONENT_ORDER;
    }

    class PlaceholderFiledSerializer implements Jt808FieldSerializer<Object> {
        @Override
        public Set<ResponseMsgConvertibleMetadata> getSupportedTypes() {
            throw new UnsupportedOperationException("This FieldSerializer only serves as a placeholder");
        }

        @Override
        public void serialize(Object object, MsgDataType msgDataType, ByteBuf byteBuf) throws Jt808FieldSerializerException {
            throw new UnsupportedOperationException("This FieldSerializer only serves as a placeholder");
        }
    }
}