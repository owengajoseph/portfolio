<template>
  <div class="body-flex">
    <Intro v-once></Intro>
    <About v-once></About>
    <Project v-once></Project>
    <Library></Library>
    <MinimalPlayer></MinimalPlayer>
  </div>
</template>



<script setup>
import Intro from './components/Intro.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';
import Library from './components/Library.vue';
import MinimalPlayer from './components/MinimalPlayer.vue';

</script>

<style>
.body-flex {
  display: flex;
  flex-direction: column;
  border: 2px dotted rgb(96 139 168);
  justify-content: center;
  align-items: center;
  margin: 12px;
  padding: 40px 12px;
}
</style>