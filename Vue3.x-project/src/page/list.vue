<template>
    <div>
        <MessageList :messages="messages"></MessageList>
    </div>
</template>
<script>
import MessageList from '../components/messages/MessageList.vue'
import { ref } from 'vue'
export default {
    components: { MessageList },
    setup() {
        const messages = ref([
            { id: 1, content: "这是一条消息提醒1" },
            { id: 2, content: "这是一条消息提醒2" },
            { id: 3, content: "这是一条消息提醒3" },
            { id: 4, content: "这是一条消息提醒4" },
        ]);
        return { messages }
    }
}
</script>
<style scoped></style>