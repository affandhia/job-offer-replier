<script>
  export let value;
  export let label;
  export let placeholder;

  import Input from "./Input.svelte";
</script>

<style>
</style>

<label 
  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
  {label}
</label>
<Input bind:value placeholder={placeholder} />