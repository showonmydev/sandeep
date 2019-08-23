<!-- =========================================================================================
	File Name: ChartjsComponentBubbleChart.vue
	Description: Chartjs component - Bubble Chart
	----------------------------------------------------------------------------------------
	Item Name: The Key Society
	Author: Marwan Refaat
	Author URL: https://TheKeySociety.com
========================================================================================== -->

<script>
import { Bubble } from 'vue-chartjs'

export default {
    extends: Bubble,
    props: {
        data: {
            type: Object,
            default: null,
        },
        options: {
            type: Object,
            default: null,
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    }
}
</script>