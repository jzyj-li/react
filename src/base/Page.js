/*
* 分页
* */
import React, {Component} from 'react';
import Pagination from '../module/Pagination'

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: this.props.attrTotal,
            pageArray: [],
            currentPage: 1,
        }
    }

    renderPage() { // 默认一页10条 大于10页开始有...
    }

    currentPage (v) {
        //this.setState({currentPage: v})
    }

    prevPage () {
        console.log('上一页')
    }
    nextPage () {

    }
    componentDidMount() {
        Pagination.render()
    }

    render() {
        return (
            <div className="layout__pagination">
                <ol>
                    <li className=' item'>
                        <button type='buttton' className='previoue__page' onClick={this.prevPage.bind(this)}>
                            上一页
                        </button>
                    </li>
                    {this.state.pageArray.map((v) => {
                        return (
                            <li className="item"  key={v} onClick={this.currentPage.bind(this, v)}>
                                <button>
                                    {v}
                                </button>
                            </li>
                        )
                    })}
                    <li className='next__page item'>
                        下一页
                    </li>
                </ol>
            </div>
        )
    }
}

export default Page
