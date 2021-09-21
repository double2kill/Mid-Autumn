<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div id="mid-autumn-festival">
  <div class="moon"></div>
  <div class="moon-halo"></div>
  <div class="cloud1">
    <div class="no-border c1"></div>
    <div class="no-border c2"></div>
    <div class="no-border c3"></div>
    <div class="no-border c4"></div>
    <div class="no-border c5"></div>
    <div class="no-border c6"></div>
  </div>
  <div class="cloud2">
    <div class="no-border c1"></div>
    <div class="no-border c2"></div>
    <div class="no-border c3"></div>
    <div class="no-border c4"></div>
    <div class="no-border c5"></div>
    <div class="no-border c6"></div>
  </div>
  <div class="cloud2 c-left">
    <div class="no-border c1"></div>
    <div class="no-border c2"></div>
    <div class="no-border c3"></div>
    <div class="no-border c4"></div>
    <div class="no-border c5"></div>
    <div class="no-border c6"></div>
  </div>
  <div id="rabbit">
    <div class="body">
      <div class="body1"></div>
      <div class="body2"></div>
    </div>
    <div class="head"></div>
    <div class="mouth"></div>
    <div class="ear1"></div>
    <div class="ear2"></div>
    <div class="hand1"></div>
    <div class="hand1"></div>
    <div class="foot1"></div>
    <div class="foot2"></div>
    <div class="tail"></div>
  </div>
  <div class="message">中秋节快乐！</div>
</div>
</template>

<style scoped>
#mid-autumn-festival * {
  position: absolute;  
  box-sizing:content-box;
  -moz-box-sizing:content-box;
}

#mid-autumn-festival {
	margin: 50px auto;
  position: relative;
  transform: scale(0.75);
  width: 400px;
  height: 250px;
}

.moon {
  width: 200px;
  height: 200px;
  top: 30px;
  left: 100px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: #FFCC00;
  background: -webkit-linear-gradient(#FFFF00, #FFCC00);
  background: -o-linear-gradient(#FFFF00, #FFCC00);
  background: -moz-linear-gradient(#FFFF00, #FFCC00);
  background: linear-gradient(#FFFF00, #FFCC00);
}
.moon-halo {
  width: 200px;
  height: 200px;
  top: 30px;
  left: 100px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 30px 5px rgba(255, 255, 240, 1);
  -moz-box-shadow: 0px 0px 30px 5px rgba(255, 255, 240, 1);
  box-shadow: 0px 0px 30px 5px rgba(255, 255, 240, 1);
}

.cloud1 {
  left: 15px;
  top: 10px;
}
.cloud1 * {
  border: 1px solid #110b00;    
}
.cloud1 .no-border {
  border: none; 
}

.cloud1 .c1 {
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  width: 50px;
  height: 50px;
  top: 150px;
  left: 210px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background-color: #FFFFF0;
}
.cloud1 .c2 {
  border-right: 1px solid #000;
  width: 40px;
  height: 40px;
  top: 155px;
  left: 235px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: #FFFFF0;
  -webkit-transform: rotate(-83deg);
  -moz-transform: rotate(-83deg);
  -ms-transform: rotate(-83deg);
  -o-transform: rotate(-83deg);
  transform: rotate(-83deg);
}
.cloud1 .c3 {
  border-right: 1px solid #000;
  width: 20px;
  height: 30px;
  top: 135px;
  left: 267px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: none;
  -webkit-box-shadow: 10px 5px 0px 3px rgba(255, 255, 240, 1);
  -moz-box-shadow: 10px 5px 0px 3px rgba(255, 255, 240, 1);
  box-shadow: 10px 5px 0px 3px rgba(255, 255, 240, 1);
  -webkit-transform: rotate(50deg);
  -moz-transform: rotate(50deg);
  -ms-transform: rotate(50deg);
  -o-transform: rotate(50deg);
  transform: rotate(50deg);
  z-index: 10;
}
.cloud1 .c4 {
  border-bottom: 1px solid #000;
  width: 45px;
  height: 40px;
  top: 170px;
  left: 220px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: #FFFFF0;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
}
.cloud1 .c5 {
  width: 70px;
  height: 60px;
  top: 122px;
  left: 223px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: none;
  -webkit-box-shadow: -10px 14px 0px 3px rgba(255, 255, 240, 1);
  -moz-box-shadow: -10px 14px 0px 3px rgba(255, 255, 240, 1);
  box-shadow: -10px 14px 0px 3px rgba(255, 255, 240, 1);
  -webkit-transform: rotate(-50deg);
  -moz-transform: rotate(-50deg);
  -ms-transform: rotate(-50deg);
  -o-transform: rotate(-50deg);
  transform: rotate(-50deg);
}
.cloud1 .c6 {
  border-bottom: 1px solid #000;
  width: 70px;
  height: 60px;
  top: 140px;
  left: 230px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: none;
  -webkit-transform: rotate(-50deg);
  -moz-transform: rotate(-50deg);
  -ms-transform: rotate(-50deg);
  -o-transform: rotate(-50deg);
  transform: rotate(-50deg);
}


.cloud2 {
  left: -60px;
  top: 20px;
}
.cloud2 * {
  border: 1px solid #110b00;    
}
.cloud2 .no-border {
  border: none; 
}

.cloud2 .c1 {
  border-top: 1px solid #000;
  width: 50px;
  height: 50px;
  top: 140px;
  left: 190px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background-color: #FFFFF0;
}
.cloud2 .c2 {
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  width: 45px;
  height: 45px;
  top: 150px;
  left: 220px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background-color: #FFFFF0;
  -webkit-transform: rotate(-60deg);
  -moz-transform: rotate(-60deg);
  -ms-transform: rotate(-60deg);
  -o-transform: rotate(-60deg);
  transform: rotate(-60deg);
}
.cloud2 .c3 {
  border-bottom: 1px solid #000;
  width: 70px;
  height: 50px;
  top: 160px;
  left: 180px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background-color: #FFFFF0;
}
.cloud2 .c4 {
  border-top: 1px solid #000;
  width: 60px;
  height: 50px;
  top: 150px;
  left: 150px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background-color: #FFFFF0;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  -ms-transform: rotate(-20deg);
  -o-transform: rotate(-20deg);
  transform: rotate(-20deg);
}
.cloud2 .c5 {
  border-left: 1px solid #000;
  width: 100px;
  height: 30px;
  top: 175px;
  left: 110px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background-color: #FFFFF0;
}

.c-left {
  top: 70px;
  right: -200px;
  -webkit-transform: scale(-.5, .7);
  -moz-transform: scale(-.5, .7);
  -ms-transform: scale(-.5, .7);
  -o-transform: scale(-.5, .7);
  transform: scale(-.5, .7);
}
.c-left .c5 {
  width: 50px;
  left: 140px;
}

#rabbit {
  width: 400px;
  height: 400px;
  top: -20px;
  left: -50px;
  margin: 0 auto;
  position: relative;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
}
#rabbit * {
  position: absolute;  
  box-sizing:content-box;
  -moz-box-sizing:content-box;
}
#rabbit .head {
  width: 40px;
  height: 40px;
  top: 70px;
  left: 210px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
#rabbit .mouth {
  width: 18px;
  height: 25px;
  top: 80px;
  left: 235px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: rotate(60deg);
  -moz-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  -o-transform: rotate(60deg);
  transform: rotate(60deg);
}
#rabbit .ear1 {
  width: 50px;
  height: 15px;
  top: 60px;
  left: 175px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg);
}
#rabbit .ear2 {
  width: 50px;
  height: 13px;
  top: 75px;
  left: 170px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
#rabbit .body1 {
  width: 60px;
  height: 40px;
  top: 100px;
  left: 180px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  -o-transform: rotate(-30deg);
  transform: rotate(-30deg);
}
#rabbit .body2 {
  width: 50px;
  height: 50px;
  top: 100px;
  left: 175px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
  -ms-transform: rotate(-30deg);
  -o-transform: rotate(-30deg);
  transform: rotate(-30deg);
}
#rabbit .hand1 {
  width: 50px;
  height: 15px;
  top: 105px;
  left: 220px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: rotate(-20deg);
  -moz-transform: rotate(-20deg);
  -ms-transform: rotate(-20deg);
  -o-transform: rotate(-20deg);
  transform: rotate(-20deg);
}
#rabbit .foot1 {
  width: 50px;
  height: 15px;
  top: 140px;
  left: 160px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: rotate(70deg);
  -moz-transform: rotate(70deg);
  -ms-transform: rotate(70deg);
  -o-transform: rotate(70deg);
  transform: rotate(70deg);
}
#rabbit .foot2 {
  width: 40px;
  height: 13px;
  top: 135px;
  left: 155px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: rotate(100deg);
  -moz-transform: rotate(100deg);
  -ms-transform: rotate(100deg);
  -o-transform: rotate(100deg);
  transform: rotate(100deg);
}
#rabbit .tail {
  width: 15px;
  height: 15px;
  top: 115px;
  left: 165px;
  background-color: #00002E;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}


.message {
  width: 400px;
  font-size: 2em;
  top: 260px;
  text-align: center;
}

</style>
