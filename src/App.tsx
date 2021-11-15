import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Components/Display/Layout';
import GlobalStyles from './Styles/GlobalStyles';
import Light from './Styles/Themes/Dark';

const App: React.FC = () => {
  return(
    <ThemeProvider theme={Light}>
      <GlobalStyles/>
        <Layout/>
    </ThemeProvider>
  );
};

export default App;