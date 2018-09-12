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
            pageSize = this._pageSize;
        this.pageNum = Math.ceil(total/pageSize);
        this.maxPage = this.pageNum>10;
        return this.renderPage(this.pageNum)
    }
    renderPage (pageNum, currentIndex=1) {
        let index = currentIndex,
            arr = [],
            maxPage = this.maxPage,
            middleIndex = (index > 6) && (index <= (pageNum-6)),
            minIndex = index <= 6,
            maxIndex = index > (pageNum-6),
            num = maxPage?(middleIndex?6:8):pageNum,
            start = maxPage && middleIndex?index-3:maxPage?(!minIndex?pageNum-7:0):0;

        for(let i=0;i<num;i++) {
            start == 0?arr.push(i+1):arr.push(start++)
        }
        maxPage &&  !maxIndex && arr.push('...', pageNum);
        !minIndex &&  maxPage && arr.unshift(1,'...')
        return this._pageArray = arr;
    }
    setPage (currentIndex) {
        if (!this.maxPage || (this.maxPage && (currentIndex > (this.pageNum-6)))) {
            return this._pageArray
        } else {
            return this.renderPage(this.pageNum, currentIndex)
        }
    }
}

export default new Pagination({
    total: 288,
    pageSize: 10
})