<template lang="pug">
  div
    | {{ $t('pages.about') }}
    b-container
      b-row
        b-col
          b-card(bg-variant="light" header="Light")
            b-card-text
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        b-col
          b-card(bg-variant="dark" header="Dark" text-variant="white")
            b-card-text
              | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</template>
