import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export function Card({ children, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      {children}
    </View>
  );
}
