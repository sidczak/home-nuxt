<template lang="pug">
Main
    template(slot='section')
        StartTools
        Section(noBody)
            template(slot='content')
                b-container
                    b-row.align-items-center
                        b-col(lg="6" md="12")
                            b-form(@submit.stop.prevent="onSubmit")
                                b-form-group(id="example-input-group-1" label="Name" label-for="example-input-1")
                                    //- b-form-input(id="example-input-1" name="example-input-1" v-model="form.name" v-validate="'required|min:3'" :state="validateState('example-input-1')" aria-describedby="input-1-live-feedback" data-vv-as="Name")
                                    b-form-input(id="example-input-1" name="example-input-1" v-model="form.name" v-validate="{ required: true, min: 3 }" :state="validateState('example-input-1')" aria-describedby="input-1-live-feedback" data-vv-as="Name")
                                    b-form-invalid-feedback(id="input-1-live-feedback") {{ veeErrors.first('example-input-1') }}
                                b-form-group(id="example-input-group-2" label="Food" label-for="example-input-2")
                                    b-form-select(id="example-input-2"
                                      name="example-input-2"
                                      v-model="form.food"
                                      v-validate="{ required: true }"
                                      :options="foods"
                                      :state="validateState('example-input-2')"
                                      aria-describedby="input-2-live-feedback"
                                      data-vv-as="Food")
                                b-button(type="submit" variant="primary") Submit
                                b-button(class="ml-2" @click="resetForm()") Reset
        Section(noBody)
            template(slot='content')
                b-container
                    b-row.align-items-center
                        b-col(lg="6" md="12")
                            p(v-text='$t("home.start")')



</template>
<script>
import Section from "@components/common/Section";
export default {
    components: {
        Section,
    },
    // head() {
    //     return {
    //         title: "HomeNuxt - Start",
    //         htmlAttrs: {
    //             class: `h-100 ${this.$colorMode.preference}-mode`,
    //         },
    //     };
    // },
    name: "Start",
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
        validateState(ref) {
            if (
                this.veeFields[ref] &&
                (this.veeFields[ref].dirty || this.veeFields[ref].validated)
            ) {
                return !this.veeErrors.has(ref);
            }
            return null;
        },
        resetForm() {
            this.form = {
                name: null,
                food: null,
            };

            this.$nextTick(() => {
                this.$validator.reset();
            });
        },
        onSubmit() {
            this.$validator.validateAll().then((result) => {
                if (!result) {
                    return;
                }

                alert("Form submitted!");
            });
        },
    },
};
</script>
