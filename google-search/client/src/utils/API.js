import axios from "axios";

export default
{
    searchBooks: async (param) =>
    {
        //console.log("hello");
        //debugger;
        return axios.get(`/api/search/${param}`)
    }
}