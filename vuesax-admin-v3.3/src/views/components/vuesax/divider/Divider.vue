<!-- =========================================================================================
    File Name: Divider.vue
    Description: Divider - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: The Key Society
      Author: Marwan Refaat
    Author URL: https://TheKeySociety.com
========================================================================================== -->


<template>
    <div id="divider-demo">
        <divider-default></divider-default>
        <divider-text></divider-text>
        <divider-text-position></divider-text-position>
        <divider-color></divider-color>
        <divider-icon></divider-icon>
        <divider-style></divider-style>
    </div>
</template>

<script>
import DividerDefault from './DividerDefault.vue'
import DividerText from './DividerText.vue'
import DividerTextPosition from './DividerTextPosition.vue'
import DividerColor from './DividerColor.vue'
import DividerIcon from './DividerIcon.vue'
import DividerStyle from './DividerStyle.vue'

export default{
    components: {
        DividerDefault,
        DividerText,
        DividerTextPosition,
        DividerColor,
        DividerIcon,
        DividerStyle,
    }   
}
</script>