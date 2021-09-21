<script setup>
defineProps({
  number: Number
})

</script>

<template>
  <div v-if="number === 1" class="first-face">
    <span class="pip"></span>
  </div>
  <div v-else-if="number === 2"  class="second-face">
    <span class="pip"></span>
    <span class="pip"></span>
  </div>
  <div v-else-if="number === 3"  class="third-face">
    <span class="pip"></span>
    <span class="pip"></span>
    <span class="pip"></span>
  </div>
  <div v-else-if="number === 4" class="fourth-face">
    <div class="column">
      <span class="pip"></span>
      <span class="pip"></span>
    </div>
    <div class="column">
      <span class="pip"></span>
      <span class="pip"></span>
    </div>
  </div>
  <div v-else-if="number === 5" class="fifth-face">
    <div class="column">
      <span class="pip"></span>
      <span class="pip"></span>
    </div>
    <div class="column">
      <span class="pip"></span>
    </div>
    <div class="column">
      <span class="pip"></span>
      <span class="pip"></span>
    </div>
  </div>
  <div v-else-if="number === 6" class="sixth-face">
    <div class="column">
      <span class="pip"></span>
      <span class="pip"></span>
      <span class="pip"></span>
    </div>
    <div class="column">
      <span class="pip"></span>
      <span class="pip"></span>
      <span class="pip"></span>
    </div>
  </div>
</template>

<style>
.first-face {
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-face {
  display: flex;
  justify-content: space-between;
}

.second-face .pip:nth-of-type(2) {
  align-self: flex-end;
}

.third-face {
  display: flex;
  justify-content: space-between;
}
  
.third-face .pip:nth-of-type(2) {
  align-self: center;
}

.third-face .pip:nth-of-type(3) {
  align-self: flex-end;
}

.fourth-face, .sixth-face {
  display: flex;
  justify-content: space-between;
}

.fourth-face .column, .sixth-face .column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fifth-face {
  display: flex;
  justify-content: space-between;
}
  
.fifth-face .column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
  
.fifth-face .column:nth-of-type(2) {
  justify-content: center;
}

/* OTHER STYLES */

* {
  box-sizing: border-box;
}

[class$="face"] {
  margin: 4px;
  padding: 8px;
  
  background-color: #e7e7e7;
  width: 40px;
  height: 40px;
  object-fit: contain;
  
  box-shadow:
    inset 0 2.5px white, 
    inset 0 -2.5px #bbb,
    inset 2.5px 0 #d7d7d7, 
    inset -2.5px 0 #d7d7d7;
  
  border-radius: 10%;
}

.pip {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background-color: #111;
}

.first-face .pip {
    width: 12px;
    height: 12px;
    background-color: red;
}

.fourth-face .pip {
    background-color: red;
}

.sixth-face {
    padding-top: 6px;
    padding-bottom: 6px;
}

</style>
