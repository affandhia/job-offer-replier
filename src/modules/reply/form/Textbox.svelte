<script>
  export let data;
  export let key;

  const handleChange = e => {
    console.log(e.target.value);
  };
</script>

<style>
</style>

<label>{key}</label>
<input type="text" bind:value={data.value}/>