<!-- =========================================================================================
    File Name: VxList.vue
    Description: list Component
    Component Name: VxList
    ----------------------------------------------------------------------------------------
    Item Name: The Key Society
      Author: Marwan Refaat
    Author URL: https://TheKeySociety.com
========================================================================================== -->


<template functional>
    <ul class="list">
        <li class="list__item" v-for="(item, index) in props.list" :key="index">
            <feather-icon :icon="props.icon" class="w-5 h-5 mr-1"></feather-icon><span v-html="item"></span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "vx-list",
    props: {
        list: {
            type: Array,
            required: true,
        },
        icon: {
            type: String,
            default: "ChevronsRightIcon",
        },
    },
}
</script>

<style lang="scss">
@import "@/assets/scss/vuesax/components/vxList.scss";
</style>
