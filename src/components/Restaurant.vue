<template>
    <md-card id="restaurant">
        <md-card-header>
            <div class="md-itle">{{ title }}</div>
        </md-card-header>
        <md-card-content>This is where information about the card will go.</md-card-content>
        <md-card-action>
            <md-button>Map</md-button>
        </md-card-action>
    </md-card>
</template>

<script>
export default {
    name: 'restaurant',
    data() {
        return {
            title: `Fat's Chicken and Waffles`
        };
    }
};
</script>

<style scoped>

</style>
