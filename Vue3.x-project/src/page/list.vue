<template>
    <div>
        <MessageList></MessageList>
    </div>
</template>
<script>
import MessageList from '../components/messages/MessageList.vue'
import { ref } from 'vue'
export default {
    components: { MessageList },
    setup() {
    }
}
</script>
<style scoped></style>