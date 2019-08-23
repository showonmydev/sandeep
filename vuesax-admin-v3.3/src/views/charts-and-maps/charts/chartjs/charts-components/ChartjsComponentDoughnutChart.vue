<!-- =========================================================================================
	File Name: ChartjsComponentDoughnutChart.vue
	Description: Chartjs component - Doughnut Chart
	----------------------------------------------------------------------------------------
	Item Name: The Key Society
	Author: Marwan Refaat
	Author URL: https://TheKeySociety.com
========================================================================================== -->


<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
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