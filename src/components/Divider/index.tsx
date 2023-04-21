import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  color?: string;
};

export function Divider({color} : Props) {

  return (
    <View style={[styles.container, color && {borderColor: color}]}/>
  );
}
