<template>
    <div>
        <h1>我的笔记本</h1>
        <SearchNote></SearchNote>
        <NoteList></NoteList>
        <AddNote></AddNote>
    </div>
</template>

<script setup>
import AddNote from "../../components/piniaPages/AddNote.vue"
import NoteList from "../../components/piniaPages/NoteList.vue"
import SearchNote from "../../components/piniaPages/SearchNote.vue"
</script>
<style scoped></style>