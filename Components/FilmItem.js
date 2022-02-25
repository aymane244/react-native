// Components/FilmItem.js
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import {getImageFilm} from '../API/TMBDApi'

export default class FilmItem extends React.Component {
  render() {
    //const film = this.props.film; valide ecriture
    //const details = this.props.details; valide ecriture
    const {film, details} = this.props; //valide ecriture aussi pour plusieurs props
      return (
      <TouchableOpacity
        onPress={()=>details(film.id)}
        style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: getImageFilm(film.poster_path)}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>{/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>{film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    marginTop:10,
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'white'
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'lightgrey',
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: 'lightgrey'
  },
  date_container: {
    flex: 1
  },date_text: {
    textAlign: 'right',
    fontSize: 14,
    color: 'lightgrey'
  },
  title_text: {
    color:"white",
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  }
})