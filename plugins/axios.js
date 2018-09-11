export default function ({ $axios, store }) {
    $axios.onError(error => {
        if (error.response.status === 422) {
            store.dispatch('validation/setErrors', error.response.data.errors)
        }
        //reject the promise so we can continue any issues with it
        return Promise.reject(error)
    })
    $axios.onRequest(() => {
        store.dispatch('validation/clearErrors')
    })
}