import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

import { Header } from "../../components/Header";
import { GainsDay } from "../../components/GainsDay";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { styles } from "./styles";
import QrCordeSVG from "../../assets/qrcode.svg"

export function Home() {
  return (
    <View style={styles.container}>
      <Header title="Visao Geral" />
      <KeyboardAvoidingView>
        <ScrollView>
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
                <View>
                  <Input title={"Numero de Identificacao"} keyboardType="numeric" />
                </View>
              </View>
                  <Button title={'Escanear QRcode'} icon={QrCordeSVG} />
            </Card>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
