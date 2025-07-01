<template>
  <footer>
    <div class="bouncing-text">Let's party! 🥂</div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
.bouncing-text {
  animation: bounce 2s infinite;
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
