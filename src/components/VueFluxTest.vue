<template>

</template>

<script>
import { ref, shallowReactive} from "vue";

// vue flux
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
  Img,
  Book,
  Zip
} from "vue-flux";
import 'vue-flux/dist/style.css'

const $vueFlux = ref();

const options = shallowReactive({
  autoplay: true,
});

const rscs = shallowReactive([
    new Img('URL1' ,'Img 1'),
])

</script>