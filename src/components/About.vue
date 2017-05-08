<template>
  <div id="about">
    <h1> A propos de moi </h1>
    <p class="subTitle">Curieuse et passionnée, andorrane et déterminée</p>
    <div class="aboutBlock">
      <div class="aboutBlockContainer">
        <img src='../../static/images/like.svg'>
        <div class="comment">
          <p>Dessiner</p>
          <p>La neige</p>
          <p>Les sports de combat</p>
          <p>Les chats</p>
          <p>Patiner</p>
          <p>ET LE CHOCOLAT :)</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src='../../static/images/dislike.svg'>
        <div class="comment">
          <p>Le gris</p>
          <p>Le sexisme</p>
          <p>Mes cheveux le matin</p>
          <p>Les stéréotypes</p>
          <p>Mes cheveux le soir</p>
          <p>ET LE CHOCOLAT :'(</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src='../../static/images/home.svg'>
        <div class="comment">
          <p>France - 6 ans</p>
          <p>Andorre - 13 ans</p>
          <p>Écosse - 1 an</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src='../../static/images/school-bus.svg'>
        <div class="comment">
          <p>Degree (eq. License) - Robert Gordon University</p>
          <p>DUT Informatique - IUT de Blagnac</p>
          <p>Baccalauréat - Lycée Comte de Foix</p>
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
</style>
