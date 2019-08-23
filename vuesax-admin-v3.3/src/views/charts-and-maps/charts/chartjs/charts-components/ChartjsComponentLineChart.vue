<!-- =========================================================================================
	File Name: ChartjsComponentLineChart.vue
	Description: Chartjs component - Line Chart
	----------------------------------------------------------------------------------------
	Item Name: The Key Society
	Author: Marwan Refaat
	Author URL: https://TheKeySociety.com
========================================================================================== -->


<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
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