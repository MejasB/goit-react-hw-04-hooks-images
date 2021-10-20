import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { ImagesList } from './ImageGallery.styled';

export function ImageGallery({ images, alt, handleClick }) {
  return (
    <ImagesList>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          alt={alt}
          handleClick={handleClick}
        />
      ))}
    </ImagesList>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
