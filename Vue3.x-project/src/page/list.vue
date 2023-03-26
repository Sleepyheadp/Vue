<template>
    <div>
        <MessageList></MessageList>
        <BaseLayout>
            <template v-slot:header>
                <nav>
                    <a href="#">首页</a>
                    <a href="#">关于</a>
                    <a href="#">联系</a>
                </nav>
            </template>
            <template v-slot:default>
                <p>这是内容</p>
            </template>
        </BaseLayout>
    </div>
</template>
<script>
import MessageList from '../components/messages/MessageList.vue'
import BaseLayout from '../components/BaseLayout.vue'
export default {
    components: { MessageList, BaseLayout },
    setup() {
    }
}
</script>
<style scoped></style>