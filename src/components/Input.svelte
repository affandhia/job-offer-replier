<script>
  export let value
  export let placeholder
</script>

<input
  type="text"
  class="appearance-none block w-full bg-gray-200 text-gray-700 border 
  border-gray-200 rounded py-3 px-4 leading-normal focus:outline-none 
  focus:bg-white focus:border-gray-500"
  bind:value
  placeholder={placeholder}
  />