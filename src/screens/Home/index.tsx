import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { GainsDay } from "../../components/GainsDay";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonShort } from "../../components/ButtonShort";
import QrCordeSVG from "../../assets/qrcode.svg";

import { styles } from "./styles";


export function Home() {

  const navigation = useNavigation();

  function handleOkButton() {
    navigation.navigate('NewDelivery');
  }

  return (
    <View style={styles.container}>
      <Header title="Visão Geral" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <GainsDay />
            <Card>
              <View style={styles.deliveryResumeCard}>
                <Text style={styles.titleBox}>Resumo das Entregas</Text>
                <View style={styles.deliveryInformations}>
                  <View style={styles.info}>
                    <Text style={styles.infoTitle}>Aceitas</Text>
                    <Text style={styles.infoData}>15</Text>
                  </View>
                  <View style={styles.info}>
                    <Text style={styles.infoTitle}>Rejeitadas</Text>
                    <Text style={styles.infoData}>5</Text>
                  </View>
                  <View style={styles.info}>
                    <Text style={styles.infoTitle}>Total</Text>
                    <Text style={styles.infoData}>20</Text>
                  </View>
                </View>
              </View>
            </Card>
            <Card>
              <View style={styles.newDeliveryCard}>
                <Text style={styles.titleBox}>Iniciar Nova Entrega</Text>
                <View style={styles.newDeliveryCardContent}>
                  <Input
                    title={"Número de Identificação"}
                    keyboardType="numeric"
                  />
                  <ButtonShort title="OK" onPress={handleOkButton}/>
                </View>
                <Button
                  style={{ marginTop: 18 }}
                  title={"Escanear QRcode"}
                  icon={QrCordeSVG}
                />
              </View>
            </Card>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
