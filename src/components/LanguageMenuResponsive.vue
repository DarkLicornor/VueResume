<template>
  <div>
    <div v-if="screenWidth > 1000" class="menu">
      <ul>
        <li @click="changeLocale('fr');">
          <img src="../../static/images/france.png" />
        </li>
        <li @click="changeLocale('cat');">
          <img src="../../static/images/catalan.png" />
        </li>
        <li @click="changeLocale('en');">
          <img src="../../static/images/england.jpg" />
        </li>
        <li @click="changeLocale('es');">
          <img src="../../static/images/spain.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hash: "home",
      screenWidth: document.documentElement.clientWidth,
      screenHeight: window.innerHeight,
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    changeLocale(newLocale) {
      const existingLocales = ["fr", "es", "cat", "en"];
      if (existingLocales.includes(newLocale)) {
        this.$i18n.locale = newLocale;
      } else {
        this.$i18n.locale = "en";
      }
    }
  },
  mounted() {
    let context = this;
    window.setInterval(function() {
      this.screenWidth = document.documentElement.clientWidth;
      this.screenHeight = window.innerHeigh;
    }, 100);
  }
};
</script>

<style scoped>
li a:hover {
  border-bottom: 2px solid #fff133;
}

a img {
  cursor: pointer;
  border: none;
}
</style>
