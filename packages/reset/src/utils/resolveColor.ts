import { ThemeAttributes } from '@kata-kit/theme';

const resolveColor = (preferred: keyof ThemeAttributes) => (p: { theme: ThemeAttributes }) =>
  p.theme[preferred] || p.theme.textColor;

export default resolveColor;
