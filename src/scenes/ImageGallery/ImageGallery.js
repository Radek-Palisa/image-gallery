import React, { Component } from 'react';
import fetchImages from '../../services/api';
import Grid from '../../components/Grid/Grid';
import MediaCard from '../../components/MediaCard/MediaCard';


export default class ImageGallery extends Component {
  state = {
    photos: null,
  }

  componentDidMount = () => {
    fetchImages()
      .then(data => this.setState({ photos: data.photos }));
  }

  render() {
    const { photos } = this.state;

    return (
      <div>
        {photos && (
          <Grid>
            {photos.map(photo => <MediaCard key={photo.id} {...photo} />)}
          </Grid>
        )}
      </div>
    );
  }
}
