<template>
  <div id='about'>
    <h1> A propos de moi</h1>
    <p class='subTitle'>Curieuse et passionnée, andorrane et déterminée</p>
    <div class='aboutBlock'>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/like.svg'>
        <div class='comment'>
          <p>Dessiner</p>
          <p>La neige</p>
          <p>Les meetups</p>
          <p>Patiner</p>
          <p>Le théâtre</p>
          <p>Voyager</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/dislike.svg'>
        <div class='comment'>
          <p>Le sexisme</p>
          <p>Le matin</p>
          <p>La gueule de bois</p>
          <p>Le lundi matin</p>
          <p>La noix de coco</p>
          <p>Les stéréotypes</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/home.svg'>
        <div class='comment'>
          <p>France pendant 6 ans</p>
          <p>Andorre pendant 13 ans</p>
          <p>Écosse pendant 1 an</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/school-bus.svg'>
        <div class='comment'>
          <p>4ème année spécialité Informatique - France - INSA Toulouse</p>
          <p>Degree (eq. License) - Robert Gordon University</p>
          <p>DUT Informatique - France - IUT de Blagnac</p>
          <p>Baccalauréat - Andorre - Lycée Comte de Foix</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/language.svg'>
        <div class='comment'>
          <p>Français bilingue</p>
          <p>Anglais courant</p>
          <p>Catalan courant</p>
          <p>Espagnol courant</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebChart from '../WebChart.vue'
import SoftwareChart from '../SoftwareChart.vue'
export default {
  components: {
    SoftwareChart,
    WebChart
  }
}
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
  border-left: solid 2px #14A0C5;
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

p, td {
  font-family: comfortaa, sans-serif;
}


/*Small screens*/
@media only screen and (max-width : 1024px) {
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
