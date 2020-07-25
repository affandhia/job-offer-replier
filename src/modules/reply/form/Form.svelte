<script>
  import Field from "./Field.svelte";
  export let fields;
  export let onUpdate;

  $: keys = Object.keys(fields);
  $: fields, onUpdate(fields);

  const handleClick = () => {
    fields.name.value = "hehe";
    fields = { ...fields, name: { ...fields.name, value: "hehe" } };
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  {#each keys as key, i}
    <Field bind:key={key} index={i} bind:data={fields[key]} />
  {/each}
</div>