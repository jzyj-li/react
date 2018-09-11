import React, {Component} from 'react';
import blog from './blog.svg'

class Nav extends Component {
    render () {
        return (
            <div className='nav' >
                <div className="container nav-container">
                    <div className="logo">
                        {/*<img src={blog} alt=""/>*/}
                    </div>
                    <div className="user-info">
                        <div className="user-photo">

                        </div>
                        <div className="user-other">
                            <p className='user-name'>
                                东方不败
                            </p>
                            <div className="user-func">
                                <span className="user-tag">
                                    江湖少年
                                </span>
                                <span className="user-news">
                                    <em>12</em>
                                </span>
                                <a href="">
                                    退出
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;