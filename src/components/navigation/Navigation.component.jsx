import { GlobalStyles } from "../../styles/global/Global.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/themes/themes.styles";
import Layout from "../layout/Layout.component";

import Header from "../header/Header.component";
import Footer from "../footer/Footer.component";
import Copyright from "../copyright/Copyright.component";

function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Header />
        <Footer />
        <Copyright />
      </Layout>
    </ThemeProvider>
  );
}

export default Navigation;
