<template lang="pug">
    .event-item__action.d-flex.justify-content-end
        b-dropdown(text="Kebab Menu" class="m-md-2")
            b-dropdown-item(v-for="item in items" :key="item.name") {{item.name}}
        b-button(variant='primary' size='small') {{joinTranslatedKey}}
</template>

<script>
export default {
    components: {},
    props: {
        actionUrls: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            joinTranslatedKey: "join",
            items: [
                {
                    name: "details",
                    url: this.actionUrls.details,
                    icon: "default/event-item-details-14",
                    iconColor: "white",
                    type: "fill",
                },
                {
                    name: "edit",
                    url: this.actionUrls.edit,
                    icon: "default/event-item-edit-14",
                    iconColor: "white",
                    type: "fill",
                },
                {
                    name: "duplicate",
                    url: this.actionUrls.clone,
                    icon: "default/event-item-duplicate-14",
                    iconColor: "white",
                    type: "fill",
                },
                {
                    name: "statisticsAndMessages",
                    url: this.actionUrls.sessionStatisticsDetails,
                    icon: "default/event-item-statistics-messages-14",
                    iconColor: "white",
                    type: "fill",
                },
                {
                    name: "invite",
                    url: this.actionUrls.invite,
                    icon: "default/event-item-invite-14",
                    iconColor: "white",
                    type: "fill",
                },
                {
                    name: "delete",
                    url: this.actionUrls.delete,
                    icon: "default/event-item-delete-14",
                    iconColor: "error",
                    type: "fill",
                },
            ],
        };
    },
    computed: {
        computedItems() {
            return this.items.filter((item) => item.url);
        },
    },
};
</script>
