<template>
    <div class="main">
        <VuexState></VuexState>
        <VuexMutations></VuexMutations>
        <VuexGetters></VuexGetters>
        <VuexActions></VuexActions>
    </div>
</template>
<script>

import VuexState from "./vuex-state.vue"
import VuexMutations from "./Vuex-mutations.vue"
import VuexGetters from "./Vuex-getters.vue"
import VuexActions from './Vuex-actions.vue'
export default {
    components: { VuexState, VuexMutations, VuexGetters, VuexActions },

}
</script>
<style scoped></style>