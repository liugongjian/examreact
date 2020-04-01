/*
* @Author: Rosen
* @Date:   2018-01-23 18:03:55
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:41:51
*/

import React        from 'react';
import { Link }     from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
            <div>
             <header className="bg-primary py-5 mb-5">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-lg-12">
                      <h1 className="display-4 text-white mt-5 mb-2">为AWS考试的同学加点油</h1>
                      <p className="lead mb-5 text-white-50">记录自己备考AWS认证过程中的点点滴滴，同时分享给也有同样目标的你</p>
                    </div>
                  </div>
                </div>
              </header>


              <div className="container">

                <div className="row">
                  <div className="col-md-8 mb-5">
                    <h2>这里有什么？</h2>
                    <hr/>
                    <p>这里有最新的AWS认证模拟题、真题以及各种备考中文资料，同学们需要请自取</p>
                    <p>仅最新的题库资料需要付费</p>
                    <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
                  </div>
                  <div className="col-md-4 mb-5">
                    <h2>公众号</h2>
                    <hr/>
                    <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                  </div>
                </div>

               <div className="row">
                  <div className="col-md-4 mb-5">
                    <div className="card h-100">
                      <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                      <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-5">
                    <div className="card h-100">
                      <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                      <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-5">
                    <div className="card h-100">
                      <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                      <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                      </div>
                    </div>
                  </div>
                </div>
 
              </div>
            </div>
  
        );
    }
}

export default Home;