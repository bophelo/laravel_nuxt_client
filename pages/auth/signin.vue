<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Sign In</h3>
                    <p class="subtitle has-text-grey">Please sign in to proceed.</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/128x128">
                        </figure>
                        <form @submit.prevent="submit">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" :class="{'is-danger' : errors.email}" type="email" placeholder="Your Email" autofocus="" v-model="form.email">
                                    <p class="help is-danger" v-if="errors.email">{{errors.email[0]}}</p>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" :class="{'is-danger' : errors.password}" type="password" placeholder="Your Password" v-model="form.password">
                                    <p class="help is-danger" v-if="errors.password">{{errors.password[0]}}</p>
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                <input type="checkbox">
                                Remember me
                                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Sign In</button>
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
                    password: ''
                } 
            }
        },
        methods: {
            async submit () {
                await this.$auth.login({
                    data: this.form
                })

                this.$router.push({
                    path: this.$route.query.redirect || '/'
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
    .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
    }
    .avatar img {
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
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
