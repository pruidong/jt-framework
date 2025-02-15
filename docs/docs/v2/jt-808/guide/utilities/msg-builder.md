# 报文构建器

内置了两种 `Jt808MsgBuilder` 实现类用来构建报文：

- 用来构建调试报文
- 回复客户端的消息也可以使用 `Jt808MsgBuilder` 来构建

## EntityJt808MsgBuilder

该实现类通过被 `@Jt808ResponseBody` 标记的实体类来构建报文。

```java
public class Jt808MsgBuilderTest {

    // 这里使用-1，通过 Jt808MsgBuilder.msgId(int msgId) 来指定了消息ID
    // 也可以直接在这里指定具体的消息ID
    @Jt808ResponseBody(msgId = -1)
    @Data
    @Accessors(chain = true)
    static class TestEntity {
        // 1. 应答流水号 WORD    对应的平台消息的流水号
        @ResponseField(order = 0, dataType = WORD)
        int serverFlowId;

        // 2. 应答id WORD     对应的平台消息的 ID
        @ResponseField(order = 1, dataType = WORD)
        int serverMsgId;

        // 3. 结果  byte 0:成功/确认;1:失败;2:消息有误;3:不支持
        @ResponseField(order = 2, dataType = BYTE)
        int result;

    }

    // 流水号生成器(这里使用一个永远返回0的生成器用来调试)
    // 可以使用 Jt808Session(已经实现了Jt808FlowIdGenerator) 或者 Jt808FlowIdGenerator.DEFAULT(默认实现类) 来生成自增的流水号
    private static final Jt808FlowIdGenerator ALWAYS_RETURN_0 = step -> 0;

    @Test
    void testEntityMsgBuilder() {
        // 通过实体类来转换消息体内容
        final TestEntity entity = new TestEntity()
                .setServerFlowId(0)
                .setServerMsgId(0x8103)
                .setResult(0);

        final EntityJt808MsgBuilder builder = Jt808MsgBuilder.newEntityBuilder(ALWAYS_RETURN_0)
                .version(Jt808ProtocolVersion.VERSION_2013)
                .terminalId("013912344323")
                .body(entity)
                .msgId(BuiltinJt808MsgType.CLIENT_COMMON_REPLY);

        final ByteBuf result = builder.build();

        assertEquals("7E0001000501391234432300000000810300F87E", HexStringUtils.byteBufToString(result));
        assertEquals("7E0001000501391234432300000000810300F87E", builder.toHexString());

        assertEquals(1, result.refCnt());
        result.release();
        assertEquals(0, result.refCnt());
    }
}
```

## ByteBufJt808MsgBuilder

该实现类通过 `Jt808ByteWriter` (`ByteBuf`) 来构建报文。

```java
public class Jt808MsgBuilderTest {

    // 流水号生成器(这里使用一个永远返回0的生成器用来调试)
    // 可以使用 Jt808Session(已经实现了Jt808FlowIdGenerator) 或者 Jt808FlowIdGenerator.DEFAULT(默认实现类) 来生成自增的流水号
    private static final Jt808FlowIdGenerator ALWAYS_RETURN_0 = step -> 0;

    @Test
    public void testByteBufMsgBuilder() {
        final ByteBuf originalBuf = ByteBufAllocator.DEFAULT.buffer(128);
        final ByteBufJt808MsgBuilder builder = Jt808MsgBuilder.newByteBufBuilder(ALWAYS_RETURN_0, originalBuf)
                .version(Jt808ProtocolVersion.VERSION_2013)
                .msgId(BuiltinJt808MsgType.CLIENT_COMMON_REPLY)
                .terminalId("013912344323")
                // 消息体借助 Jt808ByteWriter 来写入内容
                // 也可以直接提供一个已经写好内容的 ByteBuf 用来充当消息体
                .body(writer -> writer
                        // 1. 应答流水号 WORD    对应的平台消息的流水号
                        .writeWord(0)
                        // 2. 应答id WORD     对应的平台消息的 ID
                        .writeWord(0x8103)
                        // 3. 结果  byte 0:成功/确认;1:失败;2:消息有误;3:不支持
                        .writeByte(0)
                );

        final ByteBuf result = builder.build();
        assertEquals("7E0001000501391234432300000000810300F87E", HexStringUtils.byteBufToString(result));
        assertEquals("7E0001000501391234432300000000810300F87E", builder.toHexString());

        assertEquals(1, originalBuf.refCnt());
        assertEquals(result.refCnt(), originalBuf.refCnt());

        result.release();

        assertEquals(0, originalBuf.refCnt());
        assertEquals(result.refCnt(), originalBuf.refCnt());
    }
}
```


