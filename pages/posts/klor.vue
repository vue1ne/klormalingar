<template> 

<div class="klor">

<ul class="uk-breadcrumb">
    <li><nuxt-link to="/posts/lenda">Heim</nuxt-link></li>
    <li><span>Mælingar</span></li>
</ul><!-- .uk-breadcrumb -->  

<div class="uk-card uk-card-default uk-width-1-2@m" v-for="post in posts">

    <div class="uk-card-header">

        <div class="uk-grid-small uk-flex-middle" uk-grid>

             <div class="uk-width-auto" v-if="post.starfsmadur == 'odinn'">
                <img class="uk-border-circle" width="40" height="40" src="https://lh3.googleusercontent.com/a-/AAuE7mB4dRHKqhaTxYA9CawE2YOf7Scvb5_EEFGola1SGEo=s96-cc">
            </div>
            <div class="uk-width-auto" v-if="post.starfsmadur == 'robert'">
                <img class="uk-border-circle" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-1/c17.0.100.100a/p100x100/1493444_1377246689198452_1488600122_o.jpg?_nc_cat=107&_nc_oc=AQlyOFG7uDQGIEDIuRPW08mhTNn5Uo9ALaD9Fi1gB9nPgo2ulLEIPIT-D5WkraZm09Y&_nc_ht=scontent.frkv2-1.fna&oh=34aca7f1a20401b84d96854885872a4d&oe=5E555B33">
            </div>
            <div class="uk-width-auto" v-if="post.starfsmadur == 'oli'">
                <img class="uk-border-circle" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/54521146_10156401125097602_6650388366841872384_n.jpg?_nc_cat=105&_nc_oc=AQnYWEC6NV8s7ACHSfU4JVkypXCg7eKE0JAl5a8GWm1aCoQg5wGw1WrPsy09kgd8SOY&_nc_ht=scontent.frkv2-1.fna&oh=5ae5d74131a5e531601506455a70fb5a&oe=5E84D0F1">
            </div>
            <div class="uk-width-auto" v-if="post.starfsmadur == 'torvald'">
                <img class="uk-border-circle" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/12998769_10206297823309072_533707040792698881_n.jpg?_nc_cat=110&_nc_oc=AQnqczaJAHhFgxRvyopVA_ZonW81JKntg6F3wSl4YXSPPo7uFbyz-Xqwnrlmc6wjquE&_nc_ht=scontent.frkv2-1.fna&oh=9341c777686b46d4a45b30399c6eb29f&oe=5E4DEC99">
            </div>
            <div class="uk-width-auto" v-if="post.starfsmadur == 'steina'">
                <img class="uk-border-circle" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/73294654_10214430438331501_7842106633156034560_o.jpg?_nc_cat=101&_nc_oc=AQliQ6awQus2jaeErc0N0FqK7BsTpzFJ0qPy9XcBFh4V_W20i84mpKVfpha_OUGgx5Y&_nc_ht=scontent.frkv2-1.fna&oh=a7c8de4647633f7cfb33cad2f9a02c6f&oe=5E5303E9">
            </div>
            <div class="uk-width-auto" v-if="post.starfsmadur == 'halla'">
                <img class="uk-border-circle" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t1.0-1/p100x100/67403435_10157252483601832_2675199781374001152_n.jpg?_nc_cat=100&_nc_oc=AQmZJRkCTr-Gl0xlmGQHiQ95eLh9p-iNp-I3TTS6fZYeKSPgeF-oOaetEKOjfXWnE2U&_nc_ht=scontent.frkv2-1.fna&oh=fd81d3f3046cdbbe58b55488f80fdada&oe=5E58467E">
            </div>
            <div class="uk-width-auto" v-if="post.starfsmadur == 'ragna'">
                <img class="uk-border-circle" width="40" height="40" src="https://scontent.frkv2-1.fna.fbcdn.net/v/t31.0-1/p100x100/13613184_10205990141146999_3445103564979179267_o.jpg?_nc_cat=108&_nc_oc=AQk71-ivWS1NpHRU6fRPzFFU06a-VxudBffqnKIkJSM1Squnqi-d0tWkC_YYr5FRHqk&_nc_ht=scontent.frkv2-1.fna&oh=fb9769640cfb4c36479c63ae61b3c6eb&oe=5E4BE8B5">
            </div>
      
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom" v-if="post.starfsmadur == 'odinn'">Óðinn</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.starfsmadur == 'robert'">Róbert </h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.starfsmadur == 'oli'">Ólafur</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.starfsmadur == 'torvald'">Þorvaldur</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.starfsmadur == 'steina'">Steina</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.starfsmadur == 'halla'">Halla</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.starfsmadur == 'ragna'">Ragna</h3>

                <p class="uk-text-meta uk-margin-remove-top">
                <time>Mældi: <span class="cal" uk-icon="icon: calendar"></span><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.created_at | moment("H:mm") }}</span>
                </time></p>
            </div>

        </div><!-- .uk-grid-small -->

    </div><!-- .uk-card-header -->

    <div class="uk-card-body">

    <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-match uk-grid-item-match" uk-grid>

    <div>

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>Sundlaug</span>

              <span class="uk-align-right">
                <small>Mæling nr <span>{{ post.id }}</span></small>
              </span><!-- .uk-align-right -->

        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: span; delay: 300; repeat: true">
              
              <span>°C</span>

              <span class="uk-align-right">
                {{ post.hitisundlaug }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

              <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>Klórstöð</span>

              <span class="uk-align-right">
                {{ post.malingsundlaug }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-top; target: span; delay: 300; repeat: true">
              
              <span>Mæling</span>

              <span class="uk-align-right">
                {{ post.testsundlaug }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>Leiðrétt</span>

              <span class="uk-align-right">
                {{ post.utkomasundlaug }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->
        
    </div><!-- div -->

    <!-- kaldur pottur ///////////////////////////////////////////// -->
          <div>

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: span; delay: 300; repeat: true">
              
              <span>Kaldur Pottur</span>

              <span class="uk-align-right">
                
              </span><!-- .uk-align-right -->

        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>°C</span>

              <span class="uk-align-right">
                {{ post.hitikaldurpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

              <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-top; target: span; delay: 300; repeat: true">
              
              <span>Klórstöð</span>

              <span class="uk-align-right">
                {{ post.malingkaldurpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>Mæling</span>

              <span class="uk-align-right">
                {{ post.testkaldurpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: span; delay: 300; repeat: true">
              
              <span>Leiðrétt</span>

              <span class="uk-align-right">
                {{ post.utkomakaldurpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->
        
    </div><!-- div -->

    <!-- heitur pottur ///////////////////////////////////// -->
        <div>

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: span; delay: 300; repeat: true">
              
              <span>Heitur Pottur</span>

              <span class="uk-align-right">
                
              </span><!-- .uk-align-right -->

        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>°C</span>

              <span class="uk-align-right">
                {{ post.hitiheiturpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

              <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: span; delay: 300; repeat: true">
              
              <span>Klórstöð</span>

              <span class="uk-align-right">
                {{ post.malingheiturpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>Mæling</span>

              <span class="uk-align-right">
                {{ post.testheiturpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-top; target: span; delay: 300; repeat: true">
              
              <span>Leiðrétt</span>

              <span class="uk-align-right">
                {{ post.utkomaheiturpottur }}
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->
        
    </div><!-- div -->


</div><!-- grid -->
    
    </div><!-- .uk-card-body -->

    <div class="uk-card-footer">

     <ul uk-accordion>
      <li>
          <a class="uk-accordion-title" href="#">Athugasemd</a>

          <div class="uk-accordion-content">
          <p v-html="post.minnismidi"></p>
          </div><!-- .uk-accordion-content -->

      </li>
    </ul>

    </div>

</div><!-- .uk-card -->

</div><!-- .klor -->

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
    //axios.get(`http://localhost:1337/klormalingars?_sort=created_at:desc`)
    axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
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