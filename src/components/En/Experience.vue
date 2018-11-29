<template>
  <div>
    <div class="parallax"></div>
    <div id="experience">
      <h1>{{ $t("jobexperiences.title") }}</h1>
      <p class="subTitle">{{ $t("jobexperiences.subTitle") }}</p>
      <p class="subSubTitle">{{ $t("jobexperiences.internships") }}</p>
      <div class="experienceBlock">
        <ExperienceBlockContainer
          href="https://www.patagona.de"
          :place="$t('jobexperiences.patagona.place')"
          :title="$t('jobexperiences.patagona.title')"
          :dates="$t('jobexperiences.patagona.dates')"
          :description="$t('jobexperiences.patagona.description')"
          :technos="$t('jobexperiences.patagona.technos')"
        />
        <ExperienceBlockContainer
          href="https://www.occitech.fr"
          :place="$t('jobexperiences.occitech.place')"
          :title="$t('jobexperiences.occitech.title')"
          :dates="$t('jobexperiences.occitech.dates')"
          :description="$t('jobexperiences.occitech.description')"
          :technos="$t('jobexperiences.occitech.technos')"
        />
      </div>

      <p class="subSubTitle">{{ $t("jobexperiences.volunteering") }}</p>
      <div class="experienceBlock">
        <ExperienceBlockContainer
          href="https://www.eclipsecon.org"
          :place="$t('jobexperiences.ece.place')"
          :title="$t('jobexperiences.ece.title')"
          :dates="$t('jobexperiences.ece.dates')"
          :description="$t('jobexperiences.ece.description')"
          :technos="$t('jobexperiences.ece.technos')"
        />
      </div>

      <p class="subSubTitle">{{ $t("jobexperiences.web") }}</p>
      <div class="experienceBlock">
        <ExperienceBlockContainer
          href="https://www.splang.fr"
          :place="$t('jobexperiences.splang.place')"
          :title="$t('jobexperiences.splang.title')"
          :dates="$t('jobexperiences.splang.dates')"
          :description="$t('jobexperiences.splang.description')"
          :technos="$t('jobexperiences.splang.technos')"
        />
        <ExperienceBlockContainer
          href="https://www.label-route.fr"
          :place="$t('jobexperiences.labelroute.place')"
          :title="$t('jobexperiences.labelroute.title')"
          :dates="$t('jobexperiences.labelroute.dates')"
          :description="$t('jobexperiences.labelroute.description')"
          :technos="$t('jobexperiences.labelroute.technos')"
        />
        <ExperienceBlockContainer
          href="https://www.pinandraw.azurewebsites.net"
          :place="$t('jobexperiences.pinanddraw.place')"
          :title="$t('jobexperiences.pinanddraw.title')"
          :dates="$t('jobexperiences.pinanddraw.dates')"
          :description="$t('jobexperiences.pinanddraw.description')"
          :technos="$t('jobexperiences.pinanddraw.technos')"
        />
        <ExperienceBlockContainer
          href="https://brusportlehen.azurewebsites.net/app/"
          :place="$t('jobexperiences.sportlethen.place')"
          :title="$t('jobexperiences.sportlethen.title')"
          :dates="$t('jobexperiences.sportlethen.dates')"
          :description="$t('jobexperiences.sportlethen.description')"
          :technos="$t('jobexperiences.sportlethen.technos')"
        />
        <ExperienceBlockContainer
          href="https://www.checkyoursmile.fr"
          :place="$t('jobexperiences.checkyoursmile.place')"
          :title="$t('jobexperiences.checkyoursmile.title')"
          :dates="$t('jobexperiences.checkyoursmile.dates')"
          :description="$t('jobexperiences.checkyoursmile.description')"
          :technos="$t('jobexperiences.checkyoursmile.technos')"
        />
        <ExperienceBlockContainer
          href="https://www.colorslocals.ad"
          :place="$t('jobexperiences.colorslocals.place')"
          :title="$t('jobexperiences.colorslocals.title')"
          :dates="$t('jobexperiences.colorslocals.dates')"
          :description="$t('jobexperiences.colorslocals.description')"
          :technos="$t('jobexperiences.colorslocals.technos')"
        />
      </div>

      <p class="subSubTitle">{{ $t("jobexperiences.mobile") }}</p>
      <div class="experienceBlock">
        <ExperienceBlockContainer
          href="https://www.envirocache.co.uk"
          :place="$t('jobexperiences.envirocache.place')"
          :title="$t('jobexperiences.envirocache.title')"
          :dates="$t('jobexperiences.envirocache.dates')"
          :description="$t('jobexperiences.envirocache.description')"
          :technos="$t('jobexperiences.envirocache.technos')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WebChart from "../WebChart.vue";
import SoftwareChart from "../SoftwareChart.vue";
import ExperienceBlockContainer from "./ExperienceBlockContainer.vue";
export default {
  components: {
    SoftwareChart,
    WebChart,
    ExperienceBlockContainer
  }
};
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
  margin: 0.2em;
  margin-bottom: 0.5em;
}

.comment {
  padding: 1em;
  border-left: solid 2px #14a0c5;
  width: 70%;
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
  color: #14a0c5;
}

h4,
h6 {
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

.subSubTitle {
  font-family: sophia;
  font-size: 7em;
  margin: auto;
  margin-top: 1em;
  text-align: center;
  color: #14a0c5;
}

p,
td {
  font-family: comfortaa, sans-serif;
}

/*Small screens*/
@media only screen and (max-width: 1024px) {
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

  .subSubTitle {
    font-size: 1.9em;
  }

  h1 {
    font-size: 10em;
  }
}
</style>
