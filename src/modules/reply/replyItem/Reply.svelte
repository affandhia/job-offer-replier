<svelte:options immutable={true} />

<script>
  import { setContext } from "svelte";
  import { useReply } from "./useReply.js";
  import Form from "../form/Form.svelte";
  export let data;
  export let onUpdate;
  let pack;
  let fields = data.fields;

  const updateFields = fields => {
    data.fields = fields;
    pack = useReply(data);
    onUpdate(data);
  };

  $: fields, updateFields(fields);

  const handleClick = () => {
    fields = {};
  };
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
{@debug fields}
<div class="container">
  <div class="left">
    {pack.text}
  </div>
  <div class="right">
    <Form bind:fields={fields} onUpdate={updateFields} />
  </div>
</div>