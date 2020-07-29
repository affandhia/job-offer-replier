<script>
  import Label from "src/components/Label.svelte";
  import Input from "src/components/Input.svelte";
  import RadioGroup from "src/components/RadioGroup.svelte";
  import Radio from "src/components/Radio.svelte";
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
<fieldset class="flex flex-col" id={key}>
  <RadioGroup>
  {#each data.value as item, i}
    <div class="flex flex-row items-center w-full my-1 first:mt-0">
      <Radio value={i} bind:group={value} label={item.text} />
      <button on:click={() => handleRemove(i)} class="text-xs text-red-400 rounded-full border border-red-400 hover:bg-red-400 hover:text-white px-2 py-0 ml-2 font-bold">{'x'}</button>
    </div>
  {/each}
  </RadioGroup>
  <div class="mt-4">
    <Input bind:value={newEntry} placeholder="add new option" on:enterpress={handleEnter}/>
  </div>
</fieldset>