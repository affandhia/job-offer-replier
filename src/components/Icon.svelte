<script>
  import cx from "classnames";
  export let src;
  export let fill = undefined;
  export let stroke = undefined;
</script>

<style>
 div :global(.fill-current path, .fill-current rect) {
   @apply fill-current !important;
 }
 div :global(.stroke-current path, .stroke-current rect) {
   @apply stroke-current !important;
 }
</style>

<div>
  <svelte:component this={src} {...$$props} src={undefined} 
  class={cx(
    { "fill-current": fill != null },
    { "stroke-current": stroke != null },
    fill,
    stroke,
    $$props.class
  )} />
</div>