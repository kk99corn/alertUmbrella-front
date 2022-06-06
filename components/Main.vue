<template>
  <main class="px-3 umb-content-margin umb-bg-img">

    <select v-on:change="getAreaDetailInfo" v-model="selectedArea">
      <option v-for="areaArr in area" v-bind:value="areaArr[0]">
        {{ areaArr[1] }}
      </option>
    </select>
    <select>
      <option v-for="areaDetailObj in areaDetail" v-bind:value="areaDetailObj.value">
        {{ areaDetailObj.name }}
      </option>
    </select>

    <h5>{{ currentDate }}</h5>
    <h1>{{ currentTime }}</h1>
    <p class="lead">
      <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
    </p>
  </main>
</template>

<script>
import {getAreaDetail} from "../api"
import dayjs from "dayjs"
import 'dayjs/locale/ko'

const AREA_INFO = new Map([
  [1, '서울특별시'],
  [2, '부산광역시'],
  [3, '대구광역시'],
  [4, '인천광역시'],
  [5, '광주광역시'],
  [6, '대전광역시'],
  [7, '울산광역시'],
  [8, '세종특별자치시'],
  [9, '경기도'],
  [10, '강원도'],
  [11, '충청북도'],
  [12, '충청남도'],
  [13, '전라북도'],
  [14, '전라남도'],
  [15, '경상북도'],
  [16, '경상남도'],
  [17, '제주특별자치도'],
  [18, '이어도']
])

export default {
  name: 'Main',
  data() {
    return {
      area: AREA_INFO,
      selectedArea: 1,
      areaDetail: [],
      currentDate: dayjs().format("YYYY-MM-DD (dd)"),
      currentTime: dayjs().format("HH:mm:ss"),
    }
  },
  async fetch() {
    let areaDetail = await this.getAreaDetailInfo()
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
  },
  methods: {
    async getAreaDetailInfo() {
      this.areaDetail = [];
      let areaDetail = await getAreaDetail(this.selectedArea)
      for (let i = 0; i < areaDetail.data.data.length; i++) {
        this.areaDetail[i] = ({
          name: areaDetail.data.data[i].areaDetailName,
          value: areaDetail.data.data[i].areaX + '|' + areaDetail.data.data[i].areaY
        })
      }
    }
  }
}
</script>
