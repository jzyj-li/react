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
                        <li className='active'>素材中心</li>
                    </ol>
                </div>
                <div className="manage__content">
                    <div className="title-tip">
                        <p>标题字数需在11字到30字之间。</p>
                    </div>
                    <div className="manage__form">
                        <div className="form-search" style={{width:100 + '%'}}>
                            <input type="text" placeholder='请输入关键字进行搜索'/>
                            <button>确定</button>
                        </div>
                    </div>
                    <div className="material__tip">
                        <p>
                            共 <span>28</span> 条内容
                        </p>
                        <button>
                            上传图片
                        </button>
                    </div>
                    <div className="material__list">
                        <div className="material__item">
                            <div className="img">

                            </div>
                            <p>123244</p>
                            <div className="material__btn">
                                <button>编辑</button>
                                <button className='del'>删除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Release














