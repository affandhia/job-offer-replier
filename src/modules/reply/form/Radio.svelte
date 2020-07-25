<script>
  import Label from "src/components/Label.svelte";
  import { camelToTitle } from "src/utils/stringUtils.js";

  export let data;
  export let key;

  let selectedIndex = data.value
    .map((item, i) => (item.isSelected ? i : null))
    .filter(i => i != null);
  let value = selectedIndex.length > 0 ? selectedIndex[0] : -1;

  const updateData = () => {
    data.value = data.value.map((item, i) => ({
      ...item,
      isSelected: i === value
    }));
  };

  $: value, updateData();
</script>

<Label text={camelToTitle(key)} />

<fieldset class="flex flex-col" id={key}>
  {#each data.value as item, i}
    <label class={i === value ? "text-xs text-gray-700" : "text-xs text-gray-500"}>
      <input type="radio" bind:group={value} value={i}>
      {item.text}
    </label>
  {/each}
</fieldset>