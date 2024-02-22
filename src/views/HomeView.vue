<template>
  <section class="hero is-medium is-link">
    <!-- <ViewScroll/> -->
    <h2 class="mt-12 title font-bold text-gray-100 text-8xl drop-shadow-2xl text-center">
        Let us take you away
    </h2>
    <!-- <Services/> -->
    <div class="intro flex justify-center gap-10 mt-96 flex-wrap">
      <span class="flex items-center gap-5">
        <img
          src="https://preview.colorlib.com/theme/travello/images/beach.svg"
          alt="icon"
          class="w-16"
        />
        <span>
          <h3 class="font-bold">Top Destinations</h3>
          <p>Nulla pretium tincidunt felis, nec.</p>
        </span>
      </span>
      <span class="flex items-center gap-5">
        <img
          src="https://preview.colorlib.com/theme/travello/images/wallet.svg"
          alt="icon"
          class="w-16"
        />
        <span>
          <h3 class="font-bold">Top Destinations</h3>
          <p>Nulla pretium tincidunt felis, nec.</p>
        </span>
      </span>
      <span class="flex items-center gap-5">
        <img
          src="https://preview.colorlib.com/theme/travello/images/suitcase.svg"
          alt="icon"
          class="w-16"
        />
        <span>
          <h3 class="font-bold">Top Destinations</h3>
          <p>Nulla pretium tincidunt felis, nec.</p>
        </span>
      </span>
      <span class="w-full mt-11 mx-48 inline-block h-0.5 bg-slate-400 rounded-xl">
      </span>
    </div>

    <PopularDestinations class="pt-20" />
    <Testimonials class="mt-20" />
    <BestTips class="my-20" />
    <Footer class=""/>
  </section>
</template>

<script setup>
import PopularDestinations from "./PopularDestinations.vue";
import Testimonials from "./Testimonials.vue";
import BestTips from "./BestTips.vue";
import Footer from "./Footer.vue";
import Services from "./Services.vue";
import ViewScroll from "./ViewScroll.vue";


</script>

<style scoped>
div.intro {
  margin-top: 440px;
}
</style>