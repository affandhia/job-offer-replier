<script>
  import { recruiterName, recruiterCompany, replies } from "./_common/stores.js";
  import Reply from "./replyItem/Reply.svelte";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  {#each $replies as _, i}
    <Reply index={i} />
  {/each}
</div>

<pre>{JSON.stringify($replies, null,2 )}</pre>