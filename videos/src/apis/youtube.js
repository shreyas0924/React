import axios from 'axios';

const KEY = 'AIzaSyDEGQedJuqUFeGZpaRxXc51ER6rglyyYNQ';

export default axios.create( {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'video',
        maxResults : 5,
        key : KEY
    }
});