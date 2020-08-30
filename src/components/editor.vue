<template>
  <div>
    <div id="editorElem" style="text-align:left"></div>
  </div>
</template>

<script>
  import E from "wangeditor";
  export default {
    data() {
      return {
        editor: null,
      };
    },
    mounted() {
      var editor = new E("#editorElem");
      editor.customConfig.menus = [
        "fontSize",
        "fontName",
        "italic",
        "head",
        "bold",
        "link",
        "image",
        "underline",
        "justify",
      ];
      editor.create();
      this.editor = editor;
    },
  };
</script>

<style>
</style>