import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import EtiquetaNivel from "./EtiquetaNivel";

export default function Card({ urlImagen, onPress, ancho }) {
    return (
        <Pressable
            onPress={onPress}
        >
            <Image source={{ uri: 'La url de la imagen' }} style={} resizeMode="cover" />

        </Pressable>
    )
}