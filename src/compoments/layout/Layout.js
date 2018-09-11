/*
* 布局结构
* */
import React, {Component} from 'react';
import Nav from './Nav';
import LeftNav from './LeftNav';
import {Route} from 'react-router-dom';
import '../../style/app.css';

class Layout extends Component{

    renderView (v, index) {
        if (v.hasOwnProperty('child')) {
            return (
                <div key={index}>
                    {v.child.map((item, i) => (<Route key={item.name} path={item.path} component={item.main}/>))}
                </div>
            )
        } else {
           return (<Route key={v.name} path={v.path} component={v.main}/>)
        }
    }
    render () {
        const routes = this.props.attrRoutes;
        return (
            <div className='layout'>
                <Nav/>
                <div className='content'>
                    <div className="container">
                        <LeftNav attrRoutes={routes}/>
                        <div className="main-view">
                            {routes.map((v, index) => {
                               return this.renderView(v,index)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;