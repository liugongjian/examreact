/*
* @Author: Rosen
* @Date:   2018-01-23 19:59:56
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 12:49:37
*/
import React        from 'react';
import { Link }     from 'react-router-dom';

import './index.css'

class Bottom extends React.Component{
    render(){
        return (
              <footer className="py-5 bg-dark footcont">
                  <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; 大熊 2020</p>
                  </div>
              </footer>
        );
    }
}

export default Bottom;