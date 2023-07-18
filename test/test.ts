import axios from 'axios';

// URL de base de votre application
const baseURL = 'http://localhost:3000';

// Endpoint à tester (ici, nous supposons que vous avez configuré l'endpoint dans votre controller)
const endpoint = '/cats';

// Faire la requête DELETE à l'endpoint
axios.delete(baseURL + endpoint)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });