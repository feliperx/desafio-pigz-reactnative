import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";
import theme from "../../global/styles/theme";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: ReactNode;
};

export function GradientView({ children, ...rest }: Props) {
  const { primary, highlight } = theme.colors;

  return (
    <LinearGradient
      style={[styles.container]}
      colors={[primary, highlight]}
      {...rest}
    >
      {children}
    </LinearGradient>
  );
}
