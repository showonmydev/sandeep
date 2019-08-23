<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: The Key Society
      Author: Marwan Refaat
    Author URL: https://TheKeySociety.com
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes">
        <span>© <a href="https://TheKeySociety.com" target="_blank" rel="nofollow">The Key Society</a> {{ new Date().getFullYear() }}.</span>
        <span class="md:flex hidden items-center">
            <span>Verified Member</span>
            <feather-icon icon="UserCheckIcon" svgClasses="stroke-current text-primary w-6 h-6" class="ml-2" />
        </span>
    </footer>
</template>

<script>

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    }
}
</script>
