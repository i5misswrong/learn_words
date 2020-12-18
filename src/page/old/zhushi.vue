<template>


  <!--    <table class="c_grid_table">-->
  <!--      <tr>-->
  <!--        <td>-->
  <!--          <div class="scene scene&#45;&#45;card">-->
  <!--            <div v-on:click="c_click_card(0)" v-bind:class="{'card':is_front_list[0],'card is-flipped':!is_front_list[0]}">-->
  <!--              <div class="card__face card__face&#45;&#45;front">-->
  <!--                <div style="font-size:40px ">-->
  <!--                  revision-->
  <!--                </div>-->

  <!--              </div>-->
  <!--              <div class="card__face card__face&#45;&#45;back">-->
  <!--                <div>-->
  <!--                  <div>-->
  <!--                    <el-card shadow="always" style="line-height: 5; position:absolute;height: 60%; width: 70%;left: 15%;top: 10%;">-->
  <!--                      <span style="">修正；复习</span>-->
  <!--                    </el-card>-->
  <!--                  </div>-->
  <!--                  <el-row>-->
  <!--                    <el-col :span="6">-->
  <!--                      <el-button v-on:click.stop="c_click_test()" type="success" style="height: 50px;width: 120px;left: 5px;top: 210px;position: absolute;line-height: 12px">认识</el-button>-->
  <!--                    </el-col>-->
  <!--                    <el-col :span="6">-->
  <!--                      <el-button v-on:click.stop="c_click_test()" type="info" style="height: 50px;width: 120px;left: 170px;top: 210px;position: absolute;line-height: 12px">不认识</el-button>-->
  <!--                    </el-col>-->
  <!--                    <el-col :span="6">-->
  <!--                      <el-button v-on:click.stop="c_click_test()" type="danger" style="height: 50px;width: 120px;left: 350px;top: 210px;position: absolute;line-height: 12px">删除</el-button>-->
  <!--                    </el-col>-->
  <!--                  </el-row>-->
  <!--&lt;!&ndash;                  <el-row>&ndash;&gt;-->

  <!--&lt;!&ndash;                  <el-col :span="6">&ndash;&gt;-->
  <!--&lt;!&ndash;                    <el-card v-on:click.stop="c_click_test()" style="height: 50px;width: 120px;left: 5px;top: 210px;position: absolute;line-height: 12px">&ndash;&gt;-->
  <!--&lt;!&ndash;                      <span>认识</span>&ndash;&gt;-->
  <!--&lt;!&ndash;                    </el-card>&ndash;&gt;-->
  <!--&lt;!&ndash;                  </el-col>&ndash;&gt;-->
  <!--&lt;!&ndash;                  <el-col :span="6">&ndash;&gt;-->
  <!--&lt;!&ndash;                    <el-card style="height: 50px;width: 120px;left: 170px;top: 210px;position: absolute;line-height: 12px">&ndash;&gt;-->
  <!--&lt;!&ndash;                      <span>不认识</span>&ndash;&gt;-->
  <!--&lt;!&ndash;                    </el-card>&ndash;&gt;-->
  <!--&lt;!&ndash;                  </el-col>&ndash;&gt;-->
  <!--&lt;!&ndash;                  <el-col :span="6">&ndash;&gt;-->
  <!--&lt;!&ndash;                    <el-card style="height: 50px;width: 120px;left: 350px;top: 210px;position: absolute;line-height: 12px">&ndash;&gt;-->
  <!--&lt;!&ndash;                      <span>删除</span>&ndash;&gt;-->
  <!--&lt;!&ndash;                    </el-card>&ndash;&gt;-->
  <!--&lt;!&ndash;                  </el-col>&ndash;&gt;-->

  <!--&lt;!&ndash;                  </el-row>&ndash;&gt;-->
  <!--                </div>-->


  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->

  <!--        </td>-->
  <!--        <td>-->
  <!--&lt;!&ndash;          <div class="scene scene&#45;&#45;card">&ndash;&gt;-->
  <!--&lt;!&ndash;            <div v-on:click="c_click_card(1)" v-bind:class="{'card':is_front_list[1],'card is-flipped':!is_front_list[1]}">&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;front">front</div>&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;back">back</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--        </td>-->
  <!--        <td>-->
  <!--&lt;!&ndash;          <div class="scene scene&#45;&#45;card">&ndash;&gt;-->
  <!--&lt;!&ndash;            <div v-on:click="c_click_card(2)" v-bind:class="{'card':is_front_list[2],'card is-flipped':!is_front_list[2]}">&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;front">front</div>&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;back">back</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--        </td>-->
  <!--      </tr>-->
  <!--      <tr>-->
  <!--        <td>-->
  <!--&lt;!&ndash;          <div class="scene scene&#45;&#45;card">&ndash;&gt;-->
  <!--&lt;!&ndash;            <div v-on:click="c_click_card(3)" v-bind:class="{'card':is_front_list[3],'card is-flipped':!is_front_list[3]}">&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;front">front</div>&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;back">back</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--        </td>-->
  <!--        <td>-->
  <!--&lt;!&ndash;          <div class="scene scene&#45;&#45;card">&ndash;&gt;-->
  <!--&lt;!&ndash;            <div v-on:click="c_click_card(4)" v-bind:class="{'card':is_front_list[4],'card is-flipped':!is_front_list[4]}">&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;front">front</div>&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;back">back</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--        </td>-->
  <!--        <td>-->
  <!--&lt;!&ndash;          <div class="scene scene&#45;&#45;card">&ndash;&gt;-->
  <!--&lt;!&ndash;            <div v-on:click="c_click_card(5)" v-bind:class="{'card':is_front_list[5],'card is-flipped':!is_front_list[5]}">&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;front">front</div>&ndash;&gt;-->
  <!--&lt;!&ndash;              <div class="card__face card__face&#45;&#45;back">back</div>&ndash;&gt;-->
  <!--&lt;!&ndash;            </div>&ndash;&gt;-->
  <!--&lt;!&ndash;          </div>&ndash;&gt;-->
  <!--        </td>-->
  <!--      </tr>-->
  <!--    </table>-->
</template>

<script>
export default {
name: "zhushi"
}
</script>

<style scoped>

</style>