import axios from "axios";
import Url from "@/Url";

function getTweets() {
    return axios.get(
        Url.TWEET_GET_ALL
    ).catch( (exception) => {
        throw exception;
    });
}


export default {
    getTweets,
}