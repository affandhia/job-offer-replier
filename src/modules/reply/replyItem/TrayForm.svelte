<script>
  import { replies } from "src/modules/reply/_common/stores.js";
  import Form from "src/modules/reply/form/Form.svelte";
  export let index;
</script>

<div class="my-4 mx-4">
  <Form bind:fields={$replies[index].fields} />
</div>