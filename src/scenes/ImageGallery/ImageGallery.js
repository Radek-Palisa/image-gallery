import React, { Component } from 'react';
import { fetchImages as serviceFetchImages } from '../../services/api';
import Grid from '../../components/Grid/Grid';
import MediaCard from '../../components/MediaCard/MediaCard';
import Lightbox from '../../components/Lightbox/Lightbox';
import Paginator from '../../components/Paginator/Paginator';
import SearchBar from '../../components/SearchBar/SearchBar';


export default class ImageGallery extends Component {
  state = {
    searchValue: '',
    photos: null,
    photoOpened: null,
    page: 1,
    pagesTotal: null,
    error: null,
  }

  componentDidMount = () => {
    this.fetchImages();
  }

  fetchImages = (page = 1) => {
    serviceFetchImages()
      .then(data => this.setState({
        page,
        pagesTotal: data.pagesTotal,
        photos: data.photos,
      }))
      .catch(error => this.setState({ error }));
  }

  handleInputChange = e => this.setState({ searchValue: e.target.value });

  onCardClick = photo => this.setState({ photoOpened: photo })

  onLightboxClose = () => this.setState({ photoOpened: null });

  paginate = page => this.fetchImages(page);

  render() {
    const {
      searchValue,
      error,
      page,
      pagesTotal,
      photos,
      photoOpened,
    } = this.state;

    return (
      <div>
        <SearchBar
          value={searchValue}
          onChange={this.handleInputChange}
          onSubmit={this.fetchImages}
        />
        {photos &&
          <Grid>
            {photos.map(photo => (
              <MediaCard
                key={photo.id}
                onClick={this.onCardClick}
                {...photo}
              />
            ))}
          </Grid>
        }
        {pagesTotal > 1 &&
          <Paginator
            currentPage={page}
            pagesTotal={pagesTotal}
            onControlClick={this.paginate}
          />
        }
        {photoOpened &&
          <Lightbox
            photo={photoOpened}
            onClose={this.onLightboxClose}
          />
        }
      </div>
    );
  }
}
