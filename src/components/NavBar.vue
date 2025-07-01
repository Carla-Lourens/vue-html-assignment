<nav class="navigation">

    <router-link v-for="route in routes" :key="route.path"
:to="route.path" class="nav-link" active-class="active">
        {{ route.name }}
    </router-link>
</nav>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            routes: [
                { path: '/', name: 'Home' },
                { path: '/about', name: 'About' },
                { path: '/users', name: 'Users' }
            ]
        }
    }
}
</script>

<style scoped>
.navigation {
    padding: 1rem;
    background: #f8f9fa;
}
.nav-link {
    margin-right: 1rem;
    text-decoration: none;
    color: #495057;
}
.active {
    color: #007bff;
    font-weight: bold;
}
</style>