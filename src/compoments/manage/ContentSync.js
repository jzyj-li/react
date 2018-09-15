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
                        <li className='active'>内容同步</li>
                    </ol>
                </div>
                <div className="manage__content">
                    <div className="manage__form">
                        <div className="form__select">
                            <select name="" id="">
                                <option value="">
                                    请选择同步链接的类型
                                </option>
                                <option value="">
                                    微信
                                </option>
                                <option value="">
                                    头条
                                </option>
                            </select>
                        </div>

                        <div className="form-search" style={{width:755 + 'px'}}>
                            <input type="text" placeholder='请输入关键字'/>
                            <button>确定</button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Release














