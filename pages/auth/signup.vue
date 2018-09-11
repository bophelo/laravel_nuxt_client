<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Register</h3>
                    <p class="subtitle has-text-grey">Please sign up to proceed.</p>
                    <div class="box">
                        <form @submit.prevent="submit">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" :class="{'is-danger' : errors.email}" type="email" placeholder="Your Email" autofocus="" v-model="form.email">
                                    <p class="help is-danger" v-if="errors.email">{{errors.email[0]}}</p>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" :class="{'is-danger' : errors.name}" type="text" placeholder="Your Name" v-model="form.name">
                                    <p class="help is-danger" v-if="errors.name">{{errors.name[0]}}</p>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" :class="{'is-danger' : errors.password}" type="password" placeholder="Your Password" v-model="form.password">
                                    <p class="help is-danger" v-if="errors.password">{{errors.password[0]}}</p>
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Sign Up</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        middleware: 'guest',
        data () {
            return {
                form: {
                    email: '',
                    name: '',
                    password: ''
                } 
            }
        },
        methods: {
            async submit () {
                await this.$axios.post('register', this.form)

                await this.$auth.login({
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })

                this.$router.push({
                    name: 'index'
                })
            } 
        }
    }
</script>

<style>
    .hero.is-success {
    background: #F2F6FA;
    }
    .hero .nav, .hero.is-success .nav {
    -webkit-box-shadow: none;
    box-shadow: none;
    }
    .box {
    margin-top: 5rem;
    }
    input {
    font-weight: 300;
    }
    p {
    font-weight: 700;
    }
    p.subtitle {
    padding-top: 1rem;
    }
</style>
