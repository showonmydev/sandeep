<!-- =========================================================================================
    File Name: Textarea.vue
    Description: Add textarea using vs-textarea - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: The Key Society
      Author: Marwan Refaat
    Author URL: https://TheKeySociety.com
========================================================================================== -->


<template>
    <div id="form-element-textarea-demo">
        <textarea-default></textarea-default>
        <textarea-label></textarea-label>
        <textarea-counter></textarea-counter>
    </div>
</template>

<script>
import TextareaDefault from './TextareaDefault.vue'
import TextareaLabel from './TextareaLabel.vue'
import TextareaCounter from './TextareaCounter.vue'

export default{
    components: {
        TextareaDefault,
        TextareaLabel,
        TextareaCounter,
    }
}
</script>