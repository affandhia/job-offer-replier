<script>
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  export let value;
  export let placeholder;
  export let isError = false;

  const handleKeyPress = (e) => {
    if(e.code === 'Enter') {
      dispatch('enterpress' , { value });
    }
  }
</script>

<style>
  .error {
    @apply bg-red-200 border-red-200 text-red-700;
  }

  .error::placeholder {
    @apply text-red-300;
  }

  .error:focus {
    @apply bg-white;
  }
</style>

<input
  type="text"
  class="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border 
  border-gray-200 rounded py-1 px-2 leading-normal focus:outline-none 
  focus:bg-white focus:border-gray-500"
  class:error={isError}
  bind:value
  placeholder={placeholder}
  on:keypress={handleKeyPress}
  />