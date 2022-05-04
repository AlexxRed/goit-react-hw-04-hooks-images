import axios from 'axios';

const API_KEY = '5132282-75e364beaf68381714aa1df4d';
const PER_PAGE = 12;
axios.defaults.baseURL = 'https://pixabay.com/api';

export function getImages(searchQuery, page) {
    const response = axios.get(
`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    )
    return response;
}


// export const getImages = async (searchQuery, page) =>{
//     const response = axios.get(
// `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
//     );
//     console.log(response.data);
//     return response.data;
// }