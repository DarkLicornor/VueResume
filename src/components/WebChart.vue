<script>
import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  mounted() {
    this.renderChart(
      {
        labels: ['HTML5', 'CSS3', 'NodeJS', 'ES6', 'PHP', 'MySQL'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: [
              '#14A0C5',
              '#fff133',
              '#ff0043',
              '#9b59b6',
              '#2ecc71',
              '#95a5a6'
            ],
            data: [90, 90, 80, 70, 70, 50]
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
