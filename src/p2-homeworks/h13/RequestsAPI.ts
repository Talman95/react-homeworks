import axios from "axios";

export const RequestsAPI = {
    sendValue(value: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: value})
    }
}