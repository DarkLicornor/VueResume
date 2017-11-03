<template>
  <div>
    <div class="parallax"></div>
    <div id="experience">
      <h1>Mes expériences </h1>
      <p class="subTitle">Stages, jobs et autres expériences professionelles</p>
      <div class="experienceBlock">
        <div class="experienceBlockContainer">
          <h2>Développeuse mobile</h2>
          <div class="comment">
            <h4> Envirocache </h4>
            <h6> (12/2016 --> ...) </h6>
            <h5> Développement d’application </h5>
            <h5> ReactNative, Atomic design, FireBase, ES6 </h5>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Développeuse web</h2>
          <div class="comment">
            <h4> Pin and Draw </h4>
            <h6> (03/2017 --> 05/2017) </h6>
            <h5> Conception, développement web et gestion de projets </h5>
            <h5> VueJS, FireBase, API's, ES6 </h5>
            <a target="_blank" href="https://pinanddraw.azurewebsites.net">pinanddraw.azurewebsites.net </a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Développeuse web</h2>
          <div class="comment">
            <h4> Sportlethen </h4>
            <h6> (10/2016 --> 12/2016) </h6>
            <h5> Conception, développement web et gestion de projets </h5>
            <h5> PHP, HTML5, CSS3 </h5>
            <a target="_blank" href="https://brusportlehen.azurewebsites.net/app/">brusportlehen.azurewebsites.net/app/ </a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Bénévole</h2>
          <div class="comment">
            <h4> EclipseCon Europe </h4>
            <h6> (10/2016) </h6>
            <h5> Enregistrement de conférences </h5>
            <h5> Outils d’enregistrement et gestion de talks </h5>
            <a target="_blank" href="https://www.eclipsecon.org"> www.eclipsecon.org </a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Étudiante</h2>
          <div class="comment">
            <h4> Robert Gordon University </h4>
            <h6> (09/2016 --> 06/2017) </h6>
            <h5> Conception et développement
              d’applications web et logiciel, Gestion de projet </h5>
            <h5> Java, C#, PHP, JavaScript, HTML5, CSS3, MySQL, NoSQL </h5>
            <a target="_blank" href="http://www.rgu.ac.uk">www.rgu.ac.uk</a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Stagiaire</h2>
          <div class="comment">
            <h4> Occitech </h4>
            <h6> (04/2016 --> 07/2016) </h6>
            <h5> Développement d’application </h5>
            <h5> Développement Web - ReactJS, Atomic Design, Falcor, ES6 </h5>
            <a target="_blank" href="https://www.occitech.fr"> www.occitech.fr </a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Bénévole</h2>
          <div class="comment">
            <h4> EclipseCon France </h4>
            <h6> (06/2016) </h6>
            <h5> Enregistrement de conférences </h5>
            <h5> Outils d’enregistrement et gestion de talks </h5>
            <a target="_blank" href="https://www.eclipsecon.org">www.eclipsecon.org </a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Développeuse web</h2>
          <div class="comment">
            <h4> Check your smile </h4>
            <h6> (12/2015 --> 04/2016) </h6>
            <h5> Développement web et gestion de projets </h5>
            <h5> JavaScript, OOPHP, MVC pattern, MySQL </h5>
            <a target="_blank" href="https://www.checkyoursmile.fr">www.checkyoursmile.com </a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Développeuse web</h2>
          <div class="comment">
            <h4> Colors locals </h4>
            <h6> (07/2015 --> 09/2015) </h6>
            <h5> Développement web </h5>
            <h5> Auto-formation, HTML5, CSS3, PHP </h5>
            <a target="_blank" href="http://www.colorslocals.com">www.colorslocals.com </a>
          </div>
        </div>
        <div class="experienceBlockContainer">
          <h2>Étudiante</h2>
          <div class="comment">
            <h4> IUT de Blagnac </h4>
            <h6> (09/2014 --> 06/2016) </h6>
            <h5> Conception et développement
              d’applications web et logiciel, Gestion de projet </h5>
            <h5> Java, PYTHON, C, PHP, JSON, HTML, CSS, MySQL, Android </h5>
            <a target="_blank" href="http://www.iut-blagnac.fr/">www.iut-blagnac.com </a>
          </div>
        </div>
        <!-- <div class="experienceBlockContainer">
          <h2>Étudiante</h2>
          <div class="comment">
            <h4> Lycée Comte de Foix </h4>
            <h6> (01/2014 -> 03/2014) </h6>
            <h5> Développement d'un jeu de Snake </h5>
            <h5> Python </h5>
          </div>
        </div>
      -->
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

.parallax {
  background-image: url("../../../static/images/drawing.jpg");

  margin-left: -1em;
  height: 50vh;
  width: 100vw;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#experience {
  display: block;
  margin: auto;
  width: 80%;
  margin-top: 2em;
  margin-bottom: 4em;
}

.experienceBlock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.experienceBlockContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em;
}

.comment {
  padding: 1em;
  border-left: solid 2px #14A0C5;
  width: 20em;
}

.comment a {
  text-decoration: none;
  color: #ff0043;
  font-size: 1.2em;
  font-family: comfortaa;
}

.comment a:hover {
  color: #cc0035;
}

img {
  margin: 2em;
}

h1 {
  font-family: sophia;
  font-size: 7em;
  margin: 0;
  text-align: center;
}

h2 {
  font-family: sophia;
  font-size: 3em;
  margin: 0.4em;
  width: 4em;
  text-align: right;
  color: #14A0C5;
}

h4, h6 {
  display: inline;
}

h4 {
  font-family: comfortaaLight;
  font-size: 1.7em;
  margin: 0;
}

h5 {
  font-family: comfortaaLight;
  font-size: 1.2em;
  margin: 0;
  line-height: 2em;
}

h6 {
  font-family: comfortaaLight;
  font-size: 0.8em;
  margin: 0;
  color: #ff0043;
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
  #experience {
    width: 100%;
  }

  .experienceBlockContainer {
    width: 100%;
    margin: 2em;
  }

  h2 {
    width: 30%;
  }

  .comment {
    width: 60%;
  }

  .subTitle {
    font-size: 2em;
  }

  h1 {
    font-size: 10em;
  }
}
</style>
