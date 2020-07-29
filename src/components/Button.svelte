<script>
  import cx from 'classnames';
  import Icon from "src/components/Icon.svelte";

  const BUTTON_VARIANT = {
    LARGE: 'large',
    NORMAL: 'normal',
    SMALL: 'small',
  }

  export let text = '';
  export let onPress = undefined;
  export let variant = BUTTON_VARIANT.NORMAL

  export let iconStart = undefined;
  export let iconStartProps = {};

  let hasChildren = $$props.$$slots && $$props.$$slots.default != null;
</script>

<style>
  .large {

  }
</style>

<button 
  class="flex flex-row items-center bg-gray-100 text-gray-700 focus:text-gray-900 rounded px-2 py-1 text-xs border border-gray-700 font-semibold"
>
  {#if iconStart}
    <Icon src={iconStart} 
    class={cx(
      { "mr-1": text || hasChildren }
    )} 
    stroke="text-gray-500" width="16" height="16" {...iconStartProps} />
  {:else}
    <slot name="iconStart" />
  {/if}
  {#if text}
    {text}
  {:else}
    <slot />
  {/if}
</button>