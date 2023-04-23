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


export function NewDelivery() {

  const navigation = useNavigation();

  return (

        <View style={styles.container}>
          <Header title='Nova Entrega' />
        </View>

  );
}
