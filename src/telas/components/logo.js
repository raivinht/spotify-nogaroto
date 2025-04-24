import React from "react";
import { useState } from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";

import Texto from "../../components/Texto";
import login from "../../../assets/login.png"



export default function Logo({ t1, t2, t3 }) {
    const [Botao, BotaoAtivo] = useState("All");

    return <>
     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={estilos.container}>
      <Image source={login} style={estilos.avatar} />

      <TouchableOpacity  style={[ estilos.button, Botao === "All" && estilos.active ]} onPress={() => BotaoAtivo("All")}>
        <Texto style={[estilos.buttonText, Botao === "All" && estilos.activeText]}> { t1 } </Texto>
      </TouchableOpacity>

      <TouchableOpacity style={[ estilos.button, Botao === "Music" && estilos.active ]} onPress={() => BotaoAtivo("Music")}>
        <Texto style={[estilos.buttonText, Botao === "Music" && estilos.activeText]}> { t2 } </Texto>
      </TouchableOpacity>

      <TouchableOpacity style={[ estilos.button, Botao === "Podcasts" && estilos.active ]} onPress={() => BotaoAtivo("Podcasts")}>
        <Texto style={[estilos.buttonText, Botao === "Podcasts" && estilos.activeText]}> { t3 } </Texto>
      </TouchableOpacity>
    </ScrollView>
    </>
}

const estilos=StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
      },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: '#121212'
    },
    button: {
        backgroundColor: '#2a2a2a',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 8,
      },
      buttonText: {
        color: '#fff',
        fontSize: 14,
      },
      active: {
        backgroundColor: '#1db954', // verde Spotify
      },
      activeText: {
        color: 'black',
        fontWeight: 'bold',
      },
})