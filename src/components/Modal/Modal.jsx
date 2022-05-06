import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onModalClose, bigImage }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onModalClose();
        };
    };
    
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onModalClose();
        };
    };

    const {largeImageURL, tags} = bigImage

    return createPortal(
    <Overlay onClick={handleBackdropClick}>
        <ModalContainer>
            <ModalImage src={largeImageURL} alt={tags} />
        </ModalContainer>
    </Overlay>,
    modalRoot
    );
}

Modal.propTypes = {
    onModalClose: PropTypes.func.isRequired,
    bigImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    }),
    };


// export class Modal extends Component {
//     static propTypes = {
//     toggleModal: PropTypes.func.isRequired,
//     largeImage: PropTypes.shape({
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//     }),
//     };

// componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
// }

// componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
// }

// handleKeyDown = e => {
//     const { toggleModal } = this.props;
//     if (e.code === 'Escape') {
//     toggleModal();
//     }
// };

// handleBackdropClick = e => {
//     const { toggleModal } = this.props;
//     if (e.currentTarget === e.target) {
//     toggleModal();
//     }
// };
// render() {
//     const { largeImageURL, tags } = this.props.bigImage;
//     const { handleBackdropClick } = this;
//     return createPortal(
//     <Overlay onClick={handleBackdropClick}>
//         <ModalContainer>
//             <ModalImage src={largeImageURL} alt={tags} />
//         </ModalContainer>
//     </Overlay>,
//     modalRoot
//     );
// }
// }