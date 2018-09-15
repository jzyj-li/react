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

                    <div className="material__list">
                        <div className="material__item"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Release














