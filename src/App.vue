<template>
  <div id="app">
    <En />
    <!-- <router-view></router-view> -->
    <link
      href="https://fonts.googleapis.com/css?family=Arvo"
      rel="stylesheet"
    />
  </div>
</template>

<script>
import En from "./components/En.vue";
export default {
  name: "app",
  components: { En }
};
</script>

<style>
/*colors:
blue: #14A0C5
yellow: #fff133
pink:  #ff0043*/

@font-face {
  font-family: comfortaa;
  src: url(../static/fonts/comfortaa/Comfortaa-Regular.ttf);
}

@font-face {
  font-family: comfortaaLight;
  src: url(../static/fonts/comfortaa/Comfortaa-Light.ttf);
}

@font-face {
  font-family: sophia;
  src: url(../static/fonts/Sophia/Sophia/Sophia/Sophia.ttf);
}

@font-face {
  font-family: sophiaLeft;
  src: url(../static/fonts/Sophia/Sophia/SophiaLeft/SophiaLeft.ttf);
}

@font-face {
  font-family: sophiaRight;
  src: url(../static/fonts/Sophia/Sophia/SophiaRight/SophiaRight.ttf);
}
</style>
