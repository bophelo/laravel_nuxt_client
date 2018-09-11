<template>
    <nav class="navbar is-light">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item" :to="{ name: 'index' }">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </nuxt-link>
            <div class="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <div  class="navbar-menu">
            <div class="navbar-end">
                <template v-if="!authenticated">
                    <nuxt-link class="navbar-item" :to="{ name: 'auth-signup' }">
                        Sign-Up
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item">
                        Sign-In
                    </nuxt-link>
                </template>
                <template v-if="authenticated">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        {{ user.name }}
                        </a>
                        <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item">
                            Logout
                        </a>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </nav>
</template>