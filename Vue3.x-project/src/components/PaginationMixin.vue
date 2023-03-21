<template>
    <div>
        <p>当前页：{{ currentPage }}</p>
        <a v-for="n in totalPage" @click.prevent="changePage(n)">
            {{ n }}
        </a>
    </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
    mixins: [PaginationMixin],
    data() {
        return {
            currentPage: 1
        }
    }
};
</script>
<style scoped>
div {
    padding: 24px 0;
}

p {
    margin-top: 12px;
}

a {
    color: hsl(280deg, 100%, 80%);
    width: 24px;
    display: inline-block;
    text-decoration: underline;
    cursor: pointer;
}
</style>