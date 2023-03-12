<template >
    <div>
        <HelloWorld msg="Vite + Vue" version=3>
            <template v-slot:more>
                <!-- 可以简写为#more -->
                <div>slot插槽内容</div>
                <div>....</div>
            </template>
        </HelloWorld>
        <son-to-father @handleAdd="addMore" :count='count'></son-to-father>
    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
import sonToFather from '../components/sonToFather.vue'
export default {
    components: { HelloWorld, sonToFather },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addMore() {
            this.count++
        }
    }
}
</script>
<style lang="scss"></style>