<template>
    <nav class="navbar is-light">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
            <div class="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <div  class="navbar-menu">
            <div class="navbar-end">
            <a class="navbar-item">
                Sign-Up
            </a>
            <nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item">
                Sign-In
            </nuxt-link>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                Mpilo Makae
                </a>
                <div class="navbar-dropdown is-boxed">
                <a class="navbar-item">
                    Logout
                </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>