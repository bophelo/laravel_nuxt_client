export default function ({ store, redirect }) {
    if (store.getters['auth/authenticated']) {//check store, access getters
        return redirect('/dashboard')
    }
}