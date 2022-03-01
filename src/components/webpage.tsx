/** @jsxRuntime automatic */
import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Shapes } from './shapes';
import { theme } from './theme';
import { Header } from './header';
import { Hero } from './hero';
import { ShapesShowcase } from './shapeshowcase';
import { Footer } from './footer';

export const WebPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <ShapesShowcase />
        <Footer />
      </ThemeProvider>
      <Shapes />
    </>
  );
};
