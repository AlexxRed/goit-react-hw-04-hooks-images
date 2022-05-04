import PropTypes from 'prop-types';
import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ smallImg, tags, showImage, id }) => {
    return (
        <GalleryCard onClick={() => showImage(id)}>
            <GalleryImage src={smallImg} alt={tags} />
        </GalleryCard>
    )
}

ImageGalleryItem.propTypes = {
    smallImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    showImage: PropTypes.func.isRequired,
};