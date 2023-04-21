import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { GradientView } from "../GradientView";
import theme from "../../global/styles/theme";

export function GainsDay() {
  const [isVisible, setIsVisible] = useState(false);

  function getDay() {
    const date = new Date().toLocaleDateString();
    const day = date.split("/");
    return day[1] + "/" + day[0];
  }

  function handleVisible() {
    setIsVisible(!isVisible);
  }

  return (
    <GradientView>
      <View style={styles.container}>
        <View style={styles.contentRow}>
          <Text style={styles.title}>Ganhos do dia</Text>
          <Text style={styles.day}>{getDay()}</Text>
        </View>
        <View style={styles.contentRow}>
          <Text style={styles.dayCash}>{"R$ " + (isVisible ? "150" : " ---")}</Text>
          <TouchableOpacity onPress={handleVisible}>
            <Feather
              name={isVisible ? "eye-off" : "eye"}
              size={24}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </GradientView>
  );
}
