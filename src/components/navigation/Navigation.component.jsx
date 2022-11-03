import { GlobalStyles } from "../../styles/global/Global.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/themes/themes.styles";
import Layout from "../layout/Layout.component";

import Header from "../header/Header.component";

function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  );
}

export default Navigation;
