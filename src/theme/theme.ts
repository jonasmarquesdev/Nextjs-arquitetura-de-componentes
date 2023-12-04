import { typography } from './defaults/typography';

const theme = {
  typography,
};

export type Theme = typeof theme;
export type ThemeTypograpyVariants = keyof typeof typography.variants;

export default theme;
