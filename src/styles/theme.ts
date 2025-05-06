import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

export default extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    brand: {
      "900": "#1a365d",
      "800": "#153e75",
      "700": "#2a69ac",
      "600": "#3182ce",
      "500": "#4299e1",
      "400": "#63b3ed",
      "300": "#90cdf4",
      "200": "#bee3f8",
      "100": "#ebf8ff",
    },
    // Custom colors for light/dark mode
    light: {
      text: "#2D3748", // Dark text for light mode
      subtext: "#4A5568", // Subtitle color for light mode
      background: "#FFFFFF",
      accent: "#3182CE", // Clearer blue for light mode
      muted: "#718096",
      border: "#E2E8F0",
    },
    dark: {
      text: "#F7FAFC", // Bright text for dark mode
      subtext: "#E2E8F0", // Lighter subtitle for dark mode
      background: "#1A202C",
      accent: "#63B3ED", // Brighter blue for dark mode
      muted: "#A0AEC0",
      border: "#2D3748",
    },
  },
  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
  components: {
    Tag: {
      variants: {
        skill: {
          bg: "rgba(66, 153, 225, 0.15)",
          color: "brand.400",
          fontWeight: "medium",
          _hover: {
            bg: "rgba(66, 153, 225, 0.25)",
            transform: "translateY(-2px)",
            boxShadow: "md",
          },
          transition: "all 0.2s ease-in-out",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        letterSpacing: "-0.03em",
        lineHeight: "1.2",
      },
      sizes: {
        "4xl": {
          fontSize: ["4xl", "5xl", "6xl"],
          lineHeight: ["1.2", "1.1"],
          fontWeight: "800",
          letterSpacing: "-0.04em",
        },
        "3xl": {
          fontSize: ["3xl", "4xl", "5xl"],
          lineHeight: ["1.3", "1.2"],
          fontWeight: "700",
          letterSpacing: "-0.03em",
        },
        "2xl": {
          fontSize: ["2xl", "3xl", "4xl"],
          fontWeight: "700",
          letterSpacing: "-0.02em",
        },
        xl: {
          fontSize: ["xl", "2xl", "3xl"],
          fontWeight: "600",
        },
        lg: {
          fontSize: ["lg", "xl", "2xl"],
          fontWeight: "600",
        },
        md: {
          fontSize: ["md", "lg", "xl"],
          fontWeight: "600",
        },
      },
      variants: {
        section: (props) => ({
          fontSize: ["xl", "2xl"],
          fontWeight: "700",
          letterSpacing: "-0.02em",
          position: "relative",
          bgGradient:
            props.colorMode === "dark"
              ? "linear(to-r, blue.400, purple.400)"
              : "linear(to-r, blue.600, purple.600)",
          bgClip: "text",
          textTransform: "uppercase",
          display: "inline-block",
          _after: {
            content: '""',
            display: "block",
            width: "100%",
            height: "3px",
            mt: 2,
            bgGradient:
              props.colorMode === "dark"
                ? "linear(to-r, blue.400, purple.400)"
                : "linear(to-r, blue.500, purple.500)",
            borderRadius: "full",
          },
        }),
      },
    },
    Text: {
      variants: {
        lead: {
          fontSize: ["lg", "xl"],
          fontWeight: "400",
          lineHeight: "1.5",
          color: "gray.200",
        },
        muted: {
          fontSize: "sm",
          color: "gray.400",
        },
      },
    },
  },
  styles: {
    global: ({ colorMode }: StyleFunctionProps) => ({
      body: {
        bg: colorMode === "dark" ? "gray.900" : "white",
        color: colorMode === "dark" ? "gray.50" : "gray.900",
        lineHeight: 1.6,
      },
      "::selection": {
        backgroundColor: "brand.500",
        color: "white",
      },
      "h1, h2, h3, h4, h5, h6": {
        marginBottom: "0.5em",
      },
    }),
  },
} as ThemeConfig);
