<script>
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

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<label>{key}</label>

<fieldset class="container" id={key}>
  {#each data.value as item, i}
    <label>
      <input type="radio" bind:group={value} value={i}>
      {item.text}
    </label>
  {/each}
</fieldset>