<template lang="pug">
b-container
    b-row
        b-col
          | {{ $t('pages.about') }}
    b-row
        b-col
            b-card(bg-variant="light" header="Light" text-variant="dark")
                b-card-text
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        b-col
            b-card(bg-variant="dark" header="Dark" text-variant="white")
                b-card-text
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>
