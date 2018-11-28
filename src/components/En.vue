<template>
  <div id="en">
    <LanguageMenu />
    <Hello />
    <About />
    <Skills />
    <Experience />
    <Activity />
  </div>
</template>

<script>
import LanguageMenu from "./En/LanguageMenu.vue";
import Hello from "./En/Hello.vue";
import Experience from "./En/Experience.vue";
import About from "./En/About.vue";
import Skills from "./En/Skills.vue";
import Activity from "./En/Activity.vue";

export default {
  name: "en",
  components: {
    LanguageMenu,
    Hello,
    About,
    Skills,
    Experience,
    Activity
  }
};
</script>
