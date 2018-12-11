<template>
  <div>
    <div class="parallax"></div>
    <div id="experience">
      <h1>{{ $t("jobexperiences.title") }}</h1>
      <p class="subTitle">{{ $t("jobexperiences.subTitle") }}</p>
      <div class="jobexperienceTitle">
        <img src="../../static/images/courier.svg" />
        <h2 class="subSubTitle">{{ $t("jobexperiences.internships") }}</h2>
      </div>
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

      <div class="jobexperienceTitle">
        <img src="../../static/images/volunteer.svg" />
        <h2 class="subSubTitle">{{ $t("jobexperiences.volunteering") }}</h2>
      </div>

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

      <div class="jobexperienceTitle">
        <img src="../../static/images/coding.svg" />
        <h2 class="subSubTitle">{{ $t("jobexperiences.web") }}</h2>
      </div>
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

      <div class="jobexperienceTitle">
        <img src="../../static/images/app-development.svg" />
        <h2 class="subSubTitle">{{ $t("jobexperiences.mobile") }}</h2>
      </div>

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
import ExperienceBlockContainer from "./ExperienceBlockContainer.vue";
export default {
  components: {
    ExperienceBlockContainer
  }
};
</script>

<style scoped>
.parallax {
  background-image: url("../../static/images/drawing.jpg");

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
  max-width: 40%;
  min-width: 25%;
}

.jobexperienceTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.comment a:hover {
  color: #cc0035;
}

img {
  margin-top: 2em;
  width: 7em;
  margin: 1em;
}

.subSubTitle {
  border-top: solid 2px #14a0c5;
  font-family: sophia;
  margin: auto;
  width: 50%;
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
