import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import { styles } from "./styles";
import LogoSVG from "../../assets/pigz-logotipo-branco.svg";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logo}>
          <LogoSVG />
          <Text style={styles.logoSubtitle}>Para entregadores</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <Input title={"Email ou Telefone"} />
          <Input title={"Senha"} isPassword />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
