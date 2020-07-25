<script>
  import Label from "src/components/Label.svelte";
  import Input from "src/components/Input.svelte";
  import { camelToTitle } from "src/utils/stringUtils.js";

  export let data;
  export let key;

  let newEntry = '';

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

  const handleEnter = (e) => {
    const text = e.detail.value;
    if(text === '') return;
    newEntry = '';
    data.value = [...data.value, {
      isSelected: false,
      text: text
    }]
  };

  const handleRemove = (index) => {
    if(index === value) value = -1
    data.value = data.value.filter((_, i) => index !== i);
  }
</script>

<Label text={camelToTitle(key)} />

{@debug value}
<fieldset class="flex flex-col" id={key}>
  {#each data.value as item, i}
    <div class="flex flex-row items-center w-full">
    <label class={i === value ? "text-xs text-gray-700 flex-auto" : "text-xs text-gray-500 flex-auto"}>
      <input type="radio" bind:group={value} value={i}>
      {item.text}
    </label>
    <button on:click={() => handleRemove(i)} class="text-red-400 rounded border border-red-400 hover:bg-red-400 hover:text-white px-2 py-0 font-bold">{'x'}</button>
    </div>
  {/each}
  <div class="mt-4">
    <Input bind:value={newEntry} placeholder="add new option" on:enterpress={handleEnter}/>
  </div>
</fieldset>