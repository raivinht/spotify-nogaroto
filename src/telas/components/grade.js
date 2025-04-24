import React from "react";
import { FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import Texto from "../../components/Texto";

export default function Playlists({ playlists }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={estilos.item}>
      <Image source={item.imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{item.nome}</Texto>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={playlists}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={estilos.linha}
      contentContainerStyle={estilos.container}
    />
  );
}

const estilos = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  linha: {
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 8,
  },
  nome: {
    color: '#FFF',
    flexShrink: 1,
  },
});
