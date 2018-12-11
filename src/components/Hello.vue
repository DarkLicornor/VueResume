<template>
  <div id="home">
    <div class="container">
      <div class="title">
        <h1>Alexa</h1>
        <h1>NOËL</h1>
        <h2>Almost engineer</h2>
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
.container {
  margin: -0.5em;

  background-image: url("../../static/images/portrait.png");
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
  padding: 2em;
}

h1,
h2 {
  display: block;
}

h1 {
  color: white;
  font-family: megrim, sans-serif;
  font-size: 10em;
  letter-spacing: 0.1em;
}

h2 {
  margin-top: 0;
  color: white;
  letter-spacing: 0.2em;
}

@media screen and (max-width: 1600px) {
}

@media screen and (max-width: 1450px) {
}

@media screen and (max-width: 1000px) {
  .title {
    align-items: center;
    justify-content: center;
    text-align: center;
    text-shadow: 0px 0px 10px rgba(150, 150, 150, 1);
  }
  h1,
  h2 {
    letter-spacing: normal;
  }

  h1 {
    font-size: 8em;
  }
}
</style>
