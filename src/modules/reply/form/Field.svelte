<script>
  import Textbox from "./Textbox.svelte";
  import Radio from "./Radio.svelte";
  import { fieldType } from "../_common/constans.js";

  export let data;
  export let key;
</script>

<div class="flex flex-col my-2 py-4 px-2 rounded bg-gray-100">
  {#if data.type === fieldType.TEXT}
  <Textbox bind:data={data} key={key} />
  {:else if data.type === fieldType.RADIO}
  <Radio bind:data={data} key={key} />
  {/if}
</div>