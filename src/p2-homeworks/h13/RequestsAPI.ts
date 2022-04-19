import axios from "axios";

export const RequestsAPI = {
    sendValue(value: boolean) {
        return axios.put('https://neko-cafe-back.herokuapp.com/auth/test', {body: {success: value}})
    }
}