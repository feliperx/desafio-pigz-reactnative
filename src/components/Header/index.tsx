import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import ArrowBackSVG from "../../assets/arrow-back.svg"

type Props = {
  title: string;
};

export function Header({title} : Props) {

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={handleGoBack}>
        <ArrowBackSVG/>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
