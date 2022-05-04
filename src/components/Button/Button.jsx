import PropTypes from 'prop-types';
import { ButtonElement } from './Button.styled'

export const LoadMoreButton = ({ loadMore }) => {
     return <ButtonElement onClick={loadMore}>load more</ButtonElement> 
}

LoadMoreButton.propTypes = {
     loadMore: PropTypes.func.isRequired,
};