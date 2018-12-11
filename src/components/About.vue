<template>
  <div id="about">
    <h1>{{ $t("about.title") }}</h1>
    <p class="subTitle">{{ $t("about.subTitle") }}</p>
    <div class="aboutBlock">
      <div class="aboutBlockContainer">
        <img src="../../static/images/like.svg" />
        <div class="comment">
          <p>{{ $t("about.like.drawing") }}</p>
          <p>{{ $t("about.like.snow") }}</p>
          <p>{{ $t("about.like.meetups") }}</p>
          <p>{{ $t("about.like.skating") }}</p>
          <p>{{ $t("about.like.drama") }}</p>
          <p>{{ $t("about.like.traveling") }}</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../static/images/dislike.svg" />
        <div class="comment">
          <p>{{ $t("about.dislike.sexism") }}</p>
          <p>{{ $t("about.dislike.mornings") }}</p>
          <p>{{ $t("about.dislike.hangovers") }}</p>
          <p>{{ $t("about.dislike.monday") }}</p>
          <p>{{ $t("about.dislike.coconuts") }}</p>
          <p>{{ $t("about.dislike.stereotypes") }}</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../static/images/home.svg" />
        <div class="comment">
          <p>{{ $t("about.places.germany") }}</p>
          <p>{{ $t("about.places.france") }}</p>
          <p>{{ $t("about.places.andorra") }}</p>
          <p>{{ $t("about.places.scotland") }}</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../static/images/school-bus.svg" />
        <div class="comment">
          <p>{{ $t("about.education.n7") }}</p>
          <p>{{ $t("about.education.insa") }}</p>
          <p>{{ $t("about.education.rgu") }}</p>
          <p>{{ $t("about.education.iut") }}</p>
          <p>{{ $t("about.education.lycee") }}</p>
        </div>
      </div>
      <div class="aboutBlockContainer">
        <img src="../../static/images/language.svg" />
        <div class="comment">
          <p>{{ $t("about.language.french") }}</p>
          <p>{{ $t("about.language.english") }}</p>
          <p>{{ $t("about.language.catalan") }}</p>
          <p>{{ $t("about.language.spanish") }}</p>
          <p>{{ $t("about.language.german") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
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
