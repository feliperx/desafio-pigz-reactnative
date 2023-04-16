import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import LogoSVG from "../../assets/pigz-logotipo-branco.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <KeyboardAvoidingView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <LogoSVG />
            <Text style={styles.logoSubtitle}>Para entregadores</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Login</Text>
            <Input title={"Email ou Telefone"} />
            <Input title={"Senha"} isPassword />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <Button title={"Entrar"} />
          <View style={styles.register}>
            <Text style={styles.accompanyRegisterText}>Nao tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Crie agora!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerTitle}>
              <Text>Entrar com</Text>
              

            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
