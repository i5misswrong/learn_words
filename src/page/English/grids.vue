<template>
  <div class="c_grid">

<!--    <div class="scene scene&#45;&#45;card">-->
<!--        <div v-on:click="c_click_card" v-bind:class="{'card':is_front,'card is-flipped':!is_front}">-->
<!--        <div class="card__face card__face&#45;&#45;front">front</div>-->
<!--        <div class="card__face card__face&#45;&#45;back">back</div>-->
<!--      </div>-->
<!--    </div>-->
<!--    -->
<!--    -->
<!--    -->
<!--    转换条   -->
    <el-divider>

<!--    <el-select placeholder="选择模式">-->
<!--      <el-option>学习模式</el-option>-->
<!--      <el-option>检测模式</el-option>-->
<!--      <el-option-group></el-option-group>-->
<!--      <el-option>设置</el-option>-->
<!--    </el-select>-->

    </el-divider>
<!--    -->
    <div style="float: left; width: 32%; height: 52%" v-for="(value,index) in sites">
    <div class="scene scene--card" >
      <div v-on:click="c_click_card(index)" v-bind:class="{'card':is_front_list[index],'card is-flipped':!is_front_list[index]}">
        <div class="card__face card__face--front">
          <div style="font-size:40px ">
            {{value.name}}.{{index}}
<!--            {{index}}-->
          </div>
        </div>
        <div class="card__face card__face--back">
          <div>
            <div>
              <el-card shadow="always" style="line-height: 5; position:absolute;height: 60%; width: 70%;left: 15%;top: 10%;">
                <span style="">修正；复习</span>
              </el-card>
            </div>
            <el-row>
              <el-col :span="6">
                <el-button v-on:click.stop="c_click_test()" type="success" style="height: 50px;width: 120px;left: 5px;top: 210px;position: absolute;line-height: 12px">认识</el-button>
              </el-col>
              <el-col :span="6">
                <el-button v-on:click.stop="c_click_test()" type="info" style="height: 50px;width: 120px;left: 170px;top: 210px;position: absolute;line-height: 12px">不认识</el-button>
              </el-col>
              <el-col :span="6">
                <el-button v-on:click.stop="c_click_test()" type="danger" style="height: 50px;width: 120px;left: 350px;top: 210px;position: absolute;line-height: 12px">删除</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    </div>
<!--    -->


  </div>
</template>

<script>
import Vue from 'vue'

export default {

  name: "grids",
  // mounted(){
  //   let card=document.querySelector('.card');
  // card.addEventListener( 'click', function() {
  //   card.classList.toggle('is-flipped');
  // });
  // },

  data() {
    return {
      is_front: true,
      test_index: 100,
      is_front_list:[true,true,true,true,true,true],
      sites: [
        { name: 'Runoob' ,is_front: true},
        { name: 'Google' ,is_front: true},
        { name: 'Taobao' ,is_front: true},
        {name: 'wrong',is_front: true},
        {name: 'apple',is_front: true},
        {name: 'twitter',is_front: true}
      ]
    }
  },
  methods:{
    c_click_card: function (is_front_index){
      console.log(this.is_front_list)
      // this.is_front_list[is_front_index] = !this.is_front_list[is_front_index]
      let new_bool_value = !this.is_front_list[is_front_index]
      console.log(new_bool_value)
      // this.is_front_list.$set(is_front_index,new_bool_value)
      Vue.set(this.is_front_list,is_front_index,new_bool_value)
      // this.is_front = !this.is_front
      console.log(is_front_index)
      console.log(typeof is_front_index)
      console.log(this.is_front_list)
    },
    c_click_test: function (event){
      // event.stopPropagation();
      console.log('click know')
    }
  },
}

</script>

<style lang="less" scoped>
.c_grid{

  width: 80%;
  height: 500px;
  //border: crimson;
  //background-color: #B3C0D1;
  transform: translate(10%);
  .c_grid_table{
    border: #161617;
    width: 100%;
    height: 100%;
  }
  .c_grid_table_div{
    width: 100%;
    height: 100%;
    background-color: #dbf5dc;
  }
  .c_grid_wrapper{
    background-color: #42b983;
    width: 100px;
    height: 140px;
    perspective: 500px;
  }
  .c_grid_card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .c_grid_table_card {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .c_grid_table_div_back {
    transform: rotateY(180deg);
  }
  .c_grid_card.is-fliped {
    transform: rotateY(180deg)
  }

}
// ----------------------

.scene {
  width: 100%;
  height: 100%;
  //border: 1px solid #CCC;
  margin: 0px 0px;
  perspective: 2000px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: #180d0d;
  text-align: center;
  font-weight: bold;
  //font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background: #ea8a8a;
}

.card__face--back {
  background: #c9c9f1;
  transform: rotateY(180deg);
}
// ------------------------
//.c_card_back_div{
//  position: absolute;
//  height: 30px;
//}
</style>