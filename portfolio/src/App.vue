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
  justify-content: center;
  border: 2px dotted rgb(96 139 168);
  height: 100vh;
  width: 800px;
}
</style>