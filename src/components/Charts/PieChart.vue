<script>
import { Pie } from 'vue-chartjs'

export default {
  name: 'pie-chart',
  extends: Pie,
  props: {
    labels: {
      type: Array,
      default: () => [],
      required: true
    },
    datasets: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  computed: {

  },
  mounted() {
    this.renderChart({labels: this.labels, datasets: this.datasets})
  }
}
</script>