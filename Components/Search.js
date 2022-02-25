import React from "react";
import{View, TextInput, Button, Alert, Text, Image, StyleSheet, FlatList, ActivityIndicator} from "react-native";
import films from "../Helpers/filmsData";
import FilmItem from "./FilmItem";
import {getFilms} from "../API/TMBDApi"

export default class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            films: [], 
            searchedText: "",
            isLoading: false,
        };
    }
    _loadFilms(){
        this.setState({isLoading:true});
        if (this.state.searchedText.length > 0) {
            getFilms(this.state.searchedText).then(data => 
                this.setState({
                    films: data.results,
                    isLoading: false,
                })
            );
            console.log(this.state)
        }
        console.log(this.state);
    }
    _displayisLoading(){
        if(this.state.isLoading){
            return(
                <View style={styles.loading}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }
    _searchTextInputChanged(text){
        this.setState({searchedText: text});
    }
    _displayFilmDetail = (idFilm)=>{
        console.log(idFilm);
        this.props.navigation.navigate('Detail', { idFilm: idFilm })
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput onSubmitEditing={()=> this._loadFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} placeholder="Titre du film" style={styles.txtinput}/>
                <Button title="chercher" color="gold" onPress={()=>this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} details={this._displayFilmDetail}/>}
                />
                {this._displayisLoading()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:"black",
    },
    txtinput:{
        marginTop:20,
        borderWidth:1,
        paddingLeft:5,
        height:50,
        marginBottom:20,
        backgroundColor: "white",
        color: "black",
    },
    loading: {
        position: "absolute",
        top:100,
        bottom:0,
        right:0,
        left:0,
        alignItems: "center",
        justifyContent: "center",
        color:"white",
    }
});