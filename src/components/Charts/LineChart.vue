<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'line-chart',
  extends: Line,
  props: {
    datasets: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {

  },
  mounted() {
    this.renderChart({datasets: this.datasets})
  }
}
</script>