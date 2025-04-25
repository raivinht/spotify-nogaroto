import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Logo from "./components/logo";
import Playlists from "./components/grade";
import Recomendados from "./components/scrollRight";

export default function Page({topo, playlists, recommended, podcasts}) {
    return <ScrollView style={estilos.container}>
        <Logo {...topo} />
        <Playlists {...{playlists}} /> 
        <Recomendados {...recommended} />
        <Recomendados {...podcasts} />
    </ScrollView>
}

const estilos = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#121212',
    },
});