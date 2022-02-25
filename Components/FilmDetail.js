import React from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image} from "react-native";
import {getFilmDetails, getImageFilm} from "../API/TMBDApi";
import moment from "moment";
import numeral from "numeral";

export default class FilmDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          film: undefined,
          isLoading: true
        }
      }
      componentDidMount() {
        getFilmDetails(this.props.route.params.idFilm).then(data => {
          this.setState({
            film: data,
            isLoading: false
          })
        })
      }
      _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }
      _displayFilm() {
        if (this.state.film != undefined) {
          return (
            <ScrollView style={styles.scrollview_container}>
                <Image
                    style={styles.image}
                    source={{uri: getImageFilm(this.state.film.poster_path)}}
                />
                <Text style={styles.title_text}>{this.state.film.title}</Text>
                <Text style={styles.description_text}>{this.state.film.overview}</Text>
                <Text style={styles.default_text}>Sorti le {moment(new Date(this.state.film.release_date)).format('DD/MM/YYYY')}</Text>
                <Text style={styles.default_text}>Note : {this.state.film.vote_average} / 10</Text>
                <Text style={styles.default_text}>Nombre de votes : {this.state.film.vote_count}</Text>
                <Text style={styles.default_text}>Budget : {numeral(this.state.film.budget).format('0,0[.]00 $')}</Text>
                <Text style={styles.default_text}>Genre(s) : {this.state.film.genres.map(function(genre){
                    return genre.name;
                     }).join(" / ")}
                </Text>
                <Text style={styles.default_text}>Companie(s) : {this.state.film.production_companies.map(function(company){
                    return company.name;
                    }).join(" / ")}
                </Text>
            </ScrollView>
          )
        }
      }
    render() {
        const idFilm = this.props.route.params.idFilm;
        console.log(this.props.route.params.idFilm);
        return(
            <View style={styles.container}>
                {this._displayFilm()}
                {this._displayLoading()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop:10,
        flex:1,
    },
    txtcolor: {
        color: 'white',
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
    },
    scrollview_container: {
        flex: 1,
        backgroundColor: "black",
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        textAlign: 'center'
      },
      image: {
        height: 169,
        margin: 5
      },
      description_text: {
        fontStyle: 'italic',
        color: 'white',
        margin: 5,
        marginBottom: 15
      },
      default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        color: 'white',
      }
})