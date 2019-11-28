import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-links/register';
import '@storybook/addon-notes/register';
import 'storybook-addon-jsx/register';

if (process.env.NODE_ENV === 'development') {
  require('@storybook/addon-a11y/register');
}
