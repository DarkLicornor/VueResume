<template>
  <div>
    <div class="parallax"></div>
    <div id="activity">
      <h1> Evénements</h1>
      <p class="subTitle">Confs, meetups, et rencontres cools auxquelles je vais</p>
      <div class="activityBlock">
        <div class="activityBlockContainer">
          <a target="_blank" href="https://hashcode.withgoogle.com/">
            <img src='https://hashcode.withgoogle.com/resources/social/twitter_v1.png'>
          </a>
          <div class="comment">
            <h4> Google HashCode </h4>
            <h6> (02/2017, Ecosse) </h6>
            <h5> Hackaton, travail d'équipe, JavaScript, Algorithmique avancée </h5>
          </div>
        </div>
        <div class="activityBlockContainer">
          <a target="_blank" href="www.cybersecuritychallenge.org.uk">
            <img src='https://pbs.twimg.com/profile_images/517627913529593856/rFrlmBDt.png'>
          </a>
          <div class="comment">
            <h4> CyberSecurity Challenge UK </h4>
            <h6> (02/2017, Angleterre & 09/2016, Ecosse) </h6>
            <h5> CTF, Talks, IT Quizz - 2ème position </h5>
          </div>
        </div>
        <div class="activityBlockContainer">
          <a target="_blank" href="www.eclipsecon.org">
            <img src='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1489700459/eclipse.png'>
          </a>
          <div class="comment">
            <h4> EclipseCon France et Europe </h4>
            <h6> (09/2016, Allemagne et 06/2016, France) </h6>
            <h5> Conférences, WorkShops - développement d’applications web et
              logiciel, Eclipse, IoT, JAVA, PHP, JavaScript </h5>
          </div>
        </div>
        <div class="activityBlockContainer">
          <a target="_blank" href="www.opengento.fr">
            <img src='https://pbs.twimg.com/profile_images/571264004626980864/SwWXYqfI.jpeg'>
          </a>
          <div class="comment">
            <h4> OpenGento </h4>
            <h6> (06/2016, France) </h6>
            <h5> WorkShops, Team building </h5>
            <h5> Magento, PHP, ReactJS, ES6 </h5>
          </div>
        </div>
        <div class="activityBlockContainer">
          <a target="_blank" href="www.sudweb.fr/">
            <img src='https://pbs.twimg.com/profile_images/692094055111598082/30n-OWOC.png'>
          </a>
          <div class="comment">
            <h4> SudWeb </h4>
            <h6> (05/2016, France) </h6>
            <h5> Conférences, WorkShops </h5>
            <h5> développement d’applications web et logiciel,
              UX, Gestion de projet et de relations clients </h5>
          </div>
        </div>
        <div class="activityBlockContainer">
          <a target="_blank" href="http://www.nuitdelinfo.com/">
            <img src='https://pbs.twimg.com/profile_images/532339903/infos-nuit_info_logo_simple_400x400.png'>
          </a>
          <div class="comment">
            <h4> Nuit de l'info </h4>
            <h6> (12/2015 et 12/2014, France) </h6>
            <h5> WHackaton, Travail d’équipe, design,  JAVASCRIPT, SQL </h5>
          </div>
        </div>
        <div class="activityBlockContainer">
          <a target="_blank" href="www.toulousejs.francejs.org">
            <img src='https://pbs.twimg.com/profile_images/785806413037707264/P57kaRFv.jpg'>
          </a>
          <div class="comment">
            <h4> ToulouseJS </h4>
            <h6> (2015 -> 2016, France) </h6>
            <h5> Conférences, Meetings </h5>
            <h5> Nouveautés Javascript, frameworks </h5>
          </div>
        </div>
        <div class="activityBlockContainer">
          <a target="_blank" href="www.toulouse.aperoweb.fr">
            <img src='https://pbs.twimg.com/profile_images/1652182596/aperoweb_400x400.png'>
          </a>
          <div class="comment">
            <h4> AperoWeb </h4>
            <h6> (2015 -> 2016, France) </h6>
            <h5> Conférences, Meetings </h5>
            <h5> IT, Développement web, IoT </h5>
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
  background-image: url("../../static/images/chat.jpg");

  margin-left: -1em;
  height: 50vh;
  width: 100vw;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#activity {
  display: block;
  margin: auto;
  width: 80%;
  margin-top: 2em;
  margin-bottom: 4em;
}

.activityBlock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.activityBlockContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em;
}

.comment {
  padding: 1em;
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
  #activity {
    width: 100%;
  }

  .activityBlockContainer {
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
