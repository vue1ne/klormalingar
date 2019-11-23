<template>

  <div class="klorauka">

    <!-- This is an anchor toggling the modal -->
    <a class="uk-button uk-button-default" href="#valmoguleikar" uk-toggle>+Ný<span>Mæling</span></a>

    <!-- This is the modal -->
    <div id="valmoguleikar" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <valmoguleikar />
        <button class="uk-button uk-button-default uk-modal-close" type="button">Hætta við!</button>
      </div>
    </div>

      <!--     <caption class="date">
        <img class="uk-border-circle" width="40" height="40" v-bind:src="avatar">
        <span class="user" v-html="username"></span>
     <span class="cal" uk-icon="icon: calendar"></span><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
     <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.created_at | moment("H:mm") }}</span>
    </caption> -->

<!-- mobile /////////////////////////////////// -->
<div class="mobile">

     <table class="uk-table uk-table-hover uk-table-divider">

 <thead>

        <tr>

          <th>Dagsetning</th>
          <th>Starfsmaður</th>
          <th>Ker</th>
          <th>°C</th>
          <th>Klórstöð</th>
          <th>Mæling</th>
          <th>Leiðrétt</th>
          <th>Ker</th>
          <th>°C</th>
          <th>Klórstöð</th>
          <th>Mæling</th>
          <th>Leiðrétt</th>
          <th>ker</th>
          <th>°C</th>
          <th>Klórstöð</th>
          <th>Mæling</th>
          <th>Leiðrétt</th>
        </tr>
      </thead>

      <tbody v-for="post in posts">

              <ul  uk-accordion uk-accordion="collapsible: true">
            <li>
            
               <div class="uk-accordion-title">
               
               <span class="timi" width="12" uk-icon="icon: calendar"></span>{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}{{ username }}<img class="uk-border-circle" width="30" height="30" v-bind:src="avatar">

               </div>

                 <div class="uk-accordion-content">

        <tr>
          <td>
            <span class="tag is-success">
              <span class="timi" width="12" uk-icon="icon: calendar"></span>{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}
            </span>
          </td>
          <td>{{ username }}<img class="uk-border-circle" width="40" height="40" v-bind:src="avatar"></td>

           <td class="ker">Sundlaug</td>
          <td v-html="post.hitisundlaug"></td>
          <td v-html="post.malingsundlaug"></td>
          <td v-html="post.testsundlaug"></td>
          <td v-html="post.utkomasundlaug"></td>

          <td class="ker">Heitur Pottur</td>
          <td v-html="post.hitikaldurpottur"></td>
          <td v-html="post.malingkaldurpottur"></td>
          <td v-html="post.testkaldurpottur"></td>
          <td v-html="post.utkomakaldurpottur"></td>

          <td class="ker">Kaldur Pottur</td>
          <td v-html="post.hitiheiturpottur"></td>
          <td v-html="post.malingheiturpottur"></td>
          <td v-html="post.testheiturpottur"></td>
          <td v-html="post.utkomaheiturpottur"></td>

          <td>
           
           <ul uk-accordion uk-accordion="collapsible: true">
            <li>

               <button class="uk-accordion-title button is-primary is-small">
                Uppl
               </button>

              <div class="uk-accordion-content">
               {{ post.minnismidi }}
              </div>

            </li>
          </ul>

         </td>


        </tr>

              </div><!-- .uk-accordion-content -->

            </li>
          </ul>

      </tbody>

</table>


</div><!-- .mobile -->
<!-- mobile ends /////////////////////////////////// -->

  <table class="uk-table desktop uk-table-hover uk-table-divider">

      <thead>

        <tr>

          <th>Dagsetning</th>
          <th>Starfsmaður</th>
          <th>Ker</th>
          <th>°C</th>
          <th>Klórstöð</th>
          <th>Mæling</th>
          <th>Leiðrétt</th>
          <th>Ker</th>
          <th>°C</th>
          <th>Klórstöð</th>
          <th>Mæling</th>
          <th>Leiðrétt</th>
          <th>ker</th>
          <th>°C</th>
          <th>Klórstöð</th>
          <th>Mæling</th>
          <th>Leiðrétt</th>
        </tr>
      </thead>

      <tbody v-for="post in posts">

        <tr>
          <td>
            <span class="tag is-success">
              <span class="timi" width="12" uk-icon="icon: calendar"></span>{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}
            </span>
          </td>
          <td>{{ username }}<img class="uk-border-circle" width="40" height="40" v-bind:src="avatar"></td>

           <td class="ker">Sundlaug</td>
          <td v-html="post.hitisundlaug"></td>
          <td v-html="post.malingsundlaug"></td>
          <td v-html="post.testsundlaug"></td>
          <td v-html="post.utkomasundlaug"></td>

          <td class="ker">Heitur Pottur</td>
          <td v-html="post.hitikaldurpottur"></td>
          <td v-html="post.malingkaldurpottur"></td>
          <td v-html="post.testkaldurpottur"></td>
          <td v-html="post.utkomakaldurpottur"></td>

          <td class="ker">Kaldur Pottur</td>
          <td v-html="post.hitiheiturpottur"></td>
          <td v-html="post.malingheiturpottur"></td>
          <td v-html="post.testheiturpottur"></td>
          <td v-html="post.utkomaheiturpottur"></td>

          <td>
           
           <ul uk-accordion uk-accordion="collapsible: true">
            <li>

               <button class="uk-accordion-title button is-primary is-small">
                Uppl
               </button>

              <div class="uk-accordion-content">
               {{ post.minnismidi }}
              </div>

            </li>
          </ul>

         </td>


        </tr>
      </tbody>
      <!--  <caption class="minnismidi" v-html="post.minnismidi"></caption>
    <caption class="klormagn"><span class="magn" uk-icon="icon: trash"></span><span>{{ post.klormagn }}<small>Lítrar</small> </span></caption> -->

    </table>

  </div><!-- .klorauka -->

</template>

<script>
import axios from "axios";
import strapi from "~/utils/Strapi";
import { mapMutations } from "vuex";

export default {
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    },
    avatar() {
      return this.$store.getters["auth/avatar"];
    }
  },

  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: []
    };
  },
  // wp reminders import
  async created() {
    axios
      .get(`http://localhost:1337/klormalingars`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {});
  }
};
</script>