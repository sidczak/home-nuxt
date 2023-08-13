<template lang="pug">
Section(title="VeeValidate Basic")
    template(slot='content')
        b-container
            b-row(align-v="center" align-h="center")
                b-col(lg="6" md="12")
                    //- ValidationProvider(rules="required" v-slot="{ errors }")
                    //-     input(v-model="value" name="myinput" type="text")
                    //-     span {{ errors[0] }}
                    ValidationObserver(ref="observer" v-slot="{ handleSubmit }")
                        b-form(@submit.stop.prevent="handleSubmit(onSubmit)")
                            ValidationProvider(name="Name" :rules="{ required: true, min: 3 }" v-slot="validationContext")
                                b-form-group(id="example-input-group-1" label="Name" label-for="example-input-1")
                                    b-form-input(id="example-input-1" name="example-input-1" v-model="form.name" :state="getValidationState(validationContext)" aria-describedby="input-1-live-feedback")
                                    b-form-invalid-feedback(id="input-1-live-feedback") {{ validationContext.errors[0] }}
                            ValidationProvider(name="Food" :rules="{ required: true }" v-slot="validationContext")
                                b-form-group(id="example-input-group-2" label="Food" label-for="example-input-2")
                                b-form-select(id="example-input-2" name="example-input-2" v-model="form.food" :options="foods" :state="getValidationState(validationContext)" aria-describedby="input-2-live-feedback")
                                b-form-invalid-feedback(id="input-2-live-feedback") {{ validationContext.errors[0] }}
                            .mt-5
                                b-button(type="submit" variant="primary") Submit
                                b-button(class="ml-2" @click="resetForm()") Reset
</template>
<script>
import Section from "@components/common/Section";
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize,
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
// import { required, min } from "vee-validate/dist/rules.umd";
// extend("required", {
//     ...required,
//     message: "This field is required",
// });
import * as rules from "vee-validate/dist/rules.umd";

// const rules = { required, min };
Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

localize("en", en);

export default {
    components: {
        Section,
        ValidationObserver,
        ValidationProvider,
    },
    data() {
        return {
            foods: [
                { value: null, text: "Choose..." },
                { value: "apple", text: "Apple" },
                { value: "orange", text: "Orange" },
            ],
            form: {
                name: null,
                food: null,
            },
        };
    },
    methods: {
        getValidationState({ dirty, validated, valid = null }) {
            return dirty || validated ? valid : null;
        },
        resetForm() {
            this.form = {
                name: null,
                food: null,
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
