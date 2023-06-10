<template>
    <template v-if="$route.name !== 'login'">
        <div>
            <header class="header">
                <NavBar />
            </header>
            <TheLayout>
                <router-view></router-view>
            </TheLayout>
        </div>
    </template>
    <template v-else>
        <div>
            <router-view></router-view>
        </div>
    </template>
</template>
<script setup>
import './assets/base.css'
import NavBar from './components/NavBar.vue'
import TheLayout from './components/TheLayout.vue'
</script>

<style scoped></style>
