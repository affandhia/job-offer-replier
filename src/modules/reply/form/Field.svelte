<script>
  import Textbox from "./Textbox.svelte";
  import Radio from "./Radio.svelte";
  import { fieldType } from "../_common/constans.js";

  export let data;
  export let key;
  export let index;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  {#if data.type === fieldType.TEXT}
  <Textbox bind:data={data} key={key} />
  {:else if data.type === fieldType.RADIO}
  <Radio bind:data={data} key={key} />
  {/if}
</div>