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
    <div class="schoolBlockContainer">
      <img src="../../static/images/school-bus.svg" />
      <div class="comment">
        <p>
          <strong> {{ $t("about.education.n7.diploma") }}</strong> -
          <span> {{ $t("about.education.n7.topic") }}</span> -
          <span class="date"> {{ $t("about.education.n7.place") }}</span>
        </p>
        <p>
          <strong> {{ $t("about.education.insa.diploma") }}</strong> -
          <span> {{ $t("about.education.insa.topic") }}</span> -
          <span class="date"> {{ $t("about.education.insa.place") }}</span>
        </p>
        <p>
          <strong> {{ $t("about.education.rgu.diploma") }}</strong> -
          <span> {{ $t("about.education.rgu.topic") }}</span> -
          <span class="date"> {{ $t("about.education.rgu.place") }}</span>
        </p>
        <p>
          <strong> {{ $t("about.education.dueti.diploma") }}</strong> -
          <span> {{ $t("about.education.dueti.topic") }}</span> -
          <span class="date"> {{ $t("about.education.dueti.place") }}</span>
        </p>
        <p>
          <strong> {{ $t("about.education.iut.diploma") }}</strong> -
          <span> {{ $t("about.education.iut.topic") }}</span> -
          <span class="date"> {{ $t("about.education.iut.place") }}</span>
        </p>
        <p>
          <strong> {{ $t("about.education.lycee.diploma") }}</strong> -
          <span> {{ $t("about.education.lycee.topic") }}</span> -
          <span class="date"> {{ $t("about.education.lycee.place") }}</span>
        </p>
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
  width: 85%;
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
  margin: 16px;
}

.schoolBlockContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 64px;
}

.schoolBlockContainer .comment {
  border: none;
  border-top: solid 2px #14a0c5;
}

.comment {
  border-left: solid 2px #14a0c5;
  padding-left: 1em;
  flex-basis: 60%;
}

img {
  width: 7em;
  min-width: 2em;
  margin: 1em;
}

@media screen and (max-width: 1600px) {
  img {
    width: 6em;
    margin: 0.5em;
  }
  .aboutBlockContainer {
    flex-basis: 22%;
  } /* forces 4 items to a line */
}

@media screen and (max-width: 1450px) {
  img {
    width: 8em;
    margin: 1.5em;
  }
  .aboutBlockContainer {
    flex-basis: 40%;
  } /* forces 2 items to a line */
}

@media screen and (max-width: 1000px) {
  .aboutBlockContainer {
    flex-basis: 100%;
  } /* forces one item per line line */

  .comment {
    flex-basis: 25%;
  }
}
</style>
