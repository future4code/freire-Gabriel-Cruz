import axios from 'axios';

const body = {
    name: "",
    id:"",
}

const request = axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person", 
{
    headers: {
        Authorization: 'gabriel-da-silva-cruz-Freire'
    }})

    request.then((response)=>{
        console.log(response.data)
    })


export default api;