<script lang="ts">
  import {
    ChevronLeft,
    ChevronRight,
    Fullscreen,
    FullscreenExit,
  } from '$lib/components/icons';

  export let activeSlide: number,
    slidesLength: number,
    canGoBack: boolean,
    canGoNext: boolean,
    isFullscreen: boolean,
    goBack: () => void,
    goNext: () => void,
    toggleFullscreen: () => void;
</script>

<div class="controls-wrapper">
  <div class="controls">
    <button class="button" on:click={goBack} disabled={!canGoBack}>
      <ChevronLeft />
    </button>
    <button class="button" on:click={goNext} disabled={!canGoNext}>
      <ChevronRight />
    </button>
    <button class="button sm" on:click={toggleFullscreen}>
      {#if isFullscreen}
        <FullscreenExit />
      {:else}
        <Fullscreen />
      {/if}
    </button>
    <span class="info">{activeSlide + 1}/{slidesLength}</span>
  </div>
</div>

<style lang="sass">
  .controls-wrapper
    position: absolute
    bottom: 0
    left: 0
    display: flex
    align-items: flex-end
    width: 16rem
    height: 8rem
    padding: 1rem

    &:not(:hover) .controls
      transform: translateY(.25rem)
      opacity: 0

  .controls
    display: flex
    background-color: rgba(#000, .5)
    border-radius: 1rem
    overflow: hidden
    font-family: sans-serif
    user-select: none
    transition: all .1s ease

    > *
      height: 1.5rem
      width: 1.5rem

    .button
      padding: 0
      background: none
      border: none
      color: #fff

      &:not(:disabled):hover
        background-color: rgba(#fff, .1)

      &:disabled
        color: rgba(#fff, .5)

      :global(svg)
        height: 1.25rem
        width: 1.25rem

      &.sm :global(svg)
        height: 1rem
        width: 1rem

    .info
      display: flex
      align-items: center
      box-sizing: content-box
      padding: 0 .5rem
      font-size: 14px
      color: rgba(#fff, .5)
</style>
