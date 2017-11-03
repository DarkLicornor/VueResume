<script>
import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  mounted() {
    this.renderChart(
      {
        labels: ['Java', 'Python', 'C#', 'C'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: ['#14A0C5', '#fff133', '#ff0043', '#9b59b6'],
            data: [90, 70, 50, 20]
          }
        ]
      },
      {
        legend: {
          display: false
        }
      }
    )
  }
})
</script>
