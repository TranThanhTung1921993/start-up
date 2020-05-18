<template>
    <v-card light dark>
        <v-toolbar light dense>
            <v-app-bar-nav-icon class="hidden-sm-and-down" />
            <v-text-field
                v-model="userSearchValue"
                hide-details
                solo
                dense
                flat
                append-icon="mdi-magnify"
                placeholder="Input your address..."
                @input="getPredictions"
                @keyup.enter="onClickPrediction(predictions[0])"
                @click:append="onClickPrediction(predictions[0])"
            />
            <v-divider vertical inset />
            <v-btn icon color="primary">
                <v-icon>
                    {{ userSearchValue ? 'mdi-close' : 'mdi-crosshairs-gps' }}
                </v-icon>
            </v-btn>
        </v-toolbar>
        <v-list v-show="predictions.length" rounded light>
            <v-list-item-group>
                <v-list-item
                    v-for="(prediction, key) in predictions"
                    :key="key"
                    class="px-0"
                    @click="onClickPrediction(prediction)"
                >
                    <v-list-item-icon class="ml-2 pr-0">
                        <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="ml-0">
                        <v-list-item-title>
                            {{ prediction.description }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'SearchUserPlace',
    data() {
        return {
            userSearchValue: ''
        }
    },
    computed: mapState({
        predictions: (state) => state.map.predictions,
        userPlace: (state) => state.map.userPlace
    }),
    methods: {
        getPredictions(input) {
            this.$store.dispatch('map/getPredictions', input)
        },
        async onClickPrediction(prediction) {
            if (prediction && prediction.place_id) {
                this.$store.commit('map/SET_USER_PLACE', {
                    ...this.userPlace,
                    userPlaceId: prediction.place_id
                })
                await this.$store.commit('map/SET_PREDICTIONS', [])
                this.userSearchValue = this.userPlace.address
            }
        }
    }
}
</script>

<style scoped></style>
