<script>
  export let data;
  export let key;

  import Input from "../../../components/Input.svelte";
</script>

<style>
</style>

<label>{key}</label>
<Input bind:value={data.value} />