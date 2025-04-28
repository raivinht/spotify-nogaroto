import React from "react";
import { View, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import Texto from '../../components/Texto'

export default function Recomendados({ titulo, lista}) {
    return (
        <View style={estilos.container}>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            <FlatList
                data={lista}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={estilos.listaContainer}
                renderItem={({item}) => (
                    <View style={estilos.card}>
                      <TouchableOpacity>
                        <Image source={item.imagem} style={estilos.imagem} />
                      </TouchableOpacity>
                        <Texto style={estilos.cardTitulo}>{item.titulo}</Texto>
                        <Texto style={estilos.descricao}>{item.descricao}</Texto>
                    </View>
                )}
            />
        </View>
    );
}


const estilos = StyleSheet.create({
    container: {
      marginTop: 24,
    },
    titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#FFF',
      marginHorizontal: 16,
      marginBottom: 8,
    },
    
    listaContainer: {
      paddingLeft: 16,
      paddingRight: 32,
    },
    card: {
      width: 170,
      marginRight: 16,
    },
    imagem: {
      width: '100%',
      height: 170,
      borderRadius: 8,
      marginBottom: 8,
    },
    cardTitulo: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFF',
      marginBottom: 4,
    },
    descricao: {
      fontSize: 12,
      color: '#AAA',
    },
  });