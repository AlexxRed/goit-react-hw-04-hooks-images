import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images, showImage}) => {
    return (
        <GalleryList >
            {images.map(({ id, webformatURL, largeImageURL, tags }) => {
                return (
                    <ImageGalleryItem
                    key={id}
                    id={id}
                    smallImg={webformatURL}
                    largeImg={largeImageURL}
                    tags={tags}
                    showImage={showImage}
                    />
                )
            })}
        </GalleryList>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    })
    ),
    showImage: PropTypes.func.isRequired,
};