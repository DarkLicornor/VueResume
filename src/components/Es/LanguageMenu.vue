<template>
  <div>
    <div v-if="screenWidth > 1000" class="menu">
      <ul>
        <li v-click="fr">
          <img src="../../../static/images/france.png" />
          <!--
            <router-link router-link to="/fr"
                ><img src="../../../static/images/france.png"
              /></router-link>
            </li>
            <li>
              <router-link router-link to="/cat"
                ><img src="../../../static/images/catalan.png"
              /></router-link>
            </li>
            <li>
              <router-link router-link to="/en"
                ><img src="../../../static/images/england.jpg"
              /></router-link>
          -->
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
      if (newLocal in ["fr", "es", "cat", "en"]) {
        $i18n.locale = newLocale;
      } else {
        $i18n.locale = "en";
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

.menu {
  top: -1px;
  left: 0px;
  margin: 0;
  position: fixed;
}
.menu ul {
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 0;
}

.menu li {
  padding: 1.5em;
  list-style-type: none;
}

.menu img {
  width: 3em;
}
</style>
