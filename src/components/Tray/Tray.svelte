<script>
  import { onMount } from "svelte";
  import { spring } from 'svelte/motion';
  import { trayStore, SHOWING_STATE, closeTray  } from "./Tray.stores.js";
  import { drag } from 'src/components/Draggable.svelte';
  import { portal } from "../Portal.svelte";

  let trayBody;
  const coords = spring({ y: 0 }, {
    stiffness: 0.2,
    damping: 0.4
  });

  // --- ACTIONS
  const getHeight = () => {
    switch ($trayStore.showing) {
      case SHOWING_STATE.FULL:
        return 95;
      case SHOWING_STATE.PARTIAL:
        return 40;
      case SHOWING_STATE.CLOSE:
        return 5;
      default:
        return 100;
    }
  }

  const animationNoDelay = () => {
    coords.stiffness = coords.damping = 1;
  }

  const animationWithBounce = () => {
    coords.stiffness = 0.2;
    coords.damping = 0.4;
  }

  const setInitHeight = () => {
    animationNoDelay();
    coords.update($coords => ({
      y: getHeight(),
    }));
    animationWithBounce();
  }

  const close = () => {
    $trayStore.isWithOverlay = false;
    closeTray();
    coords.set({ y: getHeight() });
  }

  // -- LIFECYCLE
  onMount(() => {
    setInitHeight();
  })

  // -- HANLDERS
  const handleClose = (event) => {
    close();
  }

  const handleBarClick = () => {
    close();
  }

  const handlePanStart = () => {
    animationNoDelay();
  }

  const handlePanMove = (event) => {
    coords.update($coords => {
      const y = $coords.y - (event.detail.dy / window.innerHeight * 100);
      
      if(y >= 40 && !$trayStore.isWithOverlay) {
        $trayStore.isWithOverlay = true;
      } else if (y < 40 && $trayStore.isWithOverlay) {
        $trayStore.isWithOverlay = false;
      }

      return {
        y
      };
    });
  }

  const handlePanEnd = (event) => {
    animationWithBounce();
    const { y } = $coords;
    if (y < 20) {
        $trayStore.showing = SHOWING_STATE.CLOSE;
      } else if (y < 70) {
        $trayStore.showing = SHOWING_STATE.PARTIAL;
      } else if (y >= 70) {
        $trayStore.showing = SHOWING_STATE.FULL;
      }
    coords.set({ y: getHeight() });
  }
</script>

<div 
  use:portal={'body'} 
  class="w-full portal"
>
  {#if $trayStore.isWithOverlay && $trayStore.showing !== SHOWING_STATE.HIDDEN}
    <div on:click={handleClose} class="overlay" style="background: rgba(0, 0, 0, {($coords.y - 40) / 55 * 0.5});" />
  {/if}
  
  <div 
    style="height:{$coords.y}%"
    class="container" 
    class:container-hidden={$trayStore.showing === SHOWING_STATE.HIDDEN}
  >
    <div 
      class="handle-bar" 
      use:drag
      on:panstart={handlePanStart}
      on:panmove={handlePanMove}
      on:panend={handlePanEnd}
    />
    <div bind:this={trayBody} class="body">
      <svelte:component this={$trayStore.body} {...$trayStore.props} />
    </div>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99;
  }

  .container {
    @apply max-w-none fixed bottom-0 left-0;
    background: white;
    border-top-left-radius: 16px; 
    border-top-right-radius: 16px;
    width: 100%;
    max-height: 100%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    z-index: 100;
    display: flex;
    flex-direction: column;
  }

  .body {
    overflow-y: auto;
  }

  .container-hidden {
    bottom: 100vh;
    left: 100%;
  }

  .handle-bar {
    width: 100%;
    position: relative;
    cursor: pointer;
  }

  .handle-bar:after {
    content: '';
    width: 2em;
    height: 4px;
    background-color: lightgray;
    border-radius: 99999px;
    display: block;
    margin: 8px auto;
  }

  .portal {
    width: 100%;
    height: 100%;
  }
</style>