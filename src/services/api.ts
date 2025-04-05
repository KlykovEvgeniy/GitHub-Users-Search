import axios from "axios";

axios.defaults.baseURL = 'https://api.github.com/users';

export const getUserByName = async (username: string) =>  {
    try {
        const response = await axios.get(`/${username}`)
        return response.data   
    } catch (error) {
        return error
    }
}