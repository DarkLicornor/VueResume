<template>
  <div id="menu">
    <ul v-if="screenWidth > 880" class="languageMenu">
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
    <div v-if="screenWidth > 880" class="menu">
      <ul>
        <li v-if="hash == 'home'">
          <a class="activeLink" href="#" v-scroll-to="'#home'">{{
            $t("menu.home")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#home'">{{ $t("menu.home") }}</a>
        </li>
        <li v-if="hash == 'about'">
          <a class="activeLink" href="#" v-scroll-to="'#about'">{{
            $t("menu.about")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#about'">{{ $t("menu.about") }}</a>
        </li>
        <li v-if="hash == 'skills'">
          <a class="activeLink" href="#" v-scroll-to="'#skills'">{{
            $t("menu.skills")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#skills'">{{ $t("menu.skills") }}</a>
        </li>
        <li v-if="hash == 'experience'">
          <a class="activeLink" href="#" v-scroll-to="'#experience'">{{
            $t("menu.jobexperience")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#experience'">{{
            $t("menu.jobexperience")
          }}</a>
        </li>
        <li v-if="hash == 'activity'">
          <a class="activeLink" href="#" v-scroll-to="'#activity'">{{
            $t("menu.event")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#activity'">{{ $t("menu.event") }}</a>
        </li>
        <li>
          <a target="_blank" href="../../static/cv.pdf">{{ $t("menu.cv") }}</a>
        </li>
      </ul>
    </div>

    <div v-else class="hamburgerButton">
      <img @click="toggleMenu" src="../../static/images/menu.svg" />
    </div>

    <div v-if="menuOpen == true" class="hamburgerMenu">
      <ul>
        <li v-if="hash == 'home'">
          <a class="activeLink" href="#" v-scroll-to="'#home'">{{
            $t("menu.home")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#home'">{{ $t("menu.home") }}</a>
        </li>
        <li v-if="hash == 'about'">
          <a class="activeLink" href="#" v-scroll-to="'#about'">{{
            $t("menu.about")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#about'">{{ $t("menu.about") }}</a>
        </li>
        <li v-if="hash == 'skills'">
          <a class="activeLink" href="#" v-scroll-to="'#skills'">{{
            $t("menu.skills")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#skills'">{{ $t("menu.skills") }}</a>
        </li>
        <li v-if="hash == 'experience'">
          <a class="activeLink" href="#" v-scroll-to="'#experience'">{{
            $t("menu.jobexperience")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#experience'">{{
            $t("menu.jobexperience")
          }}</a>
        </li>
        <li v-if="hash == 'activity'">
          <a class="activeLink" href="#" v-scroll-to="'#activity'">{{
            $t("menu.event")
          }}</a>
        </li>
        <li v-else>
          <a href="#" v-scroll-to="'#activity'">{{ $t("menu.event") }}</a>
        </li>
        <li>
          <a target="_blank" href="../../static/cv.pdf">{{ $t("menu.cv") }}</a>
        </li>
        <li>
          <ul class="hamburgerLanguageMenu">
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
        </li>
        <li>
          <a @click="toggleMenu"
            ><img src="../../static/images/left-arrow.svg"
          /></a>
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
    isScrolledIntoView(el) {
      let elemTop = el.getBoundingClientRect().top;
      let elemBottom = el.getBoundingClientRect().bottom;
      let elemSize = elemBottom - elemTop;
      let isVisible;
      if (
        elemSize > window.innerHeight &&
        elemBottom >= window.innerHeight &&
        elemTop <= 0
      ) {
        isVisible = true;
      } else if (
        elemSize < window.innerHeight &&
        elemBottom < window.innerHeight &&
        elemTop >= 0
      ) {
        isVisible = true;
      } else if (elemTop >= 0) {
        isVisible = true;
      } else {
        isVisible = false;
      }
      return isVisible;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      console.log("clicked !");
      console.log(
        "after w, h, menuopen",
        this.screenWidth,
        this.screenHeight,
        this.menuOpen
      );
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
    console.log(
      "w, h, menuopen",
      this.screenWidth,
      this.screenHeight,
      this.menuOpen
    );

    let context = this;
    window.setInterval(function() {
      if (context.isScrolledIntoView(document.getElementById("home"))) {
        context.hash = "home";
      } else if (context.isScrolledIntoView(document.getElementById("about"))) {
        context.hash = "about";
      } else if (
        context.isScrolledIntoView(document.getElementById("skills"))
      ) {
        context.hash = "skills";
      } else if (
        context.isScrolledIntoView(document.getElementById("experience"))
      ) {
        context.hash = "experience";
      } else if (
        context.isScrolledIntoView(document.getElementById("activity"))
      ) {
        context.hash = "activity";
      }

      this.screenWidth = document.documentElement.clientWidth;
      this.screenHeight = window.innerHeigh;
    }, 100);

    console.log(
      "after w, h, menuopen",
      this.screenWidth,
      this.screenHeight,
      this.menuOpen
    );
  },
  components: {}
};
</script>

<style scoped>
.menu a {
  display: block;
  text-decoration: none;
  color: #14a0c5;
  font-family: comfortaa;
  text-align: center;
  padding: 0.5em;
  width: 100%;
}

.menu li a {
  border-bottom: 2px solid #ffffff;
}

.menu li a:hover {
  border-bottom: 2px solid #fff133;
}

.menu .activeLink {
  border-bottom: 2px solid #fff133;
}

.menu a img {
  cursor: pointer;
  border: none;
}

.menu {
  bottom: -1px;
  margin: 0;
  width: 100%;
  position: fixed;
}

.menu ul {
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: 1em;
  background: white;
  border: 0.2em solid #ff0043;
  border-bottom: none;
  -webkit-box-shadow: 0px 0px 38px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 38px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 38px 2px rgba(0, 0, 0, 0.75);
}

.menu li,
.hamburgerMenu li {
  list-style-type: none;
}

.hamburgerButton img {
  width: 3em;
  position: absolute;
  top: 0;
  margin-top: 0.5em;
  margin-left: 0.5em;
  cursor: pointer;
}

.hamburgerMenu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: white;
}

.hamburgerMenu ul {
  padding: 0;
  margin: 0;
}

.hamburgerMenu li {
  cursor: pointer;
}

.hamburgerMenu a {
  display: block;
  text-decoration: none;
  color: black;
  font-family: comfortaa;
  text-align: center;
  padding: 0.5em;
  width: 100%;
  margin: auto;
}

.hamburgerMenu li a {
  border-bottom: none;
  padding-bottom: 1em;
  padding-top: 1em;
}

.hamburgerMenu li a:hover:not(.activeLink) {
  background: #fff133;
}

.hamburgerMenu .activeLink {
  background: #14a0c5;
  color: white;
}

.hamburgerMenu a img {
  cursor: pointer;
  border: none;
  width: 3em;
}

.languageMenu {
  top: -1px;
  left: 0px;
  margin: 0;
  position: fixed;
}
.languageMenu ul {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 0;
}

.languageMenu li {
  padding-left: 1.5em;
  list-style-type: none;
  cursor: pointer;
}

.languageMenu img {
  width: 3em;
}

.hamburgerLanguageMenu {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 0;
}

.hamburgerLanguageMenu li {
  padding: 1em;
  list-style-type: none;
  cursor: pointer;
}

.hamburgerLanguageMenu img {
  width: 3em;
}
</style>
