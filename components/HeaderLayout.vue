<template>
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">
        <nuxt-link to="/">
          <img src="../static/img/umbrella_white.png" alt="umbrella" style="width: 30px;">
        </nuxt-link>
      </h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <NuxtLink to="/join" class="nav-link" :class="{'active' : $route.name === 'join'}">Join</NuxtLink>
        <NuxtLink to="/login" class="nav-link" :class="{'active' : $route.name === 'login'}">Login</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
  }
}
</script>
