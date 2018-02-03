<template>
    <md-app id="fammer" md-waterfall md-mode="fixed" class="fammer-app-shell">
        <md-app-toolbar class="md-primary">
            <h3 class="md-title" style="flex: 1">{{ appName }}</h3>
            <md-button>Log In</md-button>
        </md-app-toolbar>
        <md-app-content class="md-scrollbar">
            <restaurant-grid></restaurant-grid>
        </md-app-content>
    </md-app>
</template>

<script>
import RestaurantGrid from './components/RestaurantGrid.vue';

export default {
    name: 'fammer',
    data: () => ({
        appName: 'Fammer'
    }),
    components: {
        RestaurantGrid
    }
};
</script>

<style scoped>
#fammer {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex: 1 1 auto;
}
.md-app {
    flex: 1 1 auto;
}
</style>
