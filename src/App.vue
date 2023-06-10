<template>
    <div>
        <header class="header">
            <NavBar />
        </header>
        <router-view></router-view>
    </div>
</template>
<script setup>
import './assets/base.css'
import NavBar from './components/NavBar.vue'
</script>

<style scoped></style>
