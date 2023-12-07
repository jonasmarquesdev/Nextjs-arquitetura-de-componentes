import React from "react";
import { ThemeTypograpyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  variant?: ThemeTypograpyVariants;
  tag?: 'a' | 'p' | 'li' | 'h1' | 'h2' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  ref?: any;
}
const Text = React.forwardRef<unknown, any>(({
  tag,
  styleSheet, 
  variant,
  ...props
}: TextProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent 
      as={tag}
      styleSheet={{ 
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      ref={ref}
      {...props} 
    />
  );
})

export default Text;

Text.defaultProps = {
  tag: 'p',
  variant: 'body2',
};
