<template>
    <div id="fammer">
        {{ appName }}
    </div>
</template>

<script>
export default {
    name: 'fammer',
    data: () => ({
        appName: 'Fammer'
    })
};
</script>

<style>
#fammer {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex: 1 1 auto;
}
.md-app {
    flex: 1 1 auto;
}
</style>
