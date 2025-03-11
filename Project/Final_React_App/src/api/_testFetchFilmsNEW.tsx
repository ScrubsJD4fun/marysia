import axios from 'axios'

const URL_KINOPOISK = 'https://kinopoiskapiunofficial.tech';
const token = '6c6675a4-ece0-4058-b0e6-385b2eac9b54';



export  function fetchKinopoisk() {
    return axios.get(`${URL_KINOPOISK}/api/v2.2/films`, {
        // method: 'GET',
        headers: {
            // Authorization: `Bearer ${token}`,
            'X-API-KEY': `${token}`,
            'Content-Type': 'application/json', 
        }
    }).then(res => res)
    // .then(json => console.log(json))
    // .catch(err => console.log(err))
};

// fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
//     method: 'GET',
//     headers: {
//         'X-API-KEY': '6c6675a4-ece0-4058-b0e6-385b2eac9b54',
//         'Content-Type': 'application/json',
//     },
// })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
