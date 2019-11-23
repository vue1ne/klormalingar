<template> 

<div class="categories">

<ul class="uk-breadcrumb">
    <li><nuxt-link to="/posts/lenda">Heim</nuxt-link></li>
    <li><span>Flokka</span></li>
</ul><!-- .uk-breadcrumb -->  

<div class="uk-card uk-card-default uk-width-1-2@m" v-for="post in posts">


     <ul uk-accordion>
      <li>
          <a class="uk-accordion-title" href="#">{{ post.name }}</a>

          <div class="uk-accordion-content">


          <p>{{ post.id }}</p>
          <p v-html="post.id"></p>

          </div><!-- .uk-accordion-content -->

      </li>
    </ul>

</div><!-- .uk-card -->

</div><!-- .categories -->

</template>

<script>  
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'

const token = 'df247647-aec0-4dbc-9652-786bdf07a93c';

export default {
  
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
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
    axios.get(`http://localhost:1337/categories/klormalingars/?_sort=created_at:asc`)
    //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
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