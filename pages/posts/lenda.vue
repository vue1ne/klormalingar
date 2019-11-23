<template>

<div class="velcome">

     <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-large">  

<div class="uk-card uk-card-default uk-width-1-2@m" v-for="post in posts">
        
        <div class="uk-card-header">
        <div class="uk-grid-large uk-flex-middle" uk-grid>

          <article class="uk-comment">
          <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-comment-avatar" v-bind:src="avatar" width="80" height="80" alt="">
              </div>
              <div class="uk-width-expand">
                  <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#"><span class="user" uk-icon="icon: user"></span>{{ username }}</a></h4>
                  <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                      <li><a href="#" :src="starf"></a></li>
                      <li><a href="#"><span class="user" uk-icon="icon: location"></span>Sundlaug Sauðárkróks</a></li>
                  </ul>
              </div>
          </header>

          <div class="uk-comment-body">
            <!-- <p>Velkominn <span>{{ username }} <br><br> -->

             <nuxt-link to="/posts"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
             <span uk-icon="icon: plus"></span><span class="ny">Ný</span> Mæling
             </button></nuxt-link>
             <nuxt-link to="/posts/data"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"><span>Mæl</span>ingar</button></nuxt-link>
              </span></p>
          </div>
          </article>
         <caption class="date">
        
        <div class="uk-align-center" uk-grid>
            <span>Síðast <span class="malt">Mælt</span>
            <span class="cal" uk-icon="icon: calendar"></span><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
            <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.created_at | moment("H:mm") }}</span></span>
        </div><!-- .uk-align-center -->

        <!-- <ul class="uk-breadcrumb uk-align-center">
            <li><span class="sidast">Síðast <span class="malt">Mælt</span></span></li>
            <li><span class="cal" uk-icon="icon: calendar"></span><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span></li>
            <li><span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.created_at | moment("H:mm") }}</span></li>
        </ul><!-- .uk-breadcrumb   -->
           
         </caption>

        </div>
    </div>


    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>

                <h3>
                <span class="uk-align-left">Sundlaug</span>
                <time class="uk-text-success uk-align-right">{{ post.hitisundlaug }}</time>
                <br>
                <span class="uk-align-left">Kaldur Pottur</span>
                <time class="uk-text-warning uk-align-right">{{ post.hitikaldurpottur }}</time>
                <br>
                <span class="uk-align-left">Heitur Pottur</span>
                <time class="uk-text-danger uk-align-right">{{ post.hitiheiturpottur }}</time>
                <br>
                <span class="uk-align-left">Klórmagn</span>
                <time class="uk-text-success uk-align-right">{{ post.klormagn }}</time>
                </h3>

        </div>
    </div>
    <div class="uk-card-body">

     <ul uk-accordion>
      <li>
          <a class="uk-accordion-title" href="#">Athugasemd</a>

          <div class="uk-accordion-content">
          <p v-html="post.minnismidi"></p>
          </div><!-- .uk-accordion-content -->

      </li>
    </ul>

    </div>
</div>

</div><!-- .uk-container .uk-container-large -->
</div><!-- .uk-section .uk-section-default -->

</div><!-- .velcome -->

</template>

<script>  
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'

export default {
  
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
    },
    starf() {
      return this.$store.getters['auth/starf']
    },
  },
  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],

    }
  },
  // wp reminders import
   async created() {
    //axios.get(`http://localhost:1337/klormalingars?_limit=1&_sort=created_at:desc`)
    axios.get(`https://sundlaug.herokuapp.com/klormalingars?_limit=1&_sort=created_at:desc`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {
    })
  },
   ...mapMutations({
      setUser: 'auth/setUser'
    })
}
</script>