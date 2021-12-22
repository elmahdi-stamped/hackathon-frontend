import axios from "axios";
import Url from "@/Url";

function getTweets() {
    return axios.get(
        Url.TWEET_GET_ALL
    ).catch( (exception) => {
        throw exception;
    });
}

function getTweetById(id)
{
    let url = Url.TWEET_GET_ONE.replace('__ID__', id);
    return axios.get(
        url
    ).catch( (exception) => {
        throw exception;
    });
}

function getTweetsByRange(startDate, endDate)
{
    let url = Url.TWEET_GET_RANGE;
    url.replace('__START__', startDate);
    url.replace('__END__', endDate);
    return axios.get(
        url,
    ).catch( exception => {
        throw exception;
    });
}


export default {
    getTweets,
    getTweetById,
    getTweetsByRange
}