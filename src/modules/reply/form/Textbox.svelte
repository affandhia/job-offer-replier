<script>
  export let data;
  export let key;

  import Input from "../../../components/Input.svelte";
</script>

<style>
</style>

<label 
  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
  {key}
</label>
<Input bind:value={data.value} />