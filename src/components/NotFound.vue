<template>
  <div>
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <button
          @click.prevent="$router.push('/login')"
          class="btn btn-outline-success my-2 my-sm-0"
        >Go To Homepage</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound"
};
</script>
<style scoped>
@import "../assets/styles/notfound.css";
</style>