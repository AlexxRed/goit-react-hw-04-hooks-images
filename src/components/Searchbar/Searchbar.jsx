import PropTypes from 'prop-types';
import { useState} from "react";
import { SearchbarWarapper, SearchForm, SearchButton, SearchText, SearchInput } from "./Searchbar.styled";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function Searchbar({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = event => {
        setSearchQuery(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            Notify.failure("Enter your search query");
        };

        onSubmit(searchQuery);
        resetForm();
    };

    const resetForm = () => {
        setSearchQuery('');
    };

    return (
        <SearchbarWarapper >
            <SearchForm onSubmit={handleSubmit}>
                <SearchButton type="submit" >
                <SearchText>Search</SearchText>
                </SearchButton>
                    <SearchInput
                        value={searchQuery}
                        onChange={handleChange}
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
            </SearchForm>
        </SearchbarWarapper>
        )
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };

// export class Searchbar extends Component {
//     static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//     };
    
//     state = {
//         searchQuery: '',
//     }

//     handleChange = event => {
//         this.setState({searchQuery: event.currentTarget.value})
//     }

//     handleSubmit = event => {
//         const { searchQuery } = this.state
//         const { onSubmit } = this.props
//         const { resetForm } = this
        
//         event.preventDefault()
//         if (searchQuery.trim() === '') {
//             Notify.failure("Enter your search query");
//             // console.log('add your search query');
//         }

//         onSubmit(searchQuery)
//         resetForm()
//     }

//     resetForm = () => this.setState({ searchQuery: '' })
    

//     render() {
//         const { searchQuery } = this.state
//         const {handleSubmit, handleChange} = this
//         return (
//         <SearchbarWarapper >
//             <SearchForm onSubmit={handleSubmit}>
//                 <SearchButton type="submit" >
//                 <SearchText>Search</SearchText>
//                 </SearchButton>
//                     <SearchInput
//                         value={searchQuery}
//                         onChange={handleChange}
//                         type="text"
//                         autocomplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                     />
//             </SearchForm>
//         </SearchbarWarapper>
//         )
//     }
// }