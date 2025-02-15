package io.github.hylexus.jt.jt808.support.data.meta;

import io.github.hylexus.jt.exception.JtIllegalStateException;
import io.github.hylexus.jt.jt808.support.utils.ReflectionUtils;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.List;

/**
 * @author hylexus
 */
@Data
@ToString(exclude = "rawBeanMetadata")
@Accessors(chain = true)
public class JavaBeanFieldMetadata {
    private JavaBeanMetadata rawBeanMetadata;
    private Field field;
    private Class<?> fieldType;
    private List<Class<?>> genericType;
    private int order = 0;

    public boolean isIntType() {
        return fieldType == Integer.class || fieldType == int.class;
    }

    public boolean isBooleanType() {
        return fieldType == Boolean.class || fieldType == boolean.class;
    }

    public boolean isByteType() {
        return fieldType == Byte.class || fieldType == byte.class;
    }

    public boolean isShortType() {
        return fieldType == Short.class || fieldType == short.class;
    }

    public void setFieldValue(Object instance, Object value) throws IllegalAccessException {
        ReflectionUtils.setFieldValue(instance, field, value);
    }

    /**
     * @param instance        当前field对应的实例
     * @param createNewIfNull 当值为空时，新创建field对应类型的实例返回
     */
    public Object getFieldValue(Object instance, boolean createNewIfNull) {

        try {
            //if (!field.isAccessible()) {
            if (!field.canAccess(instance)) {

                field.setAccessible(true);
            }
            Object oldValue = field.get(instance);
            if (oldValue == null && createNewIfNull) {
                oldValue = ReflectionUtils.createInstance(fieldType);
                // oldValue = fieldType.newInstance();
            }
            return oldValue;
        } catch (Exception e) {
            throw new JtIllegalStateException(e);
        }
    }

    public <T extends Annotation> boolean isAnnotationPresent(Class<T> annotationClass) {
        return field.getAnnotation(annotationClass) != null;
    }

    public <T extends Annotation> T getAnnotation(Class<T> annotationClass) {
        return field.getAnnotation(annotationClass);
    }
}
