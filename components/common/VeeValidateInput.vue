<template lang="pug">
div
    ValidationProvider(:name="label" :rules="validationRules" v-slot="validationContext")
        b-form-group(:label="label")
            b-form-input(v-model="value" :type="type" :state="getValidationState(validationContext)" aria-describedby=`${label}-feedback`)
            b-form-invalid-feedback(id=`${label}-feedback`) {{ validationContext.errors[0] }}
</template>
<script>
import { ValidationProvider, extend, localize } from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import customEn from "@locales/custom-en.json";
import * as rules from "vee-validate/dist/rules.umd";

Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

extend("upCase", (value) => {
    return /[A-Z]/.test(value);
});

extend("lowCase", (value) => {
    return /[a-z]/.test(value);
});

extend("specChar", (value) => {
    return /[!@#$%^&*()[\]{};':"\\|,.<>/?\d]/.test(value);
});

// localize("en", en);
localize("en", { ...en, ...customEn });

export default {
    components: {
        ValidationProvider,
    },
    props: {
        validationRules: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: null,
        },
        initialValue: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: "text",
        },
    },
    data() {
        return {
            value: this.initialValue,
        };
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
    },
};
</script>
