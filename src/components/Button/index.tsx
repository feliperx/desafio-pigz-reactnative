import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import theme from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: React.FC<SvgProps>;
};

export function Button({ title, icon: Icon, ...rest }: Props) {
  const { primary, highlight } = theme.colors;

  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[primary, highlight]}
      >
        {Icon && <Icon height={22} width={22}/>}
        <Text style={[styles.title, Icon && { marginLeft:8}]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
