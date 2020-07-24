<script>
  import { recruiterName, recruiterCompany, replies } from "./_common/stores.js";
  import Reply from "./replyItem/Reply.svelte";

  const handleUpdate = index => reply => {
    replies.update(replies =>
      replies.map((oldReply, i) => (i === index ? reply : oldReply))
    );
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="container">
  {#each $replies as reply, i}
    <Reply data={reply} onUpdate={handleUpdate(i)}/>
  {/each}
</div>

<pre>{JSON.stringify($replies, null,2 )}</pre>