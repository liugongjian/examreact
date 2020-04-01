/*
* @Author: Rosen
* @Date:   2018-01-23 19:59:56
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 12:49:37
*/
import React        from 'react';
import { Link }     from 'react-router-dom';

class NavTop extends React.Component{
    render(){
        return (
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                  <a className="navbar-brand" href="#">大熊的AWS考试加油站</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">首页<span className="sr-only"></span></Link>
                      </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/subjects/charge">AWS题库<span className="sr-only"></span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/exam/1">备考资料<span className="sr-only"></span></Link>
                      </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exam/1">登录<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                  </div>
                </div>
              </nav>
        );
    }
}

export default NavTop;