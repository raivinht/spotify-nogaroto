import React from "react";

import Logo from "./components/logo";
import { ScrollView, StyleSheet } from "react-native";
import Playlists from "./components/playlist";

export default function Page({topo, playlists}) {
    return <ScrollView style={estilos.container}>
        <Logo {...topo} />
        <Playlists {...{playlists}} /> 
    </ScrollView>
}

const estilos = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#121212',
    },
});