/*
* @Author: Rosen
* @Date:   2018-01-23 19:47:59
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-01 16:28:36
*/
import React from 'react';

import NavTop from 'component/nav-top/index.jsx';
import Bottom from 'component/bottom/index.jsx';


class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <NavTop />
                    {this.props.children}
                <Bottom />
            </div>
        );
    }
}

export default Layout;