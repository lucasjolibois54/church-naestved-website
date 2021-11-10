// ./gatsby-browser.js
import './src/styles/global.css';
import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';

export const wrapPageElement = ({ element }) => (
  <AnimateSharedLayout>
    {element}
  </AnimateSharedLayout>
);