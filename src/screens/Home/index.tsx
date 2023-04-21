import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { GainsDay } from "../../components/GainsDay";

export function Home() {
  return (
    <View style={styles.container}>
      <Header title="Visao Geral" />
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.content}>
            <GainsDay/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
