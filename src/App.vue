<template>
    <div>
        <header class="header">
            <NavBar />
        </header>
        <TheLayout>
            <router-view></router-view>
        </TheLayout>
    </div>
</template>
<script setup>
import './assets/base.css'
import NavBar from './components/NavBar.vue'
import TheLayout from './components/TheLayout.vue'
</script>

<style scoped></style>
