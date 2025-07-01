<!-- <template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template> -->

<!-- src/components/NavBar.vue -->
<template>
<header>
  <nav aria-label="Main Navigation" class="main-nav">
    <ul>
      <li><router-link to="/" exact-active-class="active-link">Home</router-link></li>
      <li> <a href="#ourstory">Our story</a></li>
      <li><router-link to="/theweddingparty" exact-active-class="active-link">The wedding party</router-link></li>
      <li :class="{ open: dropdownOpen }">
        <a href="#" @click.prevent="toggleDropdown">The details</a>
        <ul class="dropdown">
          <li><router-link to="/venue">Venue</router-link></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#accommodation">Accommodation</a></li>
          <li><a href="#directions">Directions</a></li>
        </ul>
      </li>
      <li><router-link to="/rsvp" exact-active-class="active-link">RSVP</router-link></li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      dropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      if (window.innerWidth < 768) {
        this.dropdownOpen = !this.dropdownOpen
      }
    }
  }
}
</script>