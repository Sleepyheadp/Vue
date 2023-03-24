<template>
    <div>
        <h2>标题：{{ options.title }}</h2>
        <div>用户:{{ options.user.name }}</div>
        <div>活跃：{{ options.user.active ? "是" : "否" }}</div>
        <input type="text" v-model="searchTerm">
        <ul>
            <li v-for="msg in searchedMessages" :key="msg.id">{{ msg.content }}</li>
        </ul>
        <button @click="messages = []">删除全部</button>
        <button @click="options.title = '我是标题'">修改标题</button>
        <button @click="options.user.name = '李四'">修改用户</button>
    </div>
</template>
<script>
import { ref, reactive, computed } from 'vue'
export default {
    setup() {
        const messages = ref([
            { id: 1, content: "这是一条消息提醒1" },
            { id: 2, content: "这是一条消息提醒2" },
            { id: 3, content: "这是一条消息提醒3" },
            { id: 4, content: "这是一条消息提醒4" },
        ]);
        const options = reactive({
            title: '消息列表',
            user: {
                name: '张三',
                active: true
            }
        })
        // 在setup中访问需要通过value属性，模版语法中则直接取值就可以。
        console.log('ref.value:', messages.value)
        console.log('reactive', options.title);
        // computed计算属性
        const searchTerm = ref('')
        const searchedMessages = computed(() => {
            if (searchTerm.value === '') return ''
            return messages.value.filter((msg) => {
                return msg.content.includes(searchTerm.value)
            })

        })
        return { messages, options, searchTerm, searchedMessages };
    },
};
</script>
<style scoped>
div {
    display: grid;
    place-items: center;
}

ul {
    list-style: none;
    display: grid;
    gap: 24px;
}

li {
    display: flex;
    align-items: center;
    gap: 12px;
}

li::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: hsl(280deg, 100%, 70%);
    border-radius: 100%;
}
</style>