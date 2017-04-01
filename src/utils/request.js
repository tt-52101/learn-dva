import fetch from 'dva/fetch';
 

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}
 
export default async function request(url, options) {
    console.log(options)
    const response = await fetch(url, options);
    console.log(response)
    checkStatus(response);
    const data = await response.json();
    console.log(data)
    const ret = {
        data,
        headers: {},
    };
 
    return ret;
}
