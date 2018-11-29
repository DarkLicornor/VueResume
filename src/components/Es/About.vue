<template>
  <div id="about">
    <h1>Hablando de mi</h1>
    <p class="subTitle">Curiosa y apasionada, andorrana y decidida</p>
    <div class="aboutBlock">
      <div class="aboutBlockContainer">
        <img src="../../../static/images/like.svg" />
        <div class="comment">
          <p>Dibujar</p>
          <p>La nieve</p>
          <p>Los meetups</p>
          <p>Patinaje</p>
          <p>Teatro</p>
          <p>Conferencias</p>
          <p>Viajar</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../../static/images/dislike.svg" />
        <div class="comment">
          <p>Sexismo</p>
          <p>La mañana</p>
          <p>La resaca</p>
          <p>Lunes por la mañana</p>
          <p>Coco</p>
          <p>Estereotipos</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../../static/images/home.svg" />
        <div class="comment">
          <p>Francia durante 6 años</p>
          <p>Andorra durante 13 años</p>
          <p>Escocia durante 1 años</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../../static/images/school-bus.svg" />
        <div class="comment">
          <p>4to año especialidad informática- Francia - INSA Toulouse</p>
          <p>Degree (eq. Licencia) - Robert Gordon University</p>
          <p>DUT Informática - Francia - IUT de Blagnac</p>
          <p>Bachillerato - Andorra - Lycée Comte de Foix</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../../static/images/language.svg" />
        <div class="comment">
          <p>Francés bilingüe</p>
          <p>Inglés fluido</p>
          <p>Catalán fluido</p>
          <p>Español fluido</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebChart from "../WebChart.vue";
import SoftwareChart from "../SoftwareChart.vue";
export default {
  components: {
    SoftwareChart,
    WebChart
  }
};
</script>

<style scoped>
#about {
  display: block;
  margin: auto;
  width: 80%;
  margin-top: 2em;
  margin-bottom: 4em;
}

.aboutBlock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.aboutBlockContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em;
}

.comment {
  padding-left: 1em;
  width: 20em;
  border-left: solid 2px #14a0c5;
}

img {
  width: 10em;
  margin: 2em;
}

h1 {
  font-family: sophia;
  font-size: 7em;
  margin: 0;
  text-align: center;
}

.subTitle {
  width: 70%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 3em;
  text-align: center;
}

p,
td {
  font-family: comfortaa, sans-serif;
}

/*Small screens*/
@media only screen and (max-width: 1024px) {
  #about {
    width: 100%;
  }

  .aboutBlockContainer {
    width: 100%;
    margin: 2em;
  }

  .comment {
    width: 50%;
  }

  .comment p {
    font-size: 2em;
  }

  .subTitle {
    font-size: 2em;
  }

  h1 {
    font-size: 11em;
  }

  img {
    width: 30%;
  }
}
</style>
