<template lang='pug'>
  #app
    img(src='./assets/logo.png')
    h1 {{ msg }}
    h2 やった
    ul
    p npm i vue-cli -g, `vue init webpack-simple` /
    p npm i stylus, stylus-loader /

    h2 これからやる    
    p ルーティングってやつ(ページを複数用意する)
    p メインページ(アイテムコントローラとアイテムリストの表示)
    p シングルページ(アイテムの詳細に関するページ)
    p jsonを読み込むやつ 
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}  

</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
