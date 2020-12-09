<template>
  <div class="c_move_lamp">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in lamp_word_list" :key="item">
        <h1 class="medium font_set">{{ item }}</h1>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
name: "index",
  data(){
  return{
    lamp_word_list:['academic','path','localhost','unreal']
  }
  }
}
</script>

<style scoped>
.c_move_lamp{
  height: 100%;
  width: 80%;
  transform: translate(10%);
}

.el-carousel__item h3 {
  color: #a9f1a5;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #4adaf3;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #9dc9fa;
}
.font_set{
  font-size: 60px;
}
</style>