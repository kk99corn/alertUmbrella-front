<template>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <HeaderLayout/>
    <Main/>
    <FooterLayout/>
  </div>
</template>

<script>
import HeaderLayout from "../components/HeaderLayout";
import FooterLayout from "../components/FooterLayout";

export default {
  name: 'IndexPage',
  components: {FooterLayout, HeaderLayout},
  head: {
    bodyAttrs: {
      class: 'h-100 text-center text-white bg-dark'
    }
  }
}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
