<template>
    <div ref="googleMap" class="google-map">
        <template v-if="Boolean(this.google) && Boolean(this.map)">
            <slot :google="google" :map="map" />
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'GoogleMapLoader',
    props: {
        apiKey: { type: String, required: true }
    },

    data() {
        return {
            map: null,
            userMarker: null
        }
    },
    computed: mapState({
        google: (state) => state.map.google,
        userPlace: (state) => state.map.userPlace
    }),
    watch: {
        userPlace(val, oldVal) {
            if (val.userPlaceId !== oldVal.userPlaceId) {
                this.$store.dispatch('map/getUserLocationDetail', this.map)
            } else if (val.userLocation !== oldVal.userLocation) {
                // eslint-disable-next-line no-new
                if (this.userMarker) {
                    this.userMarker.setMap(null)
                }
                const newUserMarker = new this.google.maps.Marker({
                    place: {
                        placeId: this.userPlace.userPlaceId,
                        location: this.userPlace.userLocation
                    }
                })
                newUserMarker.setMap(this.map)
                this.userMarker = newUserMarker
                this.map.panTo(this.userPlace.userLocation)
                this.map.setZoom(18)
            }
        }
    },
    async mounted() {
        await this.$store.dispatch('map/getGoogle')
        await this.initializeMap()
    },
    methods: {
        initializeMap() {
            const mapContainer = this.$refs.googleMap
            // this.$store.dispatch('map/renderMap', mapContainer)
            this.map = new this.google.maps.Map(mapContainer, {
                center: { lat: 21.0304108, lng: 105.8461673 },
                zoom: 12,
                mapTypeControl: false
            })
        }
    }
}
</script>

<style scoped>
.google-map {
    width: 100%;
    height: 100%;
}
</style>
