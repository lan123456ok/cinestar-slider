<template>
  <VueFlux
      :rscs="rscs"
      :transitions="transitions"
  >
    <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps"/>
    </template>

    <template #controls="controlsProps">
      <FluxControls v-bind="controlsProps"/>
    </template>
  </VueFlux>
</template>

<script setup>
import { ref, shallowReactive } from "vue";
import {
	Img,
	FluxPreloader,
	FluxControls,
	VueFlux,
	Blinds3D,
	Blocks2,
	Book,
	Cube,
	Warp,
	Wave,
} from 'vue-flux';


const rscs = shallowReactive([
	new Img('https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/Mung_1_1.jpg', 'image caption 1'),
	new Img('https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/1215wx683h_Chi_Bau.jpg', 'image caption 2'),
	new Img('https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/1215wx683h_Argylle.jpg', 'image caption 3'),
  new Img('https://api-website.cinestar.com.vn/media/MageINIC/bannerslider/km-m-2.jpg', 'image caption 4'),
]);

const transitions = shallowReactive([
	Blinds3D,
	Blocks2,
	Book,
	Cube,
	Warp,
	Wave,
]);

</script>
