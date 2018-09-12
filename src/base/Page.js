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
            currentIndex: 1,
        }
    }

    prevPage () {
        console.log('上一页')
    }

    nextPage () {}
    currentPage (v) {
        this.setState({currentIndex: v, pageArray: Pagination.setPage(v)});

    }
    componentDidMount() {
        this.setState({pageArray: Pagination.render()})
       // console.log(Pagination.render())
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
                    {this.state.pageArray.map((v, i) => {
                        return (
                            <li className="item"  key={i} >
                                {Number.isInteger(v)?
                                    (<button className={`item-button ${v == this.state.currentIndex? 'active': ''}`} onClick={this.currentPage.bind(this, v)}>{v}</button>):(
                                    <button className='ellipsis'>{v}</button>
                                )}
                            </li>
                        )
                    })}
                    <li className='item'>
                        <button type='button' className='next__page'>
                            下一页
                        </button>

                    </li>
                </ol>
            </div>
        )
    }
}

export default Page
