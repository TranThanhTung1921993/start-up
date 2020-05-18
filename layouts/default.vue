<template>
    <v-app id="app">
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!--        <v-app-bar app clipped-left>-->
        <!--            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
        <!--            <v-toolbar-title>Application</v-toolbar-title>-->
        <!--        </v-app-bar>-->

        <v-content class="">
            <!--            <v-container class="fill-height" fluid>-->
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

            <!--            </v-container>-->
        </v-content>

        <!--        <v-footer app>-->
        <!--            <span>&copy; 2020</span>-->
        <!--        </v-footer>-->
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
    created() {
        this.$vuetify.theme.light = true
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
    }
}
</script>
