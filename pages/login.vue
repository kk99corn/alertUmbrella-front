<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <HeaderLayout/>
    <Login/>
    <FooterLayout/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  head: {
    bodyAttrs: {
      class: 'h-100 text-center text-white bg-dark'
    }
  }
}
</script>
