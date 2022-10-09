import axios from 'axios'

const EMPLOYEE_LIST_TABLE_URL='http://localhost:8080/getAll';
class EmployeeSerivce{
    listAll(){
        return axios.get(EMPLOYEE_LIST_TABLE_URL)
    }
}
export default new EmployeeSerivce();