import { createRouter, createWebHistory } from 'vue-router'

import SliderTest from "@/components/SliderTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //
  // ]
  routes: [
    {
      name: "TestSlider",
      path: "/",
      component: SliderTest,
    },
  ]
})

export default router
