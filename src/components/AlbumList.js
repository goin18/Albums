import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js'

//https://rallycoding.herokuapp.com/api/music_albums
class AlbumList extends Component {
  state = { albums: [] };


  componentWillMount() {
    console.log('componentWillMount in Albumlist');
    // debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data })
    );
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    //  <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state.albums);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
