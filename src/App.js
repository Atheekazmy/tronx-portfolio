import './App.css';
import { Routes } from './routes/routes';
import { CssBaseline } from '@material-ui/core';
import { CustomThemeProvider } from './themes';


function App() {
  return (
    <CustomThemeProvider>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Routes />
    </CustomThemeProvider>

  );
}

export default App;
