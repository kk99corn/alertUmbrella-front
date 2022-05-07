<template>
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">
        <nuxt-link to="/">
          <img src="../static/img/umbrella_white.png" alt="umbrella" style="width: 30px;">
        </nuxt-link>
      </h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <NuxtLink v-if="!isLogin" to="/join" class="nav-link" :class="{'active' : $route.name === 'join'}">Join</NuxtLink>
        <NuxtLink v-if="!isLogin" to="/login" class="nav-link" :class="{'active' : $route.name === 'login'}">Login</NuxtLink>
        <NuxtLink v-if="isLogin" to="/setting" class="nav-link" :class="{'active' : $route.name === 'setting'}">{{ memberName }}</NuxtLink>
        <a href="#" v-if="isLogin" @click="doLogout()" class="nav-link">Logout</a>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    let isLogin = false
    let memberName = ''
    if (this.$store.state.authUser !== null) {
      isLogin = true
      memberName = this.$store.state.authUser.name
    }
    return {
      isLogin: isLogin,
      memberName: memberName
    }
  },
  methods: {
    async doLogout() {
      await this.$store.dispatch('logout', {}).then((res) => {
        //
        location.href = "/"
      }).catch((error) => {
        //
      })
    }
  }
}
</script>
