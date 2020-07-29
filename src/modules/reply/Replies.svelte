<script>
  import { recruiterName, recruiterCompany, replies } from "./_common/stores.js";
  import Reply from "./replyItem/Reply.svelte";
</script>

<div class="flex flex-col w-full">
  {#each $replies as _, i}
    <Reply index={i} />
  {/each}
</div>
