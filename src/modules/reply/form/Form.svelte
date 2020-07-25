<script>
  import Field from "./Field.svelte";
  export let fields;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  {#each Object.keys(fields) as key, i}
    <Field bind:key={key} bind:data={fields[key]} />
  {/each}
</div>