import React        from 'react';
import MUtil        from 'util/mm.jsx';
import {Modal,Button} from 'react-bootstrap';


const _mm = new MUtil();

class Purchase extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
       
        return (
            <div>
                <Modal 
                  show={this.props.purchasing} 
                  onHide={()=>this.props.onCloseModal()}
                  bsSize="small">

                  <Modal.Header>
                    <Modal.Title>购买题库</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <b>请扫码付款：99元</b>
                    <img/>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button onClick={()=>this.props.onCloseModal()}>取消</Button>
                  </Modal.Footer>         
                </Modal> 
            </div>
            
        );
    }
}

export default Purchase;