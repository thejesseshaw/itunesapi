import fetch from 'cross-fetch'
export const RECEIVE_MUSIC_FROM_API = 'RECEIVE_MUSIC_FROM_API';
export const SEARCH_ITUNES_REQUEST = 'SEARCH_ITUNES_REQUEST';
export const SEARCH_MUSIC_ERROR = 'SEARCH_MUSIC_ERROR';

export const searchMusicRequest = () => ({
    type: SEARCH_ITUNES_REQUEST
});

export const searchMusicSuccess = music => ({
    type: RECEIVE_MUSIC_FROM_API,
    music
});

export const searchMusicError = error => ({
    type: SEARCH_MUSIC_ERROR,
    error
});

//Itunes API Links
var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";

function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong. Please try your search again');
    }
    let artist = name;
    let searchTerm = artist.split(' ').join('+');
    return fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=album`)
    .then(function(res) {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        console.log("TESTING")
        return res.json()
    })
    .then(function(data) {
        data.results.map(music => music)
        console.log(data.results)
        return data.results
    })
}

function search(name) {
    return new Promise((resolve, reject) => {
        resolve(_search(name))
    });
}


export const searchItunes = name => dispatch => {
    dispatch(searchMusicRequest());
    search(name)
        .then(
                function(data) {
                    dispatch(searchMusicSuccess(data))
                }
        )
        .catch(error => dispatch(searchMusicError(error)));
};

