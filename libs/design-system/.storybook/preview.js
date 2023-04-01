import 'react-loading-skeleton/dist/skeleton.css';
import mhwTheme from './mhwTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: mhwTheme,
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
};
