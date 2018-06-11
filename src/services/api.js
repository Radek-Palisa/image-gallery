import { photos as data, photoInfo } from '../tests/mockData';

const fetchImages = () => new Promise((resolve) => {
  setTimeout(() => {
    const extendedData = {
      pagesTotal: data.photos.pages,
      photos: data.photos.photo.map((item) => {
        const {
          farm, server, id, secret, title,
        } = item;
        return {
          id,
          title,
          imgSrcSmall: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`,
          imgSrcFull: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`,
          owner: photoInfo.photo.owner.username,
          dateTaken: photoInfo.photo.dates.taken,
          tags: photoInfo.photo.tags.tag.map(tag => tag.raw),
          /* eslint no-underscore-dangle: 0 */
          description: photoInfo.photo.description._content,
          url: photoInfo.photo.urls.url[0]._content,
        };
      }),
    };
    resolve(extendedData);
  }, 700);
});

export default fetchImages;
