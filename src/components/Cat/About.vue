<template>
  <div id='about'>
    <h1> About me</h1>
    <p class='subTitle'>Curious, passionate, andorran and determinated</p>
    <div class='aboutBlock'>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/like.svg'>
        <div class='comment'>
          <p>Drawing</p>
          <p>Snow</p>
          <p>Meetups</p>
          <p>Cats</p>
          <p>Skating</p>
          <p>Conferences</p>
          <p>Traveling</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/dislike.svg'>
        <div class='comment'>
          <p>Sexism</p>
          <p>Mornings</p>
          <p>Stereotypes</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/home.svg'>
        <div class='comment'>
          <p>France for 6 years</p>
          <p>Andorra for 13 years</p>
          <p>Scotland for 1 year</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/school-bus.svg'>
        <div class='comment'>
          <p>4th year, specialisation Computing Science - France - INSA Toulouse</p>
          <p>Degree - Scotland - Robert Gordon University</p>
          <p>DUT Computer Science - France - IUT de Blagnac</p>
          <p>Baccalaureate - Andorra - Lycée Comte de Foix</p>
        </div>
      </div>
      <div class='aboutBlockContainer'>
        <img src='../../../static/images/language.svg'>
        <div class='comment'>
          <p>French bilingual</p>
          <p>English usual</p>
          <p>Catalan usual</p>
          <p>Spanish usual</p>
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
