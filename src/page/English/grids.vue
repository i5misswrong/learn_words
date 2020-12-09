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
    <table class="c_grid_table">
      <tr>
        <td>
          <div class="scene scene--card">
            <div v-on:click="c_click_card(0)" v-bind:class="{'card':is_front_list[0],'card is-flipped':!is_front_list[0]}">
              <div class="card__face card__face--front">front</div>
              <div class="card__face card__face--back">back</div>
            </div>
          </div>

        </td>
        <td>
          <div class="scene scene--card">
            <div v-on:click="c_click_card(1)" v-bind:class="{'card':is_front_list[1],'card is-flipped':!is_front_list[1]}">
              <div class="card__face card__face--front">front</div>
              <div class="card__face card__face--back">back</div>
            </div>
          </div>
        </td>
        <td>
          <div class="scene scene--card">
            <div v-on:click="c_click_card(2)" v-bind:class="{'card':is_front_list[2],'card is-flipped':!is_front_list[2]}">
              <div class="card__face card__face--front">front</div>
              <div class="card__face card__face--back">back</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="scene scene--card">
            <div v-on:click="c_click_card(3)" v-bind:class="{'card':is_front_list[3],'card is-flipped':!is_front_list[3]}">
              <div class="card__face card__face--front">front</div>
              <div class="card__face card__face--back">back</div>
            </div>
          </div>
        </td>
        <td>
          <div class="scene scene--card">
            <div v-on:click="c_click_card(4)" v-bind:class="{'card':is_front_list[4],'card is-flipped':!is_front_list[4]}">
              <div class="card__face card__face--front">front</div>
              <div class="card__face card__face--back">back</div>
            </div>
          </div>
        </td>
        <td>
          <div class="scene scene--card">
            <div v-on:click="c_click_card(5)" v-bind:class="{'card':is_front_list[5],'card is-flipped':!is_front_list[5]}">
              <div class="card__face card__face--front">front</div>
              <div class="card__face card__face--back">back</div>
            </div>
          </div>
        </td>
      </tr>
    </table>
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
      is_front_list:[true,true,true,true,true,true]
    }
  },
  methods:{
    c_click_card: function (is_front_index){
      // this.is_front_list[is_front_index] = !this.is_front_list[is_front_index]
      let new_bool_value = !this.is_front_list[is_front_index]
      // this.is_front_list.$set(is_front_index,new_bool_value)
      Vue.set(this.is_front_list,is_front_index,new_bool_value)
      // this.is_front = !this.is_front
      console.log(is_front_index)
      console.log(this.is_front_list)
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
  margin: 40px 0;
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
  font-size: 40px;
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
</style>