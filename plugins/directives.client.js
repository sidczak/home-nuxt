import { registerDirectives } from "@helpers/utils";
import Vue from "vue";

const context = require.context("@directives", false, /.js$/);

registerDirectives(Vue, context);
