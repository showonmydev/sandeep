<!-- =========================================================================================
  File Name: ContextMenu.vue
  Description: Context menu Demo
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
========================================================================================== -->

<template>
  <div id="context-menu-demo">
    <context-menu-simple />
    <context-menu-click-not-close />
  </div>
</template>

<script>
import ContextMenuSimple from './ContextMenuSimple.vue'
import ContextMenuClickNotClose from './ContextMenuClickNotClose.vue'

export default{
  components: {
    ContextMenuSimple,
    ContextMenuClickNotClose,
  }
}
</script>