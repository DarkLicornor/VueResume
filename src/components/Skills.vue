<template>
  <div>
    <div class="parallax"></div>
    <div id="skills">
      <h1> Compétences </h1>
      <p id="a">Note : J'ai representé
        mes compétences sous forme de graphique.
        Chacun représente pour un domaine précis
        mon niveau actuel dans chaque langage
        en fonction de mes autres niveaux.</p>
      <div class="chartBlock">
        <div class="chartBlock">
          <div class="chart">
            <WebChart />
          </div>
          <div class="comments">
            <table>
              <tr>
                <td style="background: #14A0C5;">HTML5</td>
                <td>Avancé</td>
              </tr>
              <tr>
                <td style="background: #fff133;">CSS3</td>
                <td>Avancé</td>
              </tr>
              <tr>
                <td style="background: #ff0043;">NodeJS</td>
                <td>Bon niveau</td>
              </tr>
              <tr>
                <td style="background: #9b59b6;">ES6</td>
                <td>Bon niveau</td>
              </tr>
              <tr>
                <td style="background: #2ecc71;">PHP</td>
                <td>Bon niveau</td>
              </tr>
              <tr>
                <td style="background: #95a5a6;">MySQL</td>
                <td>Bon niveau</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="chartBlock">
          <div class="chart">
            <SoftwareChart />
          </div>
          <div class="comments">
            <table>
              <tr>
                <td style="background: #14A0C5;">Java</td>
                <td>Avancé</td>
              </tr>
              <tr>
                <td style="background: #fff133;">Python</td>
                <td>Bon niveau</td>
              </tr>
              <tr>
                <td style="background: #ff0043;">C#</td>
                <td>Bon niveau</td>
              </tr>
              <tr>
                <td style="background: #9b59b6;">C</td>
                <td>Notions</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebChart from './WebChart.vue'
import SoftwareChart from './SoftwareChart.vue'
export default {
  components: {
    SoftwareChart,
    WebChart
  }
}
</script>

<style scoped>
.parallax {
  background-image: url("../../static/images/painting.jpg");

  margin-left: -1em;
  height: 50vh;
  width: 100vw;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#skills {
  display: block;
  margin: auto;
  width: 80%;
  margin-top: 2em;
  margin-bottom: 4em;
}

.chartBlock {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.chart {
  width: 50%;
  margin: 2em;
}

td {
  white-space: nowrap;
  text-align: left;
  padding: 1em;
}

h1 {
  font-family: sophia;
  font-size: 7em;
  margin: 0;
  text-align: center;
}

p {
  width: 70%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
}

p, td {
  font-family: comfortaa, sans-serif;
}

/*Small screens*/
@media only screen and (max-width : 1024px) {
  #skills {
    width: 100%;
  }

  .chartBlock {
    width: 100%;
    max-width: 100%;
    padding: 1em;
  }

  .chart {
    width: 40%;
  }
  .comments {
    width: 50%;
  }

  .comments table {
    width: 100%;
  }

  td {
    font-size: 1.em;
  }

  .subTitle {
    font-size: 2em;
  }

  h1 {
    font-size: 10em;
  }
}
</style>
