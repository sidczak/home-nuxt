<template lang="pug">
    component.btn(
        :is='computedTag'
        :disabled='computedDisabled'
        :aria-disabled='ariaDisabled'
        :href='href'
        :class='[{ "rounded-pill": pill, "only-icon": iconOnly, "text-uppercase": uppercase, disabled }, computedVariant, computedSize]'
        :type='computedType'
        :role='computedRole'
        :tabindex='tabindex'
        :target='computedTarget'
        v-on='$listeners'
    )
        slot
            .d-flex.align-items-center(
                data-test-id='btn-content-wrapper'
                :class='{ invisible: isLoading }'
            )
                //- MainSvgIcon(
                //-     v-if='iconLeft'
                //-     :icon='iconLeft'
                //-     :color='iconLeftColor'
                //-     :colorMode='iconLeftColorMode'
                //-     :type='iconLeftType'
                //-     size='14'
                //- )
                span(
                    v-if='!iconOnly'
                    data-test-id='btn-content-text'
                    v-text='title'
                )
                //- MainSvgIcon(
                //-     v-if='iconRight'
                //-     :icon='iconRight'
                //-     :color='iconRightColor'
                //-     :colorMode='iconRightColorMode'
                //-     :type='iconRightType'
                //-     size='14'
                //- )
            //- MainSpinner(
            //-     v-if='isMainSpinnerLoaded'
            //-     v-show='isLoading'
            //-     :size='computedSpinnerSize'
            //-     :color='computedSpinnerColor'
            //-     centered
            //- )
</template>

<script>
import {
  typeAttributes,
  targetAttributes,
  svgAttributes,
  // eslint-disable-next-line comma-dangle
  buttonBsSizes,
} from "@helpers/componentsUtils";
// import { isButtonColorValid } from "@helpers/validators";
// import { SVG_SIZES } from "@helpers/MainSpinnerConfig";
import {
  colorsNames,
  colorValidator,
  // eslint-disable-next-line comma-dangle
  modeColorValidator,
} from "@helpers/exportedColors";

const SPINNER_SIZE = {
  lg: "small",
  md: "small",
  sm: "x-small",
};

const SPINNER_COLOR = {
  primary: "white",
  secondary: "white",
  dark: "white",
  white: "dark",
  error: "white",
  info: "white",
  "font-grey": "white",
};

export default {
  name: "CmButton",
  components: {
    // MainSpinner: () => import("@components/common/MainSpinner"),
    // MainSvgIcon: () => import("@components/common/MainSvgIcon"),
  },
  props: {
    tag: {
      type: String,
      default: "button",
    },
    title: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
      // validator: (v) => isButtonColorValid(v, colorsNames),
    },
    size: {
      type: String,
      default: "lg",
      validator: (value) => buttonBsSizes.includes(value) || null === value,
    },
    type: {
      type: String,
      default: "button",
      validator: (value) => typeAttributes.includes(value) || null === value,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: true,
    },
    uppercase: {
      type: Boolean,
      default: true,
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: "_self",
      validator: (value) => targetAttributes.includes(value),
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    spinnerSize: {
      type: String,
      default: null,
      validator: (value) =>
        Object.keys(SVG_SIZES).includes(value) || null === value,
    },
    spinnerColor: {
      type: String,
      default: null,
      validator: colorValidator,
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconLeftColor: {
      type: String,
      default: null,
      validator: colorValidator,
    },
    iconLeftColorMode: {
      type: String,
      default: null,
      validator: modeColorValidator,
    },
    iconLeftType: {
      type: String,
      default: "stroke",
      validator: (value) => svgAttributes.includes(value),
    },
    iconRight: {
      type: String,
      default: null,
    },
    iconRightColor: {
      type: String,
      default: null,
      validator: colorValidator,
    },
    iconRightColorMode: {
      type: String,
      default: null,
      validator: modeColorValidator,
    },
    iconRightType: {
      type: String,
      default: "stroke",
      validator: (value) => svgAttributes.includes(value),
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMainSpinnerLoaded: false,
    };
  },
  computed: {
    computedTag() {
      return this.href ? "a" : this.tag;
    },
    computedType() {
      return this.href ? null : this.type;
    },
    computedRole() {
      return this.href ? "button" : null;
    },
    modeVariant() {
      return `${this.$colorMode.preference}-mode-${this.color}`;
    },
    isModeVariant() {
      return colorsNames.includes(this.modeVariant);
    },
    computedVariant() {
      if (this.isModeVariant) {
        return `btn-${this.modeVariant}`;
      }
      return `btn-${this.color}`;
    },
    computedSize() {
      if (!this.size) {
        return;
      }
      return `btn-${this.size}`;
    },
    tabindex() {
      if (this.href && this.disabled) {
        return -1;
      }
      return this.href ? 0 : undefined;
    },
    computedDisabled() {
      return !this.href ? this.disabled : undefined;
    },
    ariaDisabled() {
      return this.href && this.disabled ? true : undefined;
    },
    computedTarget() {
      return this.href ? this.target : undefined;
    },
    computedSpinnerSize() {
      return this.spinnerSize ? this.spinnerSize : SPINNER_SIZE[this.size];
    },
    computedSpinnerColor() {
      return this.spinnerColor ? this.spinnerColor : SPINNER_COLOR[this.color];
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.isLoading) {
        this.isMainSpinnerLoaded = true;
        return;
      }
      const unwatch = this.$watch("isLoading", (nV) => {
        if (nV) {
          this.isMainSpinnerLoaded = true;
          unwatch();
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &-white {
    // color: $font-dark;
    color: black;
  }
  &-primary,
  &-secondary,
  &-dark,
  &-error,
  &-info {
    // color: $white;
    color: white;
  }
  &-primary {
    // @include overrideHover($cm-hover);
  }
  &-secondary {
    // @include overrideHover($gray-hover);
  }
  &-dark {
    // @include overrideHover($dark-hover);
  }
  &-white {
    // @include overrideHover($ash-lighter-1);
  }
  &-error {
    // @include overrideHover($error-hover);
  }
  &-info {
    // @include overrideHover($info-hover);
  }
  span {
    margin: 0 5px;
  }
  .fill {
    fill: #fff;
  }
  .stroke {
    stroke: #fff;
    stroke-width: 2px;
  }
  &-lg {
    height: 45px;
    padding: 0 18px;
    font-size: 0.75rem;
    &.only-icon {
      width: 45px;
    }
  }
  &-md {
    height: 30px;
    padding: 0 15px;
    &.only-icon {
      width: 30px;
    }
  }
  &-sm {
    height: 15px;
    padding: 0 8px;
    &.only-icon {
      width: 15px;
    }
  }
  &.only-icon {
    padding: 0;
  }
  &.btn-link {
    font-weight: 500;
    font-size: 14px;
    // color: $info;
    color: blue;
  }
  &.disabled,
  &:disabled {
    opacity: 0.3;
  }
}
</style>
