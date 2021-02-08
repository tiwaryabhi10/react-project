import http from "./axios";

const getItem = () =>  {
    return http.get("/5fd1a69e81ec296ae71c07d7");
}

export default {
    getItem,
};