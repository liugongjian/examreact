/*
* @Author: Rosen
* @Date:   2018-01-23 19:59:56
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 12:49:37
*/
import React        from 'react';
import { Link }     from 'react-router-dom';

class NavTop extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        onWhich:"main"
      }
    }

    switchFocus(e){

      let onWhich = '';
      switch(e.currentTarget.id) {
           case "main":
              onWhich="main"
              break;
           case "exam":
              onWhich="main"
              break;
           case "profolio":
              onWhich="profolio"
              break;
           case "login":
              onWhich="login"
              break;
           default:
              onWhich="main"
      } 
      this.setState({onWhich:onWhich});
    }


    render(){

        return (
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                  <a className="navbar-brand" href="/">大熊的AWS考试加油站</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      
                      <li className={`nav-item ${this.state=="main"?"active":""}`}>
                        <Link id="main" className="nav-link" to="/" onClick={(e)=>this.switchFocus(e)}>首页<span className="sr-only"></span></Link>
                      </li>
                     <li className={`nav-item ${this.state=="exam"?"active":""}`}>
                        <Link id="exam" className="nav-link" to="/subjects/charge" onClick={(e)=>this.switchFocus(e)}>AWS题库<span className="sr-only"></span></Link>
                      </li>
                      <li className={`nav-item ${this.state=="profolio"?"active":""}`}>
                        <Link id="profolio" className="nav-link" to="/exam/1" onClick={(e)=>this.switchFocus(e)}>备考资料<span className="sr-only"></span></Link>
                      </li>
                        <li className={`nav-item ${this.state=="login"?"active":""}`}>
                            <Link id="login" className="nav-link" to="/login" onClick={(e)=>this.switchFocus(e)}>登录<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                  </div>
                </div>
              </nav>
        );
    }
}

export default NavTop;