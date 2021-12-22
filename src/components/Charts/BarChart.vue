<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'bar-chart',
  extends: Bar,
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