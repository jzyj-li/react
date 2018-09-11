import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";

import Layout from './compoments/layout/Layout';
import Home from './compoments/Home';
import Release from './compoments/Release';
import Manage from './compoments/manage'

const routes = [
    {
        path: '/home',
        main: Home,
        name: '首页',
        icon: 'ydc-icon ydc-icon-home'
    },
    {
        path: '/release',
        main: Release,
        name: '发布',
        icon: 'ydc-icon ydc-icon-find'
    },
    {
        name: '管理',
        icon: 'ydc-icon ydc-icon-file',
        child: [
            {
                path: '/contentManage',
                main: Manage,
                name: '内容管理',
            },
            {
                path: '/contentSync',
                main: Manage,
                name: '内容同步'
            },
            {
                path: '/MaterialCenter',
                main: Manage,
                name: '素材中心'
            }
        ]
    }
]

const AppRouter = () => (
    <Router>
        <Layout attrRoutes={routes}></Layout>
    </Router>
)


export default AppRouter;