<template lang="pug">
Section(title="Vuelidate Basic")
    template(slot='content')
        b-container
            b-row(align-v="center" align-h="center")
                b-col(lg="6" md="12")
                    b-form(@submit.stop.prevent="onSubmit")
                        b-form-group(id="example-input-group-1" label="Name" label-for="example-input-1")
                            b-form-input(id="example-input-1" name="example-input-1" v-model="$v.form.name.$model" @input="$v.form.name.$touch()" :state="validateState('name')")
                            //- b-form-invalid-feedback(v-if="$v.form.name.$error")
                            //-     | This is a required field and must be at least 3 characters.
                            b-form-invalid-feedback(v-if="$v.form.name.$dirty && !$v.form.name.required")
                                | Pole jest wymagane
                            b-form-invalid-feedback(v-if="$v.form.name.$dirty && !$v.form.name.minLength")
                                | Wstaw minimum 3 znaki
                        b-form-group(id="example-input-group-2" label="Food" label-for="example-input-2")
                            b-form-select(id="example-input-2" name="example-input-2" v-model="$v.form.food.$model" @change="$v.form.food.$touch()" :options="foods" :state="validateState('food')")
                            b-form-invalid-feedback(v-if="$v.form.food.$dirty && !$v.form.food.required")
                                | This is a required field.
                        b-form-group(id="example-input-group-3" label="Email" label-for="example-input-3")
                            b-form-input(id="example-input-3" name="example-input-3" v-model="$v.form.email.$model" @input="$v.form.email.$touch()" :state="validateState('email')")
                            b-form-invalid-feedback(v-if="$v.form.email.$dirty && !$v.form.email.required")
                                | Pole jest wymagane
                            b-form-invalid-feedback(v-if="$v.form.email.$dirty && !$v.form.email.email")
                                | Adres email jest niepoprawny
                        b-form-group(id="example-input-group-4" label="Password" label-for="example-input-4")
                            b-form-input(id="example-input-4" name="example-input-4" v-model="$v.form.password.$model" @input="$v.form.password.$touch()" :state="validateState('password')" type="password")
                            b-form-invalid-feedback(v-if="$v.form.password.$dirty && !$v.form.password.required")
                                | Pole jest wymagane
                            b-form-invalid-feedback(v-if="$v.form.password.$dirty && !$v.form.password.upCaseRule")
                                | Wymagana przynajmniej jedna duża litera.
                            b-form-invalid-feedback(v-if="$v.form.password.$dirty && !$v.form.password.lowCaseRule")
                                | Wymagana przynajmniej jedna mała litera.
                            b-form-invalid-feedback(v-if="$v.form.password.$dirty && !$v.form.password.specCharRule")
                                | Wymagany przynajmniej jeden znak specjalny.
                        b-button(type="submit" variant="primary") Submit
                        b-button(class="ml-2" @click="resetForm()") Reset
                        //- pre
                        //-     | {{ $v }}
</template>

<script>
import Section from "@components/common/Section";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

import {
    upCaseRule,
    lowCaseRule,
    specCharRule,
} from "@helpers/vuelidateValidators";

export default {
    components: {
        Section,
    },
    mixins: [validationMixin],
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
                email: null,
                password: null,
            },
        };
    },
    validations: {
        form: {
            food: {
                required,
            },
            name: {
                required,
                minLength: minLength(3),
            },
            email: {
                required,
                email,
            },
            password: {
                required,
                upCaseRule,
                lowCaseRule,
                specCharRule,
            },
        },
    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        resetForm() {
            this.form = {
                name: null,
                food: null,
            };

            this.$nextTick(() => {
                this.$v.$reset();
            });
        },
        onSubmit() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            alert("Form submitted!");
        },
    },
};
</script>
