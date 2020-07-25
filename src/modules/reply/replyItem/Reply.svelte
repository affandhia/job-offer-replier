<script>
  import { setContext } from "svelte";
  import { replies } from "../_common/stores.js";
  import Form from "../form/Form.svelte";
  import { useReply } from "./useReply.js";
  export let index;
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .left {
    white-space: pre-wrap;
  }
</style>

<div class="container">
  <div class="left sticky">
    {useReply($replies[index]).text}
  </div>
  <div class="right">
    <Form bind:fields={$replies[index].fields} />
  </div>
</div>