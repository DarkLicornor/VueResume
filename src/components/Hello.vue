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
        <a><img src="../../static/images/twitter.svg"></a>
        <a><img style="width: 100%;" src="../../static/images/github.png"></a>
        <a><img src="../../static/images/linkedin.svg"></a>
        <a><img src="../../static/images/instagram.svg"></a>
      </div>
      <div class="portrait">
        <img src="../../static/images/portrait.png">
      </div>
    </div>
    <div class="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#scolarite">Scolarité</a></li>
        <li><a>Télécharcher CV</a></li>
      </ul>
    </div>
  </div>
</template>

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
  cursor: pointer;
  display: block;
  padding: 1em;
  width: 100%;
}

a img {
  border: none;
}

.menu {
  bottom: 0;
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
  background: white;
}

.menu li {
  list-style-type:none;
}

</style>
