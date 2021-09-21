<script setup>
import dice from "./components/dice.vue";
import MidAutumn from "./components/Mid-Autumn.vue";
import { handleStartRoll, diceNumberList } from "./App.js";
</script>

<template>
  <MidAutumn />
  <div class="main-box">
    <button class="start-button" @click="handleStartRoll">开始掷</button>
    <template v-for="(diceNumber, index) in diceNumberList" :key="index">
      <dice :number="diceNumber" />
    </template>
  </div>
</template>

<style>

.start-button {
  font-size: 18px;
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
}
.main-box {
  display: flex;
  position: relative;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  vertical-align: center;
  flex-wrap: wrap;
  align-content: center;
  font-family: 'Open Sans', sans-serif;
  background: linear-gradient(top, #222, #333);
}
</style>
