<script>
  import Radio from "src/components/Radio.svelte";
  export let value = undefined;
  export let options = [];
</script>

{#each options as item}
  <div class="flex flex-row items-center w-full">
    <Radio bind:group={value} label={item.label} isDisabled={item.isDisabled} value={item.value} />
  </div>
{/each}
<slot>
</slot>