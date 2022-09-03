import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React from "react";

export default function SignUp() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.signUp}>Entrar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  signUp: {
    fontSize: 18,
    backgroundColor: "yellowgreen",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
});
