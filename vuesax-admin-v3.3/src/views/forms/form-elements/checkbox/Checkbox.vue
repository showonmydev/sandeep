<!-- =========================================================================================
    File Name: Checkbox.vue
    Description: Checkbox Element - Imports all page portions.
    ----------------------------------------------------------------------------------------
    Item Name: The Key Society
      Author: Marwan Refaat
    Author URL: https://TheKeySociety.com
========================================================================================== -->


<template>
    <div id="form-element-checkbox-demo">
        <checkbox-state></checkbox-state>
        <checkbox-color></checkbox-color>
        <checkbox-boolean-value></checkbox-boolean-value>
        <checkbox-string-value></checkbox-string-value>
        <checkbox-array-value></checkbox-array-value>
        <checkbox-array-object-value></checkbox-array-object-value>
        <checkbox-change-icon></checkbox-change-icon>
    </div>
</template>

<script>
import CheckboxState from './CheckboxState.vue'
import CheckboxColor from './CheckboxColor.vue'
import CheckboxBooleanValue from './CheckboxBooleanValue.vue'
import CheckboxStringValue from './CheckboxStringValue.vue'
import CheckboxArrayValue from './CheckboxArrayValue.vue'
import CheckboxArrayObjectValue from './CheckboxArrayObjectValue.vue'
import CheckboxChangeIcon from './CheckboxChangeIcon.vue'

export default{
    components: {
        CheckboxState,
        CheckboxColor,
        CheckboxBooleanValue,
        CheckboxStringValue,
        CheckboxArrayValue,
        CheckboxArrayObjectValue,
        CheckboxChangeIcon
    }
}
</script>
