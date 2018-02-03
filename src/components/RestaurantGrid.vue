<template>
    <md-content id="restaurant-grid" class="restaurant-list">
        <restaurant></restaurant>
        <restaurant></restaurant>
        <restaurant></restaurant>
        <restaurant></restaurant>
        <restaurant></restaurant>
    </md-content>
</template>

<script>
import Restaurant from './Restaurant.vue';

export default {
    name: 'restaurant-grid',
    data() {
        return {};
    },
    components: {
        Restaurant
    }
};
</script>

<style scoped>
    .restaurant-list > * + * {
        margin-top: 8px;
    }
</style>
