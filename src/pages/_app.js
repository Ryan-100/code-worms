import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/components/LV1/constant/globalStyle";
import { colors, font } from "@/components/LV1";
import Layout from "@/components/Layout";
import store from "@/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const theme = {
    borderRadius: 15,
    transition: ".3s ease",
  };

  return (
    <Provider store={store}>

    <ThemeProvider theme={colors}>
      <ThemeProvider theme={font}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ThemeProvider>
    </ThemeProvider>
    </Provider>
  );
}
