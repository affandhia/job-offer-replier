<script>
  import { setContext } from "svelte";
  import { replies } from "src/modules/reply/_common/stores.js";
  import Icon from 'ionicons/dist/svg/add-circle-outline.svg'
  import Form from "src/modules/reply/form/Form.svelte";
  import Toolbar from "src/modules/reply/textEditor/Toolbar.svelte";
  import { useReply } from "./useReply.js";
  export let index;
  
  let reply = $replies[index];
  $: text = useReply(reply).text.trim();
</script>

<div class="flex flex-row w-full items-start">
  <div class="my-4 mx-4">
    <div class="text-sm py-4 px-4 bg-blue-100 text-blue-700 rounded">
        {reply.information}
    </div>
    <div class="mt-2 py-4 px-4 bg-gray-100 text-gray-800 rounded">
      <Toolbar>
      </Toolbar>
      <img src={Icon} height="32" width="32" alt="icon" />
      <pre class="whitespace-pre-wrap text-xs">{text}</pre>
    </div>
  </div>
  <div class="max-h-screen overflow-y-scroll mr-4 my-4">
    <Form bind:fields={reply.fields} />
  </div>
</div>