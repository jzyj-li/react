/*
* 分页
* 10页之内[1,2,3,4,5,6,7,8,9,10]
* 大于10页[1,...,3,4,5,6,7,...,15]
* */
class Pagination {
    constructor (options) {
        this._total = options.total
        this._pageSize = options.pageSize
    }

    render () {
        let total = this._total,
            pageSize = this._pageSize,
            pageNum = Math.ceil(total/pageSize);
        this.renderPage(pageNum)
    }
    renderPage (pageNum, currentIndex) {
        let index = currentIndex, arr = [],
            num = pageNum>10? (index>6?6:8):pageNum,
            start = pageNum >10 && index > 6?index:0;

        for(let i=start;i<num;i++) {
            arr.push( i+1)
        }
        pageNum > 10 &&  arr.push('...', num);

    }
    // 页数小于10
    minPage(num) {
        let arr = []

        return arr;
    }

    // 页数大于10
    maxPage (num, currentIndex=2) {

        let arr = [],index = currentIndex
        if (currentIndex > 6) {
            arr.push(currentIndex-3,currentIndex-2,currentIndex-1,currentIndex,currentIndex+1,currentIndex+2)
            arr.unshift(1,'...')
        } else {
            for(let i=0;i<8;i++) {
                arr.push( i+1)
            }
        }

    }
}

export default new Pagination({
    total: 305,
    pageSize: 10
})