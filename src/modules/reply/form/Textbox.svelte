<script>
  export let data;
  export let key;

  import InputField from "../../../components/InputField.svelte";
</script>

<style>
</style>

<InputField bind:value={data.value} placeholder={`\$\$${key}`} label={key} />