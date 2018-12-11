<template>
  <div class="activityBlockContainer">
    <a target="_blank" :href="href">
      <img v-if="image" :src="image" />
      <h2 class="blockTitle" v-else>{{ title }}</h2>
    </a>
    <div class="comment">
      <p>
        <strong>{{ title }}</strong> <span class="date">{{ dates }}</span>
      </p>
      <p>{{ description }}</p>
      <p>{{ technos }}</p>
    </div>
  </div>
</template>

<style scoped>
.activityBlockContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1em;
  width: 30%;
}

.comment {
  padding: 1em;
  width: 20em;
  border-left: solid 2px #14a0c5;
}

img {
  width: 7em;
  margin: 1em;
}

p {
  font-family: comfortaaLight;
  margin: 0;
}

.subTitle {
  width: 70%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 3em;
  text-align: center;
}

/*Small screens*/
@media only screen and (max-width: 1024px) {
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

<script>
export default {
  props: ["href", "image", "title", "dates", "description", "technos"]
};
</script>
