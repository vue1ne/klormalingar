<template>

  <div class="data">

<!-- This is an anchor toggling the modal -->
<a class="uk-button uk-button-default" href="#valmoguleikar" uk-toggle>+Ný<span>Mæling</span></a>

<!-- This is the modal -->
<div id="valmoguleikar" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
    <valmoguleikar />
    <button class="uk-button uk-button-default uk-modal-close" type="button">Hætta við!</button>
    </div>
</div>

    <section>

      <b-table
      :data="posts" 
      ref="table" 
      paginated per-page="1" 
      :opened-detailed="defaultOpenedDetails" 
      detailed detail-key="id" 
      @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.detailed}`)" 
      :show-detail-icon="showDetailIcon" 
      aria-next-label="Næsta" 
      aria-previous-label="Fyrri" 
      aria-page-label="Page" 
      aria-current-label="Þessi Síða"
      >
        <template slot-scope="props" v-for="post in posts">
         
         <b-table-column field="dagsetning" label="Dagsetning" sortable centered>
            <span class="tag is-success">
              <span class="timi" width="12" uk-icon="icon: calendar"></span>{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
          </b-table-column>

          <b-table-column field="id" label="Starfsmaður" width="40" sortable>
            <span><small>{{ username }}</small> <img class="uk-border-circle" width="25" height="25" v-bind:src="avatar"></span>
          </b-table-column>
          
          <!-- SUNDLAUG -->
          <b-table-column field="detailed" label="Ker" class="ker" sortable>
            <template v-if="showDetailIcon">
              <small>Sundlaug</small>
            </template>
            <template v-else>
              <a @click="toggle(props.row)">
                <small>Sundlaug</small>
              </a>
            </template>
          </b-table-column>

          <b-table-column label="°C" sortable numeric>
            <span>
              <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
              </b-icon>
              <small>{{ post.hitisundlaug }}</small>
            </span>
          </b-table-column>

        <b-table-column field="id" label="Klórstöð" width="40" sortable>
            <small>{{ post.malingsundlaug }}</small>
        </b-table-column>

        <b-table-column field="id" label="Mæling" width="40" sortable>
            <small>{{ post.testsundlaug }}</small>
        </b-table-column>

       <b-table-column field="id" label="Leiðrétt" width="40" sortable>
            <small>{{ post.utkomasundlaug }}</small>
        </b-table-column>

         <!-- KALDUR POTTUR -->
          <b-table-column field="date" label="Ker" class="ker" sortable>
            <template v-if="showDetailIcon">
              <small>Kaldur Pottur</small>
            </template>
            <template v-else>
              <a @click="toggle(props.row)">
                <small>Kaldur Pottur</small>
              </a>
            </template>
          </b-table-column>

          <b-table-column label="°C">
            <span>
              <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
              </b-icon>
              <small>{{ post.hitikaldurpottur }}</small>
            </span>
          </b-table-column>

        <b-table-column field="id" label="Klórstöð" width="40" class="klorstod" sortable>
            <small>{{ post.malingkaldurpottur }}</small>
        </b-table-column>

        <b-table-column field="id" label="Mæling" width="40" sortable>
            <small>{{ post.testkaldurpottur }}</small>
        </b-table-column>

       <b-table-column field="id" label="Leiðrétt" width="40" sortable>
            <small>{{ post.utkomakaldurpottur }}</small>
        </b-table-column>

         <!-- HEITUR POTTUR -->
          <b-table-column field="date" label="Ker" class="ker" sortable>
            <template v-if="showDetailIcon">
              <small>Heitur Pottur</small>
            </template>
            <template v-else>
              <a @click="toggle(props.row)">
                <small>Heitur Pottur</small>
              </a>
            </template>
          </b-table-column>

          <b-table-column label="°C">
            <span>
              <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
              </b-icon>
              <small>{{ post.hitiheiturpottur }}</small>
            </span>
          </b-table-column>

        <b-table-column field="id" label="Klórstöð" width="40" class="klorstod" sortable>
            <small>{{ post.malingheiturpottur }}</small>
        </b-table-column>

        <b-table-column field="id" label="Mæling" width="40" sortable>
            <small>{{ post.testheiturpottur }}</small>
        </b-table-column>

       <b-table-column field="id" label="Leiðrétt" width="40" sortable>
            <small>{{ post.utkomaheiturpottur }}</small>
        </b-table-column>

 <!-- MODAL -->
          <b-table-column class="auka">
        <button class="button is-primary is-small"
            @click="isCardModalActive = true">
            Athugasemd
        </button>

        <b-modal :active.sync="isImageModalActive">
            <p class="image is-4by3">
                <img src="/static/img/placeholder-1280x960.png">
            </p>
        </b-modal>

        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="/static/img/placeholder-1280x960.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="/static/img/placeholder-1280x960.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{ username }}</p>
                            <p class="subtitle is-6">@Sundlaug</p>
                        </div>
                    </div>

                    <div class="content">
                        {{ post.minnismidi }}
                        <a>#css</a> <a>#responsive</a>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div>
            </div>
        </b-modal>
          </b-table-column>
          <!-- MODAL Ends -->
        </template>

        <template slot="detail" slot-scope="props" v-for="post in posts">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="/static/img/placeholder-128x128.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong><img class="uk-border-circle" width="40" height="40" v-bind:src="avatar">{{ username }}</strong>
                  <small>@Sundlaug</small>
                  <small><span class="timilitill" width="11" uk-icon="icon: clock"></span>{{ post.created_at | moment("H:mm") }}</small>
                  <br>
                  {{ post.minnismidi }}
                </p>
              </div>
            </div>
          </article>
        </template>
      </b-table>

    </section>

  </div><!-- .data -->

</template>

<script>
import axios from "axios";
import strapi from "~/utils/Strapi";
import { mapMutations } from "vuex";
import valmoguleikar from './index'

export default {

 components: {
    valmoguleikar
 },

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
      // table
      posts: [],
      defaultOpenedDetails: [1],
      showDetailIcon: true,
      // modal
      isImageModalActive: false,
      isCardModalActive: false,
      defaultSortDirection: 'asc',

       data: [
                    {
                        name: 'Sundlaug',
                        sold: 'Dagsetning',
                        available: 301,
                        items: [
                            {
                                name: 'Monopoly',
                                sold: 57,
                                available: 100
                            },
                            {
                                name: 'Monopoly',
                                sold: 57,
                                available: 100
                            },
                        ]
                    },
                    {
                        name: 'Kaldur pottur',
                        sold: 88,
                        available: 167,
                        items: [
                            {
                                name: 'World Map',
                                sold: 31,
                                available: 38
                            },
                            {
                                name: 'Monopoly',
                                sold: 57,
                                available: 100
                            },
                        ]
                    },
                    {
                        name: 'Heitur Pottur',
                        sold: 434,
                        available: 721,
                        items: [
                            {
                                name: 'Hamlet',
                                sold: 101,
                                available: 187
                            },
                            {
                                name: 'Hamlet',
                                sold: 101,
                                available: 187
                            },
                        ]
                    }
                ],
            }

  },
  // wp reminders import
  async created() {
    axios
      .get(`http://localhost:1337/klormalingars`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {});
  },

  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    }
  }
};
</script>