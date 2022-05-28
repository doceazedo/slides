<script lang="ts">
  import { browser } from '$app/env';
  import { Controls } from '$lib/components/controls';

  export let lastSlide: number, activeSlide: number, slidesLength: number;

  let isFullscreen = false;

  $: canGoBack = activeSlide > 0;
  $: canGoNext = activeSlide < slidesLength - 1;

  const goBack = () => {
    if (canGoBack) lastSlide = activeSlide--;
  };

  const goNext = () => {
    if (canGoNext) lastSlide = activeSlide++;
  };

  const toggleFullscreen = () => {
    if (!browser) return;
    isFullscreen = !document.fullscreenElement;
    if (!!document.fullscreenElement) return document.exitFullscreen();
    document.documentElement.requestFullscreen();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
      case 'Backspace':
        goBack();
        break;
      case 'ArrowRight':
      case 'Enter':
      case 'Tab':
      case ' ':
        goNext();
        break;
      case 'f':
        toggleFullscreen();
    }
  };
</script>

<svelte:body on:keydown={handleKeyDown} />

<Controls
  {activeSlide}
  {slidesLength}
  {canGoBack}
  {canGoNext}
  {isFullscreen}
  {goBack}
  {goNext}
  {toggleFullscreen}
/>
