<!-- =========================================================================================
	File Name: ChartjsComponentBarChart.vue
	Description: Chartjs component - Bar Chart
	----------------------------------------------------------------------------------------
	Item Name: The Key Society
	Author: Marwan Refaat
	Author URL: https://TheKeySociety.com
========================================================================================== -->


<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
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