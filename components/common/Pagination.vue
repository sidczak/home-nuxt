<template lang="pug">
div
    //- div(v-for='(item, index) in computedItems' :key='item.componentSlug')
        span {{ (activePage - 1) * rowsPerPage + index + 1 }} {{item.componentSlug}} -> {{item.name}}

    template(v-for='(item, index) in computedItems')
        b-card.h-100.my-3.shadow-clouds.border-0(no-body bg-variant="clouds-concave-145" text-variant="dark" :key='item.componentSlug')
            .my-auto
                b-card-body
                    b-card-title.text-center.mb-0(title-tag="h3")
                        | {{checkMe(index)}} {{item.id}}<br/>
                        | {{ (activePage - 1) * rowsPerPage + index + 1 }} {{item.componentSlug}} -> {{item.name}}
    CmPagination(:currentPage='currentPage' :totalRows="items.length" :rowsPerPage="rowsPerPage" @input="onPaginationInput")
    | Showing {{ (activePage - 1) * rowsPerPage + 1 }} to {{ activePage * rowsPerPage }} of {{ items.length }} Entries

</template>

<script>
import CmPagination from "@components/clickmeeting/atoms/CmPagination";

const generateItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
        items.push({
            id: `${i + 1}`,
            name: `Item ${i + 1}`,
            componentSlug: `item${i + 1}`,
        });
    }
    return items;
};

export default {
    components: {
        CmPagination,
    },
    props: {
        currentPage: {
            type: Number,
            required: true,
        },
        // totalRows: {
        //     type: Number,
        //     required: true,
        // },
        rowsPerPage: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            items: generateItems(98),
            activePage: 0,
        };
    },
    mounted() {
        this.activePage = this.currentPage;
    },
    computed: {
        computedItems() {
            const start = (this.activePage - 1) * this.rowsPerPage;
            const end = this.activePage * this.rowsPerPage;
            return this.items.slice(start, end);
        },
    },
    methods: {
        onPaginationInput(value) {
            console.log(value);

            this.activePage = value;
            // this.localCurrentPage = Number(value);
            // this.setCurrentPage(value);
        },
        checkMe(index) {
            return (this.activePage - 1) * this.rowsPerPage + index + 1;
        },
    },
};
</script>

<style lang="scss" scoped>
.fade {
    &-enter-active,
    &-leave-active {
        transition: opacity 0.5s;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
</style>
