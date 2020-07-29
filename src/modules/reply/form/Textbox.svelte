<script>
  export let isError;
  export let data;
  export let key;

  import InputField from "../../../components/InputField.svelte";
  import { camelToTitle } from "../../../utils/stringUtils.js";
</script>

<style>
</style>


<InputField bind:value={data.value} placeholder={`\$\$${key}`} label={camelToTitle(key)} {isError} />
