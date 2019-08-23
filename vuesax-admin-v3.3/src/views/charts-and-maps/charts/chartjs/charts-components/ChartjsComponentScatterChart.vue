<!-- =========================================================================================
	File Name: ChartjsComponentScatterChart.vue
	Description: Chartjs component - Scatter Chart
	----------------------------------------------------------------------------------------
	Item Name: The Key Society
	Author: Marwan Refaat
	Author URL: https://TheKeySociety.com
========================================================================================== -->


<script>
import { Scatter } from 'vue-chartjs'

export default {
    extends: Scatter,
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