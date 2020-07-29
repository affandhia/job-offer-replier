<script>
  import Textbox from "./Textbox.svelte";
  import Radio from "./Radio.svelte";
  import { fieldType } from "../_common/constants.js";

  export let data;
  export let key;
  const getEmptyStatus = (type, value) => {
    switch (type) {
      case fieldType.TEXT:
        return !value
      case fieldType.RADIO:
        return value.filter(i => i.isSelected).length === 0;
      default:
        throw new Error('checking unsupported type')
    }
  }

  $: isEmpty = getEmptyStatus(data.type, data.value);
</script>

<style>
  .empty {
    @apply bg-red-100 border-red-500;
  }
</style>

<div class="flex flex-col my-2 first:mt-0 py-4 px-2 rounded bg-gray-100 transition-colors duration-500 border" class:empty={isEmpty}>
  {#if data.type === fieldType.TEXT}
  <Textbox bind:data={data} key={key} isError={isEmpty} />
  {:else if data.type === fieldType.RADIO}
  <Radio bind:data={data} key={key}/>
  {/if}
</div>