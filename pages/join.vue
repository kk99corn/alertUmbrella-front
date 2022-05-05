<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <HeaderLayout/>
    <Join />
  </div>
</template>

<script>
import HeaderLayout from "../components/HeaderLayout";

export default {
  name: 'IndexPage',
  components: {HeaderLayout},
  head: {
    bodyAttrs: {
      class: 'h-100 text-center text-white bg-dark'
    }
  }
}
</script>
