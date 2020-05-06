import React, { Component, PropTypes } from 'react';
import {Modal,Button} from 'react-bootstrap';
import { Link }     from 'react-router-dom';
import Exam         from 'service/exam-service.jsx';
import MUtil        from 'util/mm.jsx'
import './index.css';


const _examservice = new Exam();
const _mm           = new MUtil();

class Grading extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
      return(
        <div>
            <Modal 
              show={this.props.submitting} 
              onHide={()=>this.props.onCloseModal()}
              bsSize="small">

              <Modal.Header>
                <Modal.Title>考试完成</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                点击<b>【提交】</b>查看考试结果及解析，或<b>【取消】</b>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={()=>this.props.onCloseModal()}>取消</Button>
                <Button bsStyle="primary" onClick={()=>this.props.onCheckExamResult()}>提交</Button>
              </Modal.Footer>         
            </Modal> 
        </div>
      );
     }
    }

export default Grading;