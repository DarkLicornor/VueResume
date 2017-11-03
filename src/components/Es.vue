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
import LanguageMenu from './Es/LanguageMenu.vue'
import Hello from './Es/Hello.vue'
import Experience from './Es/Experience.vue'
import About from './Es/About.vue'
import Skills from './Es/Skills.vue'
import Activity from './Es/Activity.vue'

export default {
  name: 'es',
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
