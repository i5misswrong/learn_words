<template>
  <el-container>
<!--    页头   -->
    <el-header>
      <vnav></vnav>
    </el-header>

<!--    页面主题    -->
    <el-main>
    <English_word></English_word>
<!--      <css_test></css_test>-->
      <grids></grids>

    </el-main>

<!--    页脚    -->

    <el-footer>
      <vfooter></vfooter>
    </el-footer>
  </el-container>

</template>

<script>
import English_word from '../English/index'
import grids from "@/page/English/grids";
import css_test from "@/components/test/css_test";

export default {
  name: 'home',
  components: {
    English_word,
    css_test,
    grids
  },
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-footer{
  background-color: #B3C0D1;
  text-align: center;
  bottom: 0;
  width: 100%;
  position: absolute;

}
.el-main {
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
