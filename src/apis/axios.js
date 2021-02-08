import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.jsonbin.io/b",
    headers: {
        "content-type": "application/json",
    } ,

});

export default instance;