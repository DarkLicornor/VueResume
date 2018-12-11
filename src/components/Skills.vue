<template>
  <div>
    <div class="parallax"></div>
    <div id="skills">
      <h1>{{ $t("skills.title") }}</h1>
      <div class="skillsBlock">
        <div class="skillsBlockContainer">
          <img src="../../static/images/software.svg" />
          <div class="comment">
            <h2>{{ $t("skills.tech.title") }}</h2>

            <p>
              <strong>{{ $t("skills.tech.web.title") }}</strong>
            </p>
            <p>{{ $t("skills.tech.web.description") }}</p>

            <p>
              <strong>{{ $t("skills.tech.software.title") }}</strong>
            </p>
            <p>{{ $t("skills.tech.software.description") }}</p>

            <p>
              <strong>{{ $t("skills.tech.mobile.title") }}</strong>
            </p>
            <p>{{ $t("skills.tech.mobile.description") }}</p>

            <p>
              <strong>{{ $t("skills.tech.other.title") }}</strong>
            </p>
            <p>{{ $t("skills.tech.other.description") }}</p>

            <p>
              <strong>{{ $t("skills.tech.used.title") }}</strong>
            </p>
            <p>{{ $t("skills.tech.used.description") }}</p>
          </div>
        </div>

        <div class="skillsBlockContainer">
          <img src="../../static/images/skills.svg" />
          <div class="comment">
            <h2>{{ $t("skills.soft.title") }}</h2>

            <p>
              <strong>{{ $t("skills.soft.international.title") }}</strong>
            </p>
            <p>{{ $t("skills.soft.international.description") }}</p>

            <p>
              <strong>{{ $t("skills.soft.adaptive.title") }}</strong>
            </p>
            <p>{{ $t("skills.soft.adaptive.description") }}</p>

            <p>
              <strong>{{ $t("skills.soft.curious.title") }}</strong>
            </p>
            <p>{{ $t("skills.soft.curious.description") }}</p>

            <p>
              <strong>{{ $t("skills.soft.teamspirit.title") }}</strong>
            </p>
            <p>{{ $t("skills.soft.teamspirit.description") }}</p>
          </div>
        </div>

        <div class="skillsBlockContainer">
          <img src="../../static/images/virus.svg" />
          <div class="comment">
            <h2>{{ $t("skills.secu.title") }}</h2>

            <p>
              <strong>{{ $t("skills.secu.software.title") }}</strong>
            </p>
            <p>{{ $t("skills.secu.software.description") }}</p>

            <p>
              <strong>{{ $t("skills.secu.network.title") }}</strong>
            </p>
            <p>{{ $t("skills.secu.network.description") }}</p>

            <p>
              <strong>{{ $t("skills.secu.other.title") }}</strong>
            </p>
            <p>{{ $t("skills.secu.other.description") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WebChart from "./WebChart.vue";
import SoftwareChart from "./SoftwareChart.vue";
export default {
  components: {
    SoftwareChart,
    WebChart
  }
};
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

.skillsBlock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-around;
}

.skillsBlockContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25%;
}

.skillsBlockContainer .comment {
  border: none;
  border-top: solid 2px #14a0c5;
  text-align: center;
}

h2 {
  margin: 0;
  color: #14a0c5;
}

img {
  width: 80px;
  padding-bottom: 1em;
}
</style>
