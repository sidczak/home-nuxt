<template lang="pug">
    //- b-navbar(toggleable="lg" type="dark" variant="dark")
    b-navbar(toggleable="lg" v-bind="navbarColorMode")
        b-navbar-brand(:to="localePath('/')")
          | HomeNuxt
        b-navbar-toggle(target="nav-collapse")

        b-collapse(id="nav-collapse" is-nav)
            b-navbar-nav
                b-nav-item(:to="localePath('/')")
                    | Home
                b-nav-item(:to="localePath('about')")
                    | About
                b-nav-item(:to="localePath('pricing')")
                    | Pricing
            b-navbar-nav(class="ml-auto")
                //- b-nav-item-dropdown(text="Lang" right)
                //-     b-dropdown-item(v-for="(locale, index) in $i18n.locales" :key="index" :to="switchLocalePath(locale.code)")
                //-         | {{locale.name}}
                b-nav-item(v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)")
                    | {{ locale.name }}
</template>

<script>
export default {
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(
                (i) => i.code !== this.$i18n.locale
            );
        },
        navbarColorMode() {
            if (
                "light" === this.$colorMode.preference ||
                "clouds" === this.$colorMode.preference
            ) {
                return {
                    type: "light",
                    variant: this.$colorMode.preference,
                };
            }
            return {
                type: "dark",
                variant: this.$colorMode.preference,
            };
        },
    },
};
</script>
<style>
.navbar {
    transition: background-color 0.3s;
}
</style>
