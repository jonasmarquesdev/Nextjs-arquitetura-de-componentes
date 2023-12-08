import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant
  variant?: Variant;
  size?: ButtonSize;
}
export default function Button({ 
  styleSheet, 
  children,
  fullWidth,
  colorVariant,
  size,
  variant
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        // [Size]
        ...buttonSize[size],
        // [FullWidth]
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: 'contained',
  size: 'md',
  colorVariant: 'primary'
}

Button.Base = ButtonBase;
