import React, {Component} from 'react';

import Page from '../../base/Page'
import {getArticleList} from '../../module/api'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount () {
        getArticleList().then(data => {
            this.setState({list: data[0].data})
        })
    }

    render () {
        return (
            <div className='home'>
                <div className="home__top l-flex">
                    <div className="home__top--count l-flex">
                        <div>
                            <p className="name">总订阅</p>
                            <p className="number">11</p>
                        </div>
                        <div>
                            <p className="name">总阅读</p>
                            <p className="number">11</p>
                        </div>
                        <div>
                            <p className="name">昨日阅读</p>
                            <p className="number">11</p>
                        </div>
                        <div>
                            <p className="name">总数据指数</p>
                            <p className="number">11</p>
                        </div>
                    </div>
                    <button className='home__top--release'>
                        <i className='ydc-icon-shu'></i>
                        <span>发布</span>
                    </button>
                </div>

                <div className="home__banner">

                </div>

                <div className="home__article">
                    <div className="home__article__tab">
                        <div className='active'>
                            已发布
                        </div>
                        <div>
                            草稿箱
                        </div>
                        <div>
                            所有
                        </div>
                    </div>
                    <div className='home__article__content'>
                        <ul className="list">
                            {this.state.list.map((v, i) =>(<li key={i}><a href={v.detailUrl}>{v.title}</a><span>{v.createTime}</span></li>))}
                        </ul>
                        <Page attrTotal='135' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home