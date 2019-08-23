<!-- =========================================================================================
	File Name: ChartjsComponentHorizontalBarChart.vue
	Description: Chartjs component - Horizontal Bar Chart
	----------------------------------------------------------------------------------------
	Item Name: The Key Society
	Author: Marwan Refaat
	Author URL: https://TheKeySociety.com
========================================================================================== -->


<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
    extends: HorizontalBar,
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