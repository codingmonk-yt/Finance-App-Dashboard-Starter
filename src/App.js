// scroll bar
import 'simplebar/src/simplebar.css';

// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ----------------------------------------------------------------------

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import { MotionLazyContainer } from './components/animate';
import { ThemeSettings, SettingsProvider } from './components/settings';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
          <MotionLazyContainer>
            <ThemeProvider>
              <ThemeSettings>
                <StyledChart />
                <Router />
              </ThemeSettings>
            </ThemeProvider>
          </MotionLazyContainer>
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  );
}
