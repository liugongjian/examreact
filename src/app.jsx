/*
* @Author: Rosen
* @Date:   2018-01-13 11:27:21
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-05 14:02:20
*/  

import React            from 'react';
import ReactDOM         from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

import Layout           from 'component/layout/index.jsx';
// 页面
import Home             from 'page/home/index.jsx';
import Login            from 'page/login/index.jsx';
import ErrorPage        from 'page/error/index.jsx';

import Exam             from 'page/exam/index.jsx';
import Subjects         from 'page/subjects/index.jsx';
import ExamResult       from 'page/examresult/index.jsx';

import './index.css'


class App extends React.Component{
    render(){
        let MainRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/exam/:subject_id" component={Exam}/>
                    <Route path="/subjects/:subject_type" component={Subjects}/>                      
                    <Route path="/examresult" component={ExamResult}/>                      
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => MainRouter}/>
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);