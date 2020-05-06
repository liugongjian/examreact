/*
* @Author: Rosen
* @Date:   2018-01-23 18:03:55
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:41:51
*/

import React        from 'react';
import { Link }     from 'react-router-dom';
import './index.css'

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
                  </div>
                  <div className="col-md-4 mb-5">
                    <h2>公众号</h2>
                    <hr/>
                    <img className="card-img-top" src="../../../img/2020123412168_wechatQR.png" alt=""/>
                  </div>
                </div>

               <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <img className="card-img-top homepic" src="../../../img/business-check-list.jpg" alt=""/>
                      <div className="card-body">
                        <h4 className="card-title">备考题库</h4>
                        <p className="card-text">在备考过程中，真题是最好的水平检测工具，我们一直在<b>收集</b>、<b>更新</b>最好的题目给小伙伴们.</p>
                      </div>
                      <div className="card-footer">
                        <Link className="btn btn-primary" to="/subjects/charge">去看看</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="card h-100">
                      <img className="card-img-top homepic" src="../../../img/Untitled-design-12-1.jpg" alt=""/>
                      <div className="card-body">
                        <h4 className="card-title">文档资料</h4>
                        <p className="card-text">知其然，更知其所以然，我们不断更新最新的<b>AWS文档</b>供小伙伴们学习，如有疑问可通过微信公众号与我们联络</p>
                      </div>
                      <div className="card-footer">
                        <Link className="btn btn-primary" to="#">去看看</Link>
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