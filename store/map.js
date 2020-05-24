import MapServices from '../services/MapServices'

export const state = () => ({
    google: null,
    map: null,
    autocompleteService: null,
    predictions: [],
    userPlace: {
        userPlaceId: '',
        userLocation: '',
        address: ''
    }
})

export const mutations = {
    SET_GOOGLE(state, google) {
        state.google = google
    },
    SET_PREDICTIONS(state, predictions) {
        state.predictions = predictions
    },
    SET_USER_PLACE(state, userPlace) {
        state.userPlace = userPlace
    }
}

export const actions = {
    async getGoogle({ commit }) {
        const google = await MapServices.getGoogle()
        commit('SET_GOOGLE', google)
    },
    getPredictions({ commit, state }, input) {
        if (input.length) {
            const service = new state.google.maps.places.AutocompleteService()
            service.getQueryPredictions({ input }, (predictions, status) => {
                if (
                    status === state.google.maps.places.PlacesServiceStatus.OK
                ) {
                    commit('SET_PREDICTIONS', predictions)
                }
            })
        } else {
            commit('SET_PREDICTIONS', [])
        }
    },
    getUserLocationDetail({ commit, state }, map) {
        const service = new state.google.maps.places.PlacesService(map)
        service.getDetails(
            { placeId: state.userPlace.userPlaceId },
            (result, status) => {
                console.log(result)
                console.log(result.formatted_address)
                commit('SET_USER_PLACE', {
                    ...state.userPlace,
                    userLocation: result.geometry.location,
                    address: result.formatted_address
                })
            }
        )
    }
}
