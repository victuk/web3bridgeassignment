import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './pages/contactus';
import Faqs from './pages/faqs';
import PrivacyAndCookiesPolicy from './pages/privacyandcookiespolicy';
import TermsOfUseAndContracting from './pages/termsofuseandcontracting';
import StroesInACity from './pages/storesinacity';
import 'alertifyjs/build/css/alertify.css';
import "animate.css/animate.min.css";
import JoinUsPage from './pages/joinuspage';
import VerifyEmail from './pages/verifyEmail';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/verify-email/:tokenId",
    element: <VerifyEmail />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/privacy-and-cookies-policy",
    element: <PrivacyAndCookiesPolicy />,
  },
  {
    path: "/terms-of-use-and-contracting",
    element: <TermsOfUseAndContracting />
  },
  {
    path: "/stores-in-a-city/:city",
    element: <StroesInACity />
  }
]);

// All `Portal`-related components need to have the the main app wrapper element as a container
// so that the are in the subtree under the element used in the `important` option of the Tailwind's config.
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
