<template>
    <v-app id="app">
        <v-content class="">
            <div style="position:relative;">
                <div style="position:absolute; width: 500px; z-index: 1">
                    <nuxt />
                </div>
                <google-map-loader
                    :style="mapCss"
                    v-show="mapCss"
                    api-key="AIzaSyDoMFZ0zrmPhJ-IJGjpkr3vJsJvH8hXa1g"
                />
            </div>
        </v-content>
    </v-app>
</template>

<script>
import GoogleMapLoader from '../components/GoogleMapLoader'
export default {
    components: { GoogleMapLoader },
    data() {
        return {
            clipped: false,
            drawer: false
        }
    },
    computed: {
        mapCss() {
            if (process.client) {
                const width = window.innerWidth
                const height = window.innerHeight
                return {
                    width: width + 'px',
                    height: height + 'px'
                }
            } else {
                return null
            }
        }
    },
    created() {
        this.$vuetify.theme.light = true
    }
}
</script>
