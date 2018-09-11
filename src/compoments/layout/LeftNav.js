import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class LeftNav extends Component {
    renderLeftNav (v) {
        if (v.hasOwnProperty('child')) {
            return (
                <div>
                    <span className='left-nav-title'>
                        <i className={v.icon}></i>
                        {v.name}
                    </span>
                    <ul>
                        {v.child.map((item, index) => {
                           return (
                               <li className="left-nav-item" key={item.name}>
                                   <Link to={item.path}>
                                       {item.name}
                                   </Link>
                               </li>
                           )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (
                <Link to={v.path}>
                    <i className={v.icon}></i>
                    {v.name}
                </Link>
            )
        }
    }
    render () {
        return (
            <div className='left-nav' >
                <ul className="left-nav-list">
                    {this.props.attrRoutes.map((v, index) =>{
                        return (
                            <li className="left-nav-item" key={index}>
                                {this.renderLeftNav(v)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default LeftNav;