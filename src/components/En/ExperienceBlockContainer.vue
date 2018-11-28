<template>
  <div class="experienceBlockContainer">
    <h2>{{ title }}</h2>
    <div class="comment">
      <h4>{{ place }}</h4>
      <h6>{{ date }}</h6>
      <h5>{{ description }}</h5>
      <h5>{{ technos }}</h5>
      <a target="_blank" :href="href">www.rgu.ac.uk</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["href", "place", "title", "date", "description", "technos"]
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

p,
td {
  font-family: comfortaa, sans-serif;
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
