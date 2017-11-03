<template>
  <div id="home">
    <div class="container">
      <div class="info">
        <div class="infoContainer">
          <p class="bracket1"> { </p><br>
            <p> age : 20, </p><br>
            <p> name:</p>
            <h1> "Alexa NOËL", </h1><br>
            <p> post: </p>
            <h1>"Computing student", </h1><br>
            <p>dream: "Be happy" </p><br>
          <p class="bracket2"> } </p><br>
        </div>
      </div>
      <div class="socialMediaLine">
        <a target="_blank" href="https://twitter.com/Alexa_Noel"><img src="../../../static/images/twitter.svg"></a>
        <a target="_blank" href="https://github.com/DarkLicornor"><img style="width: 100%;" src="../../../static/images/github.png"></a>
        <a target="_blank" href="https://www.linkedin.com/in/alexa-n-86ab2a93/"><img src="../../../static/images/linkedin.svg"></a>
        <a target="_blank" href="https://www.instagram.com/dark.licornor/?hl=fr"><img src="../../../static/images/instagram.svg"></a>
      </div>
      <div class="portrait">
        <img src="../../../static/images/portrait.png">
      </div>
    </div>
    <div v-if="screenWidth > 1000" class="menu">
      <ul>
        <li v-if="hash == 'home'"><a class="activeLink" href="#" v-scroll-to="'#home'">Accueil</a></li>
        <li v-else><a href="#" v-scroll-to="'#home'">Accueil</a></li>
        <li v-if="hash == 'about'"><a class="activeLink" href="#" v-scroll-to="'#about'">A propos de moi</a></li>
        <li v-else><a href="#" v-scroll-to="'#about'">A propos de moi</a></li>
        <li v-if="hash == 'skills'"><a class="activeLink" href="#" v-scroll-to="'#skills'">Compétences</a></li>
        <li v-else><a href="#" v-scroll-to="'#skills'">Compétences</a></li>
        <li v-if="hash == 'experience'"><a class="activeLink" href="#" v-scroll-to="'#experience'">Expérience</a></li>
        <li v-else><a href="#" v-scroll-to="'#experience'">Expérience</a></li>
        <li v-if="hash == 'activity'"><a class="activeLink" href="#" v-scroll-to="'#activity'">Evénements</a></li>
        <li v-else ><a href="#" v-scroll-to="'#activity'">Evénements</a></li>
        <li><a target="_blank" href="../../static/cv.pdf">CV</a></form></li>
      </ul>
    </div>
    <div v-else class="hamburgerButton">
      <img @click="toggleMenu" src="../../../static/images/menu.svg">
    </div>
    <div v-if="menuOpen == true" class="hamburgerMenu">
      <ul>
        <li v-if="hash == 'home'"><a class="activeLink" href="#" v-scroll-to="'#home'">Accueil</a></li>
        <li v-else><a href="#" v-scroll-to="'#home'">Accueil</a></li>
        <li v-if="hash == 'about'"><a class="activeLink" href="#" v-scroll-to="'#about'">A propos de moi</a></li>
        <li v-else><a href="#" v-scroll-to="'#about'">A propos de moi</a></li>
        <li v-if="hash == 'skills'"><a class="activeLink" href="#" v-scroll-to="'#skills'">Compétences</a></li>
        <li v-else><a href="#" v-scroll-to="'#skills'">Compétences</a></li>
        <li v-if="hash == 'experience'"><a class="activeLink" href="#" v-scroll-to="'#experience'">Expérience</a></li>
        <li v-else><a href="#" v-scroll-to="'#experience'">Expérience</a></li>
        <li v-if="hash == 'activity'"><a class="activeLink" href="#" v-scroll-to="'#activity'">Evénements</a></li>
        <li v-else ><a href="#" v-scroll-to="'#activity'">Evénements</a></li>
        <li><a target="_blank" href="../../static/cv.pdf">CV</a></form></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hash: 'home',
      screenWidth: document.documentElement.clientWidth,
      screenHeight: window.innerHeight,
      menuOpen: false
    }
  },
  methods: {
    isScrolledIntoView(el) {
      let elemTop = el.getBoundingClientRect().top
      let elemBottom = el.getBoundingClientRect().bottom
      let elemSize = elemBottom - elemTop
      let isVisible
      if (
        elemSize > window.innerHeight &&
        elemBottom >= window.innerHeight &&
        elemTop <= 0
      ) {
        isVisible = true
      } else if (
        elemSize < window.innerHeight &&
        elemBottom < window.innerHeight &&
        elemTop >= 0
      ) {
        isVisible = true
      } else if (elemTop >= 0) {
        isVisible = true
      } else {
        isVisible = false
      }
      return isVisible
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  },
  mounted() {
    let context = this
    window.setInterval(function() {
      if (context.isScrolledIntoView(document.getElementById('home'))) {
        context.hash = 'home'
      } else if (context.isScrolledIntoView(document.getElementById('about'))) {
        context.hash = 'about'
      } else if (
        context.isScrolledIntoView(document.getElementById('skills'))
      ) {
        context.hash = 'skills'
      } else if (
        context.isScrolledIntoView(document.getElementById('experience'))
      ) {
        context.hash = 'experience'
      } else if (
        context.isScrolledIntoView(document.getElementById('activity'))
      ) {
        context.hash = 'activity'
      }
      // this.screenWidth = window.innerWidth ||
      // document.documentElement.clientWidth ||
      // document.getElementsByTagName('body')[0].clientWidth
      // this.screenHeight = window.innerHeight ||
      // document.documentElement.clientHeight ||
      // document.getElementsByTagName('body')[0].clientHeight
      console.log('w', this.screenWidth)
      this.screenWidth = document.documentElement.clientWidth
      this.screenHeight = window.innerHeigh
    }, 100)
  }
}
</script>

<style scoped>
.container {
  margin: -0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #14A0C5;
}

.info {
  width: 50%;
}

.infoContainer {
  max-width: 100%;
  margin: 2em;
  padding: 0.7em;
  align-items: center;
}

.socialMediaLine {
  width: 5em;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.hamburgerButton {
    position: absolute;
    display: block;
    top: 0;
    margin: auto;
    padding: 1em;
}

.hamburgerButton img {
  width: 10em;
}

.portrait {
  width: 50%;
  height: 100%;
  display: flex;
  background: #fff684;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.portrait img {
  max-height: 100%;
  width: auto;
}

p, h1 {
  margin: 0;
  padding: 0;
  font-size: 2.5em;
  text-align: center;
  padding-left: 1em;
  font-family: 'Arvo', serif;
  display: inline;
  color: white;
  width: 40vw;
}

h1 {
  padding-left: 0;
  font-size: 3em;
  color: #fff133;
  white-space: nowrap;
}

.bracket1, .bracket2 {
  padding-left: 0em;
  font-size: 5em;
}

.bracket2 {
  margin-left: 40vw;
}
a {
  display: block;
  text-decoration: none;
  color: #14A0C5;
  font-family: comfortaa;
  text-align: center;
  padding: 0.5em;
  width: 100%;
}

li a {
  border-bottom: 2px solid #ffffff;
}

li a:hover {
  border-bottom: 2px solid #fff133;
}

.activeLink {
  border-bottom: 2px solid #fff133;
}

a img {
  cursor: pointer;
  border: none;
}

.menu {
  bottom: -1px;
  margin: 0;
  width: 100%;
  position: fixed;
}
.menu ul{
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
  -webkit-box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 38px 2px rgba(0,0,0,0.75);
}

.menu li {
  list-style-type:none;
}

@media only screen and (max-width : 1024px) {
  p {
    font-size: 2em;
  }

  h1 {
    font-size: 2.2em;
  }

  .bracket2 {
    margin-left: 35vw;
  }
}
/*Small screens*/
@media only screen and (max-width : 1024px) and (orientation : portrait) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: #14A0C5;
  }

  .info {
    height: 50%;
    width: 100%;
  }

  .infoContainer {
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .bracket1 {
    margin-left: 2em;
    text-align: left;
  }

  .bracket2 {
    margin: 0;
    margin-right: 2em;
    text-align: right;
  }

  p, h1 {
    padding-left: 0;
    width: 100%;
  }

  .socialMediaLine {
    width: 50%;
    margin: auto;
    height: 10em;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

  .portrait {
    height: 50%;
    width: 100%;
    display: flex;
    background: #fff684;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
}
</style>
