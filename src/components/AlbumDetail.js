import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url } = album;
  const {
    marko,
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainderStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return(
    <Card>
      <CardSection>
        <View style={thumbnailContainderStyle} >
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image}}
          style={imageStyle}/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainderStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    width: null
  }
};

export default AlbumDetail;
