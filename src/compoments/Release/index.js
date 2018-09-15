import React, {Component} from 'react';
import {addArticle} from '../../module/api'
import PublicAtlas from './PublicAtlas'
import PublicArticle from './PublicArticle'

class Release extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }
    releaseHandle () {
        addArticle({name:1,content: '2'});
    }

    tab (index) {
        this.setState({
            currentIndex:index
        })
    }
    render () {
        let {currentIndex} = this.state
        return (
            <div className='release'>
                <div className="release__tab">
                    <ol>
                        <li className={0 == currentIndex?'active':null} onClick={this.tab.bind(this, 0)}>发布文章</li>
                        <li className={1 == currentIndex?'active':null} onClick={this.tab.bind(this, 1)}>发布图集</li>
                    </ol>
                    <p>今日发布数量：</p>
                </div>
                {
                    currentIndex? <PublicAtlas/>:<PublicArticle/>
                }
            </div>
        )
    }
}

export default Release