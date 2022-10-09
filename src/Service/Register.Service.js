import axios from 'axios'

const REGISTER_LIST_TABLE_URL='http://localhost:8080/getAll';
const REGISTER_DELETE_URL='http://localhost:8080/delete/';
class RegisterSerivce{
    listAll(){
        return axios.get(REGISTER_LIST_TABLE_URL)
    }
     delete = id =>{
        return axios.delete(REGISTER_DELETE_URL+id)
    }
    get= id =>{
        return axios.get('http://localhost:8080/update/'+id)
    }
     update = (data) => {
        return axios.put('http://localhost:8080/edit',data);
     }
    /* create = (data) => {
        return axios.post("http://localhost:8080/add", data);
    }*/
}
export default new RegisterSerivce();