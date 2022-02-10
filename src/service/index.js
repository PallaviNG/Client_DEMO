import axios from "axios"

const base_url = "http://localhost:3051/api/";

export const post=async function(url,data) {
    try {
        var result = await axios.post(base_url+url,data);
        return result;
    } catch (error) {
        return error;
    }
}