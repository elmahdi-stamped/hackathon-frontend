import axios from "axios";
import Url from "@/Url";
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios';

function getCountryList()
{
    return axios.get(
        Url.COUNTRY_LIST
    ).catch( exception => {
        throw exception;
    });
}

/**
 * @param {string} country
 * @returns {Promise<AxiosResponse<any>>}
 */
function getStateList(country)
{
    let url = Url.STATE_LIST.replace('__COUNTRY__', country);
    return axios.get(
        url
    ).catch( exception => {
        throw exception;
    });
}

export default {
    getCountryList,
    getStateList
}