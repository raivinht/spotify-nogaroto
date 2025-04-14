import React from "react";

import Logo from "./components/logo";
import { ScrollView, StyleSheet } from "react-native";
import Playlists from "./components/playlists";

export default function Page({topo}) {
    return <ScrollView style={estilos.container}>
        <Logo {...topo} />
    </ScrollView>
}

const estilos = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#121212',
    },
});