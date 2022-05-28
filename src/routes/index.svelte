<script lang="ts">
  import { quadIn } from 'svelte/easing';
  import { slideOut } from '$lib/transitions';
  import { Controls } from '$lib/modules/controls';
  import { theme, slides } from '../__slides__';

  let lastSlide = -1;
  let activeSlide = 0;
  let slidesLength = slides.length;

  $: isGoingBack = lastSlide > activeSlide;
</script>

<div id="slideshow" class:back={isGoingBack}>
  {#key activeSlide}
    <div
      class="slide"
      out:slideOut={{
        duration: 800,
        direction: isGoingBack ? 'right' : 'left',
        easing: quadIn,
      }}
    >
      <svelte:component this={slides[activeSlide]} />
    </div>
  {/key}
</div>

<Controls bind:lastSlide bind:activeSlide {slidesLength} />

<style lang="sass">
  #slideshow,
  .slide
    width: 100%
    height: 100%
    overflow: hidden

  #slideshow
    display: flex

    &.back
      flex-direction: row-reverse

    :global(> *)
      cursor: default

  .slide
    flex-shrink: 0
</style>
