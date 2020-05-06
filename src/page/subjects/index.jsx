/*
* @Author: Rosen
* @Date:   2018-01-23 18:03:55
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:41:51
*/

import React        from 'react';
import { Link }     from 'react-router-dom';
import ExamService  from 'service/exam-service.jsx';
import './index.css'
import MUtil        from 'util/mm.jsx';
import Purchase  from 'page/purchase/index.jsx';


const _mm = new MUtil();
const _examservice = new ExamService();

class Subjects extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          subjects:[],
          subject_type:this.props.match.params.subject_type,
          purchasing:false
      }
      this.purchaseSubjectId = 0;

    }

    componentDidMount(){
        this.loadSubjects();
    }

    loadSubjects(){
      _examservice.getSubjects().then((res) =>{this.setState({
          subjects:res,
          subject_type:'charge'
      }),_mm.setStorage('order_subjects', res)}, (errMsg)=>{_mm.errorTips(errMsg)})
      //_examservice.getSubjects().then((res) =>{console.log(res)} , (errMsg)=>{_mm.errorTips(errMsg)})
    }

    freeSubjects(){
      this.setState({
        subject_type: 'free'
      })
    }

    purchaseSubject(e,subjectPrice){
        this.purchaseSubjectId = e.currentTarget.id;
        let cur_timestamp = (new Date()).valueOf();//到毫秒
        let order_uid = _mm.getStorage('userInfo').username
        let order_id = this.purchaseSubjectId + order_uid + cur_timestamp 
        //订单号：科目id+用户名+时间stamp
        // let order_data = {
        //   name: this.purchaseSubjectId,
        //   pay_type: 'wechat',
        //   price: subjectPrice,
        //   order_id: order_id,
        //   order_uid: order_uid ,
        //   notify_url: 'http://www.awscert.cn',
        //   return_url:,
        //   feedback_url:,
        //   sign:,
        // }
        this.setState({
          purchasing:true
        });
    }

    closeModal(){
        this.setState({
            purchasing:false
        });
    }


  render(){

    let rating = (num) => {
      
      let rating_num = [];
      for(let i = 1; i<=num; i++){
          rating_num.push(9733)
        }        
      return rating_num;
    };

    let body_expire = (subject) => { 
      return(
                <div>                                     
                    <img className="card-img-top" src="../../../img/Badge_Solutions_Architect_Professional.png" alt="" />
                    <div className="card-body">
                      <h4 className="card-title">
                        {subject.subjectInfo.subjectName}
                      </h4>
                      <h5>￥{subject.subjectInfo.subjectPrice}</h5>
                      <p className="card-text">{subject.subjectInfo.subjectDesc}</p>

                    </div>
                </div>  
            );
    };
    let body_unexpire = (subject) => { 
      return(
                <div>                                     
                    <Link to={`/exam/${subject.subjectInfo.subjectId}`}><img className="card-img-top" src="../../../img/Badge_Solutions_Architect_Associate.png" alt="" /></Link>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to={`/exam/${subject.subjectInfo.subjectId}`}>{subject.subjectInfo.subjectName}</Link>
                      </h4>
                      <h5>￥{subject.subjectInfo.subjectPrice}</h5>
                      <p className="card-text">{subject.subjectInfo.subjectDesc}</p>
                    </div>
                </div>  
            );
    };
        return (

        <div className="container subjectscontainner modal-container">

            <div className="row">

              <div className="col-lg-3">

                <h1 className="my-4">题库类别</h1>
                
                    <div className="list-group">                   
                      <a className={this.state.subject_type == 'charge'?'list-group-item active':
                      'list-group-item'}
                      onClick={this.loadSubjects.bind(this)}>付费题库（最新）</a>
                      <a className={this.state.subject_type == 'free'?'list-group-item active':'list-group-item'} 
                      onClick={this.freeSubjects.bind(this)}>免费题库（往年）</a>
                     </div>
               
              </div>

              <div className="col-lg-9">

                <div className="row">
                      {
                          this.state.subjects ? this.state.subjects.map(
                              (subject, index) => (
                                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                    <div className="card h-100">
                                      {subject.expire ? <div className="subscript subbought">已购买</div> :
                                                        <div className="subscript subnotbought">未购买</div>}

                                      {subject.expire ? body_unexpire(subject) : body_expire(subject)}
                                      <div className="card-footer">
                                        <small className="text-muted">
                                          {
                                            rating(subject.subjectInfo.subjectRating).map(
                                                (star,index)=>(String.fromCharCode(star)+' ') 
                                              )
                                          }
                                        </small>
                                        {subject.expire ?
                                            null
                                          :
                                          <div>
                                            <Link className="btn btn-primary btn-try" to={`/exam/${subject.subjectInfo.subjectId}`}>试看</Link>
                                            <a className="btn btn-primary btn-buy" id={subject.subjectInfo.subjectId} onClick={(e)=>this.purchaseSubject(e,subject.subjectInfo.subjectPrice)}>购买</a>
                                          </div>

                                        }
                                      </div>

                                      
                                    </div>
                                  </div>
                              )
                          ) : (<div><span>错误</span></div>)
                      }



                </div>

              </div>


            </div>


            <Purchase subjectId={this.purchaseSubjectId}
                      purchasing={this.state.purchasing}
                      onCloseModal={this.closeModal.bind(this)}></Purchase>

          </div>

              
  
        );
    }
}

export default Subjects;