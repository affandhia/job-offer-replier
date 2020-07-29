<script>
  import cx from "classnames";
  export let value;
  export let label = '';
  export let isDisabled = false;
  export let group;
  let className = '';
  export { className as class }
  $: isActive = group === value;
</script>

<style>
  .radio {
    @apply text-xs transition-colors duration-300 flex-auto text-gray-500;
  }
  .active {
    @apply text-gray-700;
  }
</style>

<label class={cx('radio', className)} class:active={isActive}>
  <input type="radio" bind:group disabled={isDisabled} value={value}>
  {label}
</label>