<template>
  <div id="app">
    <div>
      <LanguageMenu />
      <Hello />
      <About />
      <Skills />
      <Experience />
      <Activity />
    </div>
    <!-- <router-view></router-view> -->
    <link
      href="https://fonts.googleapis.com/css?family=Arvo"
      rel="stylesheet"
    />
  </div>
</template>

<script>
import LanguageMenu from "./components/LanguageMenu.vue";
import Hello from "./components/Hello.vue";
import Experience from "./components/Experience.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Activity from "./components/Activity.vue";

export default {
  name: "app",
  components: { LanguageMenu, Hello, About, Skills, Experience, Activity }
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

p,
a,
span,
td {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-family: comfortaa, sans-serif;
}

h2 {
  font-size: 64px;
  font-family: sophia;
}

h3 {
  font-size: 24px;
  font-family: comfortaa, sans-serif;
}

h1 {
  font-family: sophia;
  font-size: 88px;
  margin: 0;
  text-align: center;
}

.subTitle {
  width: 70%;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center;
  font-size: 24px;
}

.date,
.place {
  font-style: italic;
  color: #ff0043;
  font-size: 12px;
}

.link {
  color: #ff0043;
}

.link:hover {
  color: #cc0035;
}

.blockTitle {
  font-size: 32px;
  padding: 1em;
  color: #14a0c5;
}
</style>
