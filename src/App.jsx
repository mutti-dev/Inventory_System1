import * as React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Import your components
import RootComponent from './components/RootComponent';
import Home from './components/bodyComponents/home/Home';
import Inventory from './components/bodyComponents/inventory/Inventory';
import Customer from './components/bodyComponents/customer/Customer';
import Revenue from './components/bodyComponents/revenue/Revenue';
import Growth from './components/bodyComponents/growth/Growth';
import Report from './components/bodyComponents/report/Report';
import Setting from './components/bodyComponents/Settings/Setting';
import Order from './components/bodyComponents/order/Order';
import SignIn from './sign-in/SignIn';

import SignUp from './sign-up/SignUp';


// Import your custom font (Inter)
import Inter from "../public/static/fonts/Inter.ttf";

// Define your theme
const theme = createTheme({
  spacing: 4,
  palette: {
    mode: 'light',
    primary: { main: '#573BFE' },
    secondary: { main: '#01C0F6' },
    error: { main: '#E03137' },
    text: { primary: '#202635', secondary: '#A0AEC0' },
  },
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('/static/fonts/Inter.ttf') format('truetype');
        }
      `,
    },
  },
});

// Define a layout component that includes the navbar/sidebar
const Layout = ({ children }) => (
  <div>
    <RootComponent /> {/* This includes your navbar and sidebar */}
    <main>{children}</main> {/* This is where your page content will go */}
  </div>
);

// Define your router with separate layout for SignIn page
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* This route uses the Layout component */}
      <Route path="/" element={<Layout />}>
        
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/settings" element={<Setting />} />
      </Route>

      {/* This route does not include the Layout (no navbar/sidebar) */}
      <Route index element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
