<script>
  import { setContext } from "svelte";
  import { replies } from "../_common/stores.js";
  import Form from "../form/Form.svelte";
  import { useReply } from "./useReply.js";
  export let index;
</script>

<style>
  .left {
    white-space: pre-wrap;
  }
</style>

<div class="flex flex-row w-full items-start">
  <div class="left sticky top-0">
    {useReply($replies[index]).text}
  </div>
  <div class="right">
    <Form bind:fields={$replies[index].fields} />
  </div>
</div>