<script>
  export let value;
  export let label;
  export let placeholder;
  export let isError;

  import Input from "src/components/Input.svelte";
  import Label from "src/components/Label.svelte";
</script>

<Label text={label} /> 
<Input bind:value placeholder={placeholder} {isError} />