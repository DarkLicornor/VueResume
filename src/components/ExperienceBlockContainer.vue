<template>
  <div class="experienceBlockContainer">
    <h2 class="blockTitle">{{ title }}</h2>
    <div class="comment">
      <p class="date">{{ dates }} - {{ place }}</p>
      <p>{{ description }}</p>
      <p>{{ technos }}</p>
      <a class="link" target="_blank" :href="href">www.rgu.ac.uk</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["href", "place", "title", "dates", "description", "technos"]
};
</script>

<style scoped>
.experienceBlockContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em;
}

.comment {
  padding: 1em;
  border-left: solid 2px #14a0c5;
  width: 28em;
}

.subTitle {
  width: 70%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 3em;
  text-align: center;
}

.blockTitle {
  width: 5em;
  padding-right: 0.5em;
  text-align: right;
}

/*Small screens*/
@media only screen and (max-width: 1024px) {
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
