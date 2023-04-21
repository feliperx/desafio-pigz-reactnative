import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <View style={styles.container}>
      <Header title="Visao Geral" />
      <View style={styles.content}>
        <Text>Home</Text>
      </View>
    </View>
  );
}
