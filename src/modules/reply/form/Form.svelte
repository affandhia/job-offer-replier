<script>
  import Field from "./Field.svelte";
  export let fields;
</script>

<div class="flex flex-col">
  {#each Object.keys(fields) as key, i}
    <Field bind:key={key} bind:data={fields[key]} />
  {/each}
</div>