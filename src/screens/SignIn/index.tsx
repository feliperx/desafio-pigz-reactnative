import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { ButtonExternalService } from "../../components/ButtonExternalService";
import { BackGround } from "../../components/BackGround";

import { styles } from "./styles";
import LogoSVG from "../../assets/pigz-logotipo-branco.svg";
import GoogleSVG from "../../assets/logo-google.svg";


export function SignIn() {

  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Navigation');
  }

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
          <Button title={"Entrar"} onPress={handleSignIn}/>
          <View style={styles.register}>
            <Text style={styles.accompanyRegisterText}>Não tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Crie agora!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerTitle}>
              <Text style={styles.footerTitleText}>Entrar com</Text>
              <Divider />
            </View>
            <ButtonExternalService
              title={"Continuar com o Google"}
              icon={GoogleSVG}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
