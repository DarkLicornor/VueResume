<template>
  <div>
    <div class="parallax"></div>
    <div id="activity">
      <h1>Events</h1>
      <p class="subTitle">Cons, meetups, and cool meetings where I've been</p>
      <div class="activityBlock">
        <ActivityBlockContainer
          href="https://ressi2018.sciencesconf.org/resource/page/id/11"
          :title="$t('activity.ressi.title')"
          :dates="$t('activity.ressi.dates')"
          :description="$t('activity.ressi.description')"
          :technos="$t('activity.ressi.technos')"
        />

        <ActivityBlockContainer
          href="https://events.ccc.de/congress/2017/wiki/Main_Page"
          image="../../static/images/logos/34c3Logo.jpg"
          :title="$t('activity.ccc.title')"
          :dates="$t('activity.ccc.dates')"
          :description="$t('activity.ccc.description')"
          :technos="$t('activity.ccc.technos')"
        />

        <ActivityBlockContainer
          href=" https://www.eclipsecon.org"
          image="../../static/images/logos/eclipse.png"
          :title="$t('activity.ece.title')"
          :dates="$t('activity.ece.dates')"
          :description="$t('activity.ece.description')"
          :technos="$t('activity.ece.technos')"
        />

        <ActivityBlockContainer
          href="https://www.youtube.com/watch?v=l412D9uU3do"
          image="../../static/images/logos/CodeFest.jpg"
          :title="$t('activity.codefest.title')"
          :dates="$t('activity.codefest.dates')"
          :description="$t('activity.codefest.description')"
          :technos="$t('activity.codefest.technos')"
        />

        <ActivityBlockContainer
          href="https://www.cybersecuritychallenge.org.uk"
          image="../../static/images/logos/cybersecUK.jpeg"
          :title="$t('activity.cybersec.title')"
          :dates="$t('activity.cybersec.dates')"
          :description="$t('activity.cybersec.description')"
          :technos="$t('activity.cybersec.technos')"
        />

        <ActivityBlockContainer
          href=" https://www.opengento.fr"
          image="../../static/images/logos/opengento.jpeg"
          :title="$t('activity.opengento.title')"
          :dates="$t('activity.opengento.dates')"
          :description="$t('activity.opengento.description')"
          :technos="$t('activity.opengento.technos')"
        />

        <ActivityBlockContainer
          href=" https://www.sudweb.fr"
          image="../../static/images/logos/sudweb.png"
          :title="$t('activity.sudweb.title')"
          :dates="$t('activity.sudweb.dates')"
          :description="$t('activity.sudweb.description')"
          :technos="$t('activity.sudweb.technos')"
        />

        <ActivityBlockContainer
          href="http://www.nuitdelinfo.com/"
          image="../../static/images/logos/nuitinfo.jpeg"
          :title="$t('activity.nuitinfo.title')"
          :dates="$t('activity.nuitinfo.dates')"
          :description="$t('activity.nuitinfo.description')"
          :technos="$t('activity.nuitinfo.technos')"
        />

        <ActivityBlockContainer
          href=" https://www.toulousejs.francejs.org"
          image="../../static/images/logos/toulousejs.jpeg"
          :title="$t('activity.toulousejs.title')"
          :dates="$t('activity.toulousejs.dates')"
          :description="$t('activity.toulousejs.description')"
          :technos="$t('activity.toulousejs.technos')"
        />

        <ActivityBlockContainer
          href=" https://www.toulouse.aperoweb.fr"
          image="../../static/images/logos/aperoweb.jpeg"
          :title="$t('activity.aperoweb.title')"
          :dates="$t('activity.aperoweb.dates')"
          :description="$t('activity.aperoweb.description')"
          :technos="$t('activity.aperoweb.technos')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityBlockContainer from "./ActivityBlockContainer.vue";
export default {
  components: { ActivityBlockContainer }
};
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

p,
td {
  font-family: comfortaa, sans-serif;
}

/*Small screens*/
@media only screen and (max-width: 1024px) {
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
