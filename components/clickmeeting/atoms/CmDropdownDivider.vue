<template lang="pug">
    li(role='presentation')
        component.dropdown-divider(
            :is='tag'
            role='separator'
            aria-orientation='horizontal'
        )
            slot
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: "hr",
        },
    },
};
</script>
