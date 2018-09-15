import React, {Component} from 'react';
import Page from '../../base/Page'

class Release extends Component {
    constructor (props){
        super(props)
    }
    componentDidMount () {
    }
    componentDidUpdate () {
        console.log('22')
    }
    render () {
        return (
            <div className='release'>
                <div className="release__tab">
                    <ol>
                        <li className='active'>内容管理</li>
                    </ol>
                    <p>今日发布数量：</p>
                </div>
                <div className="manage__content">

                    <div className="manage__form">
                        <div className="form__select">
                            <select name="" id="">
                                <option value="">
                                    全部类型
                                </option>
                                <option value="">
                                    1
                                </option>
                                <option value="">
                                    2
                                </option>
                            </select>
                        </div>
                        <div className="form__select">
                            <select name="" id="">
                                <option value="">
                                    全部状态
                                </option>
                                <option value="">
                                    未通过
                                </option>
                                <option value="">
                                    待发布
                                </option>
                            </select>
                        </div>
                        <div className="form-search">
                            <input type="text" placeholder='请输入关键字'/>
                            <button>搜索</button>
                        </div>
                    </div>
                    <div className="article__total">
                        共 <span>18</span>条内容
                    </div>
                    <div className="article__list">
                        <div className="article__item">
                            <div className="img"></div>
                            <div className="mes">
                                <div className='title'>
                                    <a href="">1234576</a>
                                    <small className='article__status'>
                                        未通过
                                    </small>
                                </div>
                                <div className='data'>
                                    <span>
                                        时间
                                    </span>
                                    <span>
                                        推荐
                                    </span>
                                    <span>
                                        阅读
                                    </span>
                                </div>
                            </div>

                            {/*下线*/}
                            <div className='operate'>
                                下线
                            </div>
                        </div>
                    </div>

                    <Page/>
                </div>
            </div>
        )
    }
}

export default Release














