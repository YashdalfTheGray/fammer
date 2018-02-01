<template>
    <md-app id="fammer" md-waterfall md-mode="fixed" class="fammer-app-shell">
        <md-app-toolbar class="md-primary">
            <h3 class="md-title" style="flex: 1">{{ appName }}</h3>
            <md-button>Log In</md-button>
        </md-app-toolbar>
        <md-app-content class="md-scrollbar">
            <p>Test Test</p>
            <p>Test Test</p>
            <p>Test Test</p>
            <p>Test Test</p>
            <p>Test Test</p>
            <p>Test Test</p>
            <p>Test Test</p>
            <p>Test Test</p>
            <p>Test Test</p>
        </md-app-content>
    </md-app>
</template>

<script>
export default {
    name: 'fammer',
    data: () => ({
        appName: 'Fammer'
    })
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
