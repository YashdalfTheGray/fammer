<template>
    <md-app id="fammer" md-waterfall md-mode="fixed" class="fammer-app-shell">
        <md-app-toolbar class="md-primary">
            <h3 class="md-title" style="flex: 1">{{ appName }}</h3>
            <md-button class="md-icon-button" @click="searchVisible = !searchVisible">
                <md-icon>search</md-icon>
            </md-button>
            <md-button>Log In</md-button>
        </md-app-toolbar>
        <md-app-content class="md-scrollbar">
            <search-bar v-show="searchVisible" @query-changed="searchQueryChanged"></search-bar>
            <restaurant-grid></restaurant-grid>
        </md-app-content>
    </md-app>
</template>

<script>
import RestaurantGrid from './components/RestaurantGrid.vue';
import SearchBar from './components/SearchBar.vue';

export default {
    name: 'fammer',
    data() {
        return {
            appName: 'Fammer',
            query: '',
            searchVisible: false
        };
    },
    components: {
        RestaurantGrid,
        SearchBar
    },
    methods: {
        searchQueryChanged(query) {
            this.query = query;
        }
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
