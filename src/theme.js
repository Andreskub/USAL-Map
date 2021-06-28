import { extendTheme } from "@chakra-ui/react";

export const COLORS = {
  // https://nipponcolors.com/
  headerbg: "#222d38",
  graphbg: "#f7f9fa",
  headerbgdark: "#333333",
  graphbgdark: "#212121",
  text: "black",
  textdark: "white",

  // https://flatuicolors.com/palette/de + https://themera.vercel.app/
  electivas: {
    50: "#DCC0F7",
    400: "#C597F1",
    500: "#AF6FEC",
  },
  aprobadas: {
    100: "#99EFC4",
    400: "#22DD7E",
    500: "#22DD7E",
    600: "#1BB165",
  },
  habilitadas: {
    50: "#FED7B8",
    400: "#FDA45E",
    500: "#FC8A30",
  },
  obligatorias: {
    50: "#BCE1FA",
    400: "#66B9F4",
    500: "#3CA6F1",
  },
  findecarrera: {
    50: "#FEB9BD",
    400: "#FC5F68",
    500: "#FB323D",
  },
  enfinal: {
    50: "#FFF0B8",
    400: "#FEDC5D",
    500: "#CBA001",
  },
  // https://color.adobe.com/create/color-wheel starting from #FF9999
  cursando: {
    500: "#eceef0",
  },
  futuro: {
    100: "#d9dbdd",
    200: "#cfd1d3",
    300: "#c6c7c9",
    400: "#bcbebf",
    500: "#b3b4b5",
    600: "#a9aaac",
    700: "#9fa1a2",
    800: "#969798",
    900: "#8c8d8e",
    1000: "#838485",
  },
  orientacion0: {
    50: "#D4D4B5",
    400: "#C3C397",
    500: "#A2A15D",
  },
  orientacion1: {
    50: "#FFE5E5",
    500: "#FF8A8A",
  },
  orientacion2: {
    50: "#FFF4E5",
    500: "#FFDEB0",
  },
  orientacion3: {
    50: "#FFE5FF",
    500: "#FF96FF",
  },
  orientacion4: {
    50: "#ECF9F9",
    500: "#C9EEED",
  },
  orientacion5: {
    50: "#E5FBFF",
    500: "#B8FFF4",
  },
  orientacion6: {
    50: "#EEFFE5",
    500: "#DCFFC9",
  },
  orientacion7: {
    50: "#E5FFFB",
    500: "#C9FFF7",
  },
};

const config = {
  initialColorMode: "system",
};

export const customTheme = extendTheme({
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...COLORS,
  },
  config,
});
