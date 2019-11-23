<template>
    <section>

        <b-field grouped group-multiline>
            <div class="control">
                <b-switch v-model="showDetailIcon">Show detail icon</b-switch>
            </div>
        </b-field>

        <b-table
            :data="posts"
            ref="table"
            paginated
            per-page="5"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="id"
            @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.post.created_at}`)"
            :show-detail-icon="showDetailIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <template slot-scope="props" v-for="post in posts">
                <b-table-column field="id" label="Dagsetning" width="150" numeric>
                    <span class="cal" uk-icon="icon: calendar"></span><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
                </b-table-column>

                <b-table-column field="user.first_name" label="Starfsmaður" sortable>
                    <template v-if="showDetailIcon">
                        {{ username }}
                    </template>
                    <template v-else>
                        <a @click="toggle(props.row)">
                            {{ username }}
                        </a>
                    </template>
                </b-table-column>

                <b-table-column field="user.last_name" label="Last Name" sortable>
                    {{ post.hitisundlaug }}
                </b-table-column>

                <b-table-column field="date" label="Date" sortable centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Gender">
                    <span>
                        <b-icon pack="fas"
                            :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                        </b-icon>
                        {{ post.hitisundlaug }}
                    </span>
                </b-table-column>
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
                                <strong>{{ post.hitisundlaug }} {{ post.hitisundlaug }}</strong>
                                <small>@{{ post.hitisundlaug }}</small>
                                <small>31m</small>
                                <br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                        </div>
                    </div>
                </article>
            </template>
        </b-table>

    </section>
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
  },
  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],
      data: [],
      defaultOpenedDetails: [1],
      showDetailIcon: true

    }
  },
  // wp reminders import
   async created() {
    axios.get(`https://sundlaug.herokuapp.com/klormalingars`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {
    })
  },
}
</script>