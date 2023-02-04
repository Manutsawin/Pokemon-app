import React,{useState,useEffect} from "react"
import {View,Text,StyleSheet,Dimensions,Image,ScrollView} from 'react-native'
import { Card } from '../components/home/card'
import axios from "axios"

const url = "https://pokeapi.co/api/v2/pokemon?limit=20"

export const HomeScreen = () =>{

    const [pokeList,setPokeList] = useState([])

    useEffect(()=>{
        axios.get(url).then((res)=>{
            setPokeList(res.data.results)
        });
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Text style={styles.headText}>Pokedex</Text>
            </View>
            <View style={styles.body}>
                <ScrollView 
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.containerCard}>
                        {pokeList.map((poke:any)=>
                           <Card poke={poke} />
                        )}
                        
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footText}>select your pokemon</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    navigation:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    headText:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    body:{
        
        flex:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    scrollView: {
        flex:10,
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    containerCard: {
        backgroundColor: "white",
        flex: 1,
        flexDirection:'row',
        flexWrap: "wrap",
        justifyContent: "center"
      },
    footer:{
        flex:1,
        backgroundColor:'cyan',
        borderTopLeftRadius:20,
        borderTopEndRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    footText:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
})