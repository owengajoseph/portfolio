<template>
  <div class="body-flex">
    <Intro></Intro>
    <About></About>
    <Project></Project>
  </div>
</template>



<script setup>
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';

</script>

<style>
.body-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 66%;
  padding: 10px;
}


</style>