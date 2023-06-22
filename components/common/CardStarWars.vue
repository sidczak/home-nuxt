<template>
    <div>
        {{ error }}
        <input v-model="inputValue" @input="validateInput" />
        <p v-if="error" class="error-message">
            Wartość powinna być między 0 a 350!
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: "",
            error: false,
        };
    },
    methods: {
        validateInput() {
            const value = Number(this.inputValue);
            this.error = isNaN(value) || value <= 0 || value > 350;
        },
    },
};
</script>

<style>
.error-message {
    color: red;
}
</style>
