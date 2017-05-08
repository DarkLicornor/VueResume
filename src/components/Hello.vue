<template>
  <div id="home">
    <div class="container">
      <div class="info">
        <p class="bracket"> { </p><br>
        <p> age : 20, </p><br>
        <p> name:</p>
        <h1> "Alexa NOËL", </h1><br>
        <p> post: </p>
        <h1>"Computing student", </h1><br>
        <p>dream: "Be happy" </p><br>
        <p style="margin-left: 40vw;" class="bracket"> } </p><br>
      </div>
      <div class="socialMediaLine">
        <a target="_blank" href="https://twitter.com/Alexa_Noel"><img src="../../static/images/twitter.svg"></a>
        <a target="_blank" href="https://github.com/DarkLicornor"><img style="width: 100%;" src="../../static/images/github.png"></a>
        <a target="_blank" href="https://www.linkedin.com/in/alexa-n-86ab2a93/"><img src="../../static/images/linkedin.svg"></a>
        <a target="_blank" href="https://www.instagram.com/dark.licornor/?hl=fr"><img src="../../static/images/instagram.svg"></a>
      </div>
      <div class="portrait">
        <img src="../../static/images/portrait.png">
      </div>
    </div>
    <div class="menu">
      <ul>
        <li v-if="hash == 'home'"><a class="activeLink" href="#home">Home</a></li>
        <li v-else><a href="#home">Home</a></li>
        <li v-if="hash == 'about'"><a class="activeLink" href="#about">A propos</a></li>
        <li v-else><a href="#about">A propos</a></li>
        <li v-if="hash == 'skills'"><a class="activeLink" href="#skills">Skills</a></li>
        <li v-else><a href="#skills">Skills</a></li>
        <li v-if="hash == 'experience'"><a class="activeLink" href="#experience">Expérience</a></li>
        <li v-else><a href="#experience">Expérience</a></li>
        <li v-if="hash == 'activity'"><a class="activeLink" href="#activity">Evénements</a></li>
        <li v-else ><a href="#activity">Evénements</a></li>
        <li><a target="_blank" href="../../static/cv.pdf">Télécharger CV</a></form></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hash: 'home'
    }
  },
  methods: {
    isScrolledIntoView (el) {
      let elemTop = el.getBoundingClientRect().top
      let elemBottom = el.getBoundingClientRect().bottom
      let elemSize = elemBottom - elemTop
      let isVisible
      if (elemSize > window.innerHeight && elemBottom >= window.innerHeight && elemTop <= 0) {
        isVisible = true
      } else if (elemSize < window.innerHeight && elemBottom < window.innerHeight && elemTop >= 0) {
        isVisible = true
      } else if (elemTop >= 0) {
        isVisible = true
      } else {
        isVisible = false
      }
      return isVisible
    }
  },
  mounted () {
    let context = this
    window.setInterval(function () {
      if (context.isScrolledIntoView(document.getElementById('home'))) {
        context.hash = 'home'
      } else if (context.isScrolledIntoView(document.getElementById('about'))) {
        context.hash = 'about'
      } else if (context.isScrolledIntoView(document.getElementById('skills'))) {
        context.hash = 'skills'
      } else if (context.isScrolledIntoView(document.getElementById('experience'))) {
        context.hash = 'experience'
      } else if (context.isScrolledIntoView(document.getElementById('activity'))) {
        context.hash = 'activity'
      }
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
  padding: 1em;
}

.socialMediaLine {
  width: 5em;
  position: absolute;
  margin: 0;

}

.portrait {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.portrait img {
  height: 100%;
}

p, h1 {
  margin: 0;
  padding: 0;
  font-size: 3em;
  padding-left: 1em;
  font-family: 'Arvo', serif;
  display: inline;
  color: white;
  width: 40vw;
}

h1 {
  padding-left: 0;
  font-size: 3.2em;
  color: #fff133;
  white-space: nowrap;
}

.bracket {
  padding-left: 0em;
  font-size: 5em;
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

</style>
