/*
* @des http请求
* */

const XHR = window.XMLHttpRequest || window.ActiveXObject;
const FETCH = window.fetch;

class HttpClient {
    constructor () {
        this.http = FETCH?new Fetch():new Ajax();
        this.headers = {
            'Content-type': 'x-www-form-urlencoded'
        };
        this.baseUrl = '';
        this.Interceptor = new Interceptor()
    }
    get (...rest) {
        let [url, data, headers] =   this.Interceptor.request(rest);

        return new Promise((reslove, reject) => {
            if (url) {
                url = this.baseUrl? (this.baseUrl + url):url;
                this.http.get( url, data, Object.assign({}, headers, this.headers)).then(res => {
                    reslove(this.Interceptor.response(res))
                }).catch(err => {
                    reject(err)
                })
            } else {
                warn('url 必传')
            }
        })
    }
    post (...rest) {
        let [url, data, headers] = this.Interceptor.request(...rest);
        return new Promise((reslove, reject) => {
            if (url) {
                url = this.baseUrl? (this.baseUrl + url):url;
                this.http.post(url, data, Object.assign({}, headers, this.headers)).then(res => {
                    reslove(this.Interceptor.response(res))
                }).catch(err => {
                    reject(err)
                })
            } else {
                warn('url 必传')
            }
        })
    }
}

/*
* @des 拦截器
* */
class Interceptor {
    request (...request) {
        return request;
    }
    response (...response) {
        return response;
    }
}

/*
* @class Ajax
* */
class Ajax {
    get (url, data) {
        this.ajax(url, serialize(data))
    }
    post (url, data) {
        this.ajax('POST', url, serialize(data))
    }
    ajax (type = 'GET', url, data) {
        return new Promise((reslove, reject) => {
            let xhr = new XHR();

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 200 && xhr.readyState === 4) {
                    reslove(xhr.responseText)
                } else {
                    reject(xhr)
                }
            }
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            type === 'GET'?xhr.open(type,`${url}?data=${data}`, true):xhr.open(type, url, true);
            xhr.send(data)
        })
    }
}

class Fetch {
    options = {
        method: 'GET',
        credentials: 'include'
    }
    get (url, data, headers) {
        let options = Object.assign({}, this.options, { headers})
        return this.fetch(url, options)
    }
    post (url, data, headers) {
        let options = Object.assign({},this.options, {method: 'POST', body: JSON.stringify(data), headers});

        return this.fetch(url, options)
    }
    fetch (url, options) {
        return FETCH(url, options).then(response => (response.json()))
    }
}

/*
* @des 序列化参数
* @param {Object} param
* @return {String}
* */
function serialize(param) {
    let str = '';
    for (let i in param) {
        str += i=param[i] + '&'
    }
    return str;
}

function warn(err) {
    throw new Error(err)
}

export default HttpClient
