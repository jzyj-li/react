import React, {Component} from 'react';
import {addArticle} from '../../module/api'

import noImg from '../../style/noimg.gif'

class Release extends Component {
    constructor (props) {
        super(props);
    }
    releaseHandle () {
        addArticle({name:1,content: '2'});
    }
    render () {
        const input = '123456'
        return (
            <div className='release'>
                <div className="release__tab">
                    <ol>
                        <li className='active'>发布文章</li>
                        <li>发布图集</li>
                    </ol>
                    <p>今日发布数量：</p>
                </div>
                <div className="release__content">
                    <div className="title-tip">
                        <p>标题字数需在11字到30字之间。</p>
                    </div>
                    <div className="title-form">
                        <input type="text"/>
                        <div className="title-number">
                            0
                        </div>
                    </div>
                    <div className="release-txt">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="release-form">
                        <div className="form-item">
                            <label> 分类</label>
                            <div>
                                <select name="" id="" className='form-select'>
                                    <option value="1">vue</option>
                                    <option value="1">js</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-item">
                            <label>封面</label>
                            <div className='c-img'>
                                <img src={noImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="release-btn">
                        <button className='button' onClick={this.releaseHandle.bind(this)}>发布</button>
                        <button className='button button-default'>保存草稿</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Release