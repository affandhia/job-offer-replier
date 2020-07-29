<script>
  import { setContext } from "svelte";
  import { replies } from "src/modules/reply/_common/stores.js";
  import CopyIcon from 'ionicons/dist/svg/copy-outline.svg'
  import Form from "src/modules/reply/form/Form.svelte";
  import Button from "src/components/Button.svelte";
  import Icon from "src/components/Icon.svelte";
  import Toolbar from "src/modules/reply/textEditor/Toolbar.svelte";
  import { useReply } from "./useReply.js";
  export let index;
  
  let reply = $replies[index];
  $: text = useReply(reply).text.trim();
</script>

<style>
  div :global(.red-icon *) {
    @apply stroke-current text-teal-500 !important;
  }
</style>

<div class="flex flex-row w-full items-start">
  <div class="my-4 mx-4">
    <div class="text-sm py-4 px-4 bg-blue-100 text-blue-700 rounded">
        {reply.information}
    </div>
    <div class="mt-2">
      <Toolbar>
        <Button iconStart={CopyIcon}></Button>
      </Toolbar>
      <div class="py-4 px-4 border border-gray-300 text-gray-800 rounded rounded-t-none">
        <pre class="whitespace-pre-wrap text-xs">{text}</pre>
      </div>
    </div>
  </div>
  <div class="max-h-screen overflow-y-scroll mr-4 my-4">
    <Form bind:fields={reply.fields} />
  </div>
</div>