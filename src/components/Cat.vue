<template>
  <div id="cat">
    <LanguageMenu />
    <Hello />
    <About />
    <Skills />
    <Experience />
    <Activity />
  </div>
</template>

<script>
import LanguageMenu from './Cat/LanguageMenu.vue'
import Hello from './Cat/Hello.vue'
import Experience from './Cat/Experience.vue'
import About from './Cat/About.vue'
import Skills from './Cat/Skills.vue'
import Activity from './Cat/Activity.vue'

export default {
  name: 'cat',
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
