import {View,Text,StyleSheet,Dimensions,Image} from 'react-native'
import React,{useState,useEffect} from "react"
import axios from "axios"


export const Card = (props:any) =>{

    const [img,setImg] = useState("")
    const [types,setTypes] = useState([])

    useEffect(()=>{
        axios.get(props.poke.url).then((res)=>{
            setImg(res.data.sprites.front_default)
            setTypes(res.data.types)
        });
    },[])

    return(
        <View style={styles.card}>
            <Text style={styles.text}>{props.poke.name}</Text>
            <View style={styles.typesContrianer}>
                {types.map((type:any)=>
                    <Text style={styles.types}>{type.type.name}</Text>
                )}
            </View>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: img,
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        fontFamily: 'Roboto',
        backgroundColor:'#DB4035',
        borderRadius:5,
        margin:5,
        width:175,
        height:140,
    },
    typesContrianer:{
        flex: 1,
        flexDirection:'row',
        flexWrap: "wrap",
        justifyContent: "center"
    },
    types:{
        margin:5,
        color:'white',
    },
    tinyLogo: {
        marginLeft:20,
        width: 100,
        height: 100,
    },
    text:{
        marginLeft:20,
        color:'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
})