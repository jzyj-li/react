/*
* @des api
* */
import HttpClient from './http'

const http = new HttpClient()

http.baseUrl = 'https://easy-mock.com/mock/5b8f7ac9a2030e67d5c7a1de/jzyj/'
http.headers = {
    'Content-type': 'application/json'
}

export function addArticle(...rest) {
    return http.post('addArticle', ...rest)
}

// 获取文章列表
export function getArticleList() {
    return http.get('articleList')
}

// 获取基础信息

