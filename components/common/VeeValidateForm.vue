<template lang="pug">
Section(title="VeeValidate Form")
    template(slot='content')
        b-container
            b-row(align-v="center" align-h="center")
                b-col(lg="6" md="12")
                    ValidationObserver(ref="observer" v-slot="{ handleSubmit }")
                        b-form(@submit.stop.prevent="handleSubmit(onSubmit)")
                            VeeValidateInput(validationRules='required|min:2|max:4' label='Name' :initialValue="form.name")
                            VeeValidateInput(validationRules='required|email' label='Email' :initialValue="form.email" type="email")
                            VeeValidateInput(validationRules='required|min:8|max:32|upCase|lowCase|specChar' label='Password' :initialValue="form.password" type="password")
                            .mt-5
                                b-button(type="submit" variant="primary") Submit
                                b-button(class="ml-2" @click="resetForm()") Reset
</template>
<script>
import Section from "@components/common/Section";
import VeeValidateInput from "@components/common/VeeValidateInput";
import { ValidationObserver } from "vee-validate";

export default {
    components: {
        Section,
        ValidationObserver,
        VeeValidateInput,
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
            },
        };
    },
    methods: {
        resetForm() {
            this.form = {
                name: null,
                email: null,
                password: null,
            };

            this.$nextTick(() => {
                this.$refs.observer.reset();
            });
        },
        onSubmit() {
            alert("Form submitted!");
        },
    },
};
</script>
