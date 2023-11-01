const axios = require('axios');

axios.get('http://localhost:1337/articles')
  .then(response => {
    // manejar la respuesta exitosa
    console.log(response.data);
  })
  .catch(error => {
    // manejar el error
    console.error(error);
  });
