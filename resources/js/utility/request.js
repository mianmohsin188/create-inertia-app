import axios from "axios";

const getRequest = (url,params) => {
    return new Promise((resolve, reject) => {

        axios
            .get(url)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                console.log(error)
                reject(error);
            });
    });
}
const postRequest = (url,data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url,data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
const putRequest = (url,data) => {
    return new Promise((resolve, reject) => {
        axios
            .put(url,data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const patchRequest = (url,data) => {
    return new Promise((resolve, reject) => {
        axios
            .patch(url,data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
const deleteRequest = (url) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(url)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
const postRequestWithFileHeaders = (url,data) => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    return new Promise((resolve, reject) => {
        axios
            .post(url,data,headers)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const loginReq = (data) => {
    const url = '/login';
    return new Promise((resolve, reject) => {
        axios
            .post(url,data)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export {getRequest,postRequest,putRequest,patchRequest,deleteRequest,postRequestWithFileHeaders,loginReq}




