<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
    <Hello />
    <About />
    <Skills />
    <Experience />
    <Activity />
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Experience from './components/Experience.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Activity from './components/Activity.vue'

export default {
  name: 'app',
  components: {
    Hello,
    About,
    Skills,
    Experience,
    Activity
  }
}
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
    font-family: josefin;
    src: url(../static/fonts/Josefin_Sans/JosefinSans-Regular.ttf);
}

@font-face {
    font-family: dosis;
    src: url(../static/fonts/Dosis/Dosis-Regular.ttf);
}

@font-face {
    font-family: noto;
    src: url(../static/fonts/Noto_Sans/NotoSans-Regular.ttf);
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
@font-face {
    font-family: titillium;
    src: url(../static/fonts/Titillium_Web/TitilliumWeb-Regular.ttf);
}

</style>
