<!-- =========================================================================================
    File Name: Tree.vue
    Description: Tree demo
    ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
========================================================================================== -->
<template>
  <div id="page-tree-demo">
    <tree-dropdown></tree-dropdown>
    <tree-search-tree></tree-search-tree>
    <tree-async-tree></tree-async-tree>
  </div>
</template>

<script>
import TreeDropdown from './TreeDropdown.vue'
import TreeSearchTree from './TreeSearchTree.vue'
import TreeAsyncTree from './TreeAsyncTree.vue'

export default {
  components: {
    TreeDropdown,
    TreeSearchTree,
    TreeAsyncTree
  }
}
</script>
