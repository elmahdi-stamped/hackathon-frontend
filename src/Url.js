const TWEET_GET_ALL = "/api/tweets_stats";

const COUNTRY_TEMP = '/api/country_temperatures/';
const COUNTRY_LIST = '/api/countries';
const STATE_LIST = '/api/states/__COUNTRY__';

export default class Url
{
    static get TWEET_GET_ALL()
    {
        return TWEET_GET_ALL;
    }
    static get COUNTRY_TEMP()
    {
        return COUNTRY_TEMP;
    }
    static get COUNTRY_LIST()
    {
        return COUNTRY_LIST;
    }
    static get STATE_LIST()
    {
        return STATE_LIST;
    }
}