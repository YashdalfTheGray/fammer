<template>
    <md-content id="restaurant-search">
    <md-field md-clearable>
        <label>Search...</label>
        <md-input v-model="query" @input="inputChanged"></md-input>
    </md-field>
</md-content>
</template>

<script>
export default {
    name: 'restaurant-search',
    data() {
        return { query: '' };
    },
    methods: {
        inputChanged(input) {
            this.$emit('query-changed', input);
        }
    }
};
</script>

<style scoped>

</style>
