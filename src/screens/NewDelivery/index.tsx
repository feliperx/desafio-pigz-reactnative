import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import theme from "../../global/styles/theme";
import { Delivery } from "../../components/Delivery";

export function NewDelivery() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title="Nova Entrega" />
      <View style={styles.content}>
        <View style={styles.timeAndIdDelivery}>
          <View style={styles.timeOrId}>
            <Text style={styles.title}>Tempo Estimado</Text>
            <Text style={styles.timeOrIdValues}>30 Min</Text>
          </View>
          <View style={styles.timeOrId}>
            <Text style={styles.title}>Numero de ID</Text>
            <Text style={styles.timeOrIdValues}>#6789</Text>
          </View>
        </View>
        <Divider color={theme.colors.border} />
        <View style={styles.deliveryPrice}>
          <Text style={styles.title}>Valor da Entrega</Text>
          <Text style={styles.price}>R$ 13,75</Text>
        </View>
        <Delivery title={"Entrega"} distance="8km" />
      </View>
    </View>
  );
}
