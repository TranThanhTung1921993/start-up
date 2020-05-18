import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
    getGoogle() {
        return GoogleMapsApiLoader({
            libraries: ['places'],
            apiKey: process.env.MAP_API_KEY
        })
    }
}
