<template>
  <main class="px-3 umb-content-margin umb-bg-img">
    <h5>{{ currentDate }}</h5>
    <h1>{{ currentTime }}</h1>
    <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text,
      and add your own fullscreen background photo to make it your own.</p>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
    </p>
  </main>
</template>

<script>
import dayjs from "dayjs"
import 'dayjs/locale/ko'

export default {
  name: 'Main',
  data() {
    return {
      currentDate: dayjs().format("YYYY-MM-DD (dd)"),
      currentTime: dayjs().format("HH:mm:ss"),
    }
  },
  mounted() {
    dayjs.locale('ko')
    let _this = this
    this.timer = setInterval(() => {
      _this.currentDate = dayjs().format("YYYY-MM-DD (dd)")
      _this.currentTime = dayjs().format("HH:mm:ss")
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>
