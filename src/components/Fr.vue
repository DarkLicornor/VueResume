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
import LanguageMenu from './Fr/LanguageMenu.vue'
import Hello from './Fr/Hello.vue'
import Experience from './Fr/Experience.vue'
import About from './Fr/About.vue'
import Skills from './Fr/Skills.vue'
import Activity from './Fr/Activity.vue'

export default {
  name: 'fr',
  components: {
    LanguageMenu,
    Hello,
    About,
    Skills,
    Experience,
    Activity
  }
}
</script>
