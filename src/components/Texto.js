import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style, bold = false }) {
    const estilo = bold ? estilos.textoBold : estilos.textoRegular;

  return <Text style={[estilo, style]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "LatoNormal",
    fontWeight: "normal",
  },
  textoBold: {
    fontFamily: 'LatoBold',
    fontWeight: 'normal',
  },
});