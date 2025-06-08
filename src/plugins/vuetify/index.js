import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import {
  VBtn,
  VTextField,
  VSelect,
  VCard,
  VLabel,
  VDivider,
} from "vuetify/components";

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      cspNonce: "dQw4w9WgXcQ",
      dark: {
        colors: {
          background: "#0F172A",
          surface: "#1E293B",
          primary: "#3B82F6",
          secondary: "#64748B",
          error: "#EF4444",
          info: "#60A5FA",
          success: "#34D399",
          warning: "#FBBF24",
          foreground: "#F8FAFC",
          muted: "#94A3B8",
          accent: "#334155",
          border: "#475569",
        },
        variables: {
          "border-white": "#57480F",
        },
      },
    },
  },
  aliases: {
    VBtnOutlined: VBtn,
    VCardContent: VCard,
    VLabelPrimary: VLabel,
  },
  defaults: {
    VLabelPrimary: {
      class: "text-caption mb-2",
    },
    VBtn: {
      ripple: false,
      size: "large",
      elevation: 0,
      density: "compact",
    },
    VCardContent: {
      elevation: 0,
      rounded: "xl",
      border: "sm",
      class: "pa-5 mb-5 mt-5",
    },
    VTextField: {
      variant: "outlined",
      density: "compact",
      elevation: "0",
      flat: true,
      rounded: "lg",
    },
    VBtn: {
      variant: "flat",
      ripple: false,
      color: "primary",
      elevation: 0,
      class: "text-subtitle-1",
      rounded: "lg",
    },
    VBtnOutlined: {
      variant: "outlined",
      ripple: false,
      elevation: 0,
      class: "text-subtitle-1",
      rounded: "lg",
    },
  },
});
