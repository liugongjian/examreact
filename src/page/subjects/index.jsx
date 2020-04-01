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

const _examservice = new ExamService();

class Subjects extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          subjects:[],
          subject_type:this.props.match.params.subject_type
      }
    }

    componentDidMount(){
        this.loadSubjects();
    }

    loadSubjects(){
      _examservice.getSubjects().then((res) =>{this.setState({
          subjects:res,
          subject_type:'charge'
      })}, (errMsg)=>{_mm.errorTips(errMsg)})
      //_examservice.getSubjects().then((res) =>{console.log(res)} , (errMsg)=>{_mm.errorTips(errMsg)})
    }

    freeSubjects(){
      this.setState({
        subject_type: 'free'
      })
    }



  render(){

    let rating = (num) => {
      
      let rating_num = [];
      for(let i = 1; i<=num; i++){
          rating_num.push(9733)
        }        
      return rating_num;
    }
        return (

        <div className="container subjectscontainner">

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

                                      <Link to={`/exam/${subject.subjectId}`}><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
                                      <div className="card-body">
                                        <h4 className="card-title">
                                          <Link to={`/exam/${subject.subjectId}`}>{subject.subjectName}</Link>
                                        </h4>
                                        <h5>￥{subject.subjectPrice}</h5>
                                        <p className="card-text">{subject.subjectDesc}</p>
                                      </div>
                                      <div className="card-footer">
                                        <small className="text-muted">
                                          {
                                            rating(subject.subjectRating).map(
                                                (star,index)=>(String.fromCharCode(star)+' ') 
                                              )
                                          }
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                              )
                          ) : (<div><span>错误</span></div>)
                      }



                </div>

              </div>


            </div>

          </div>

              
  
        );
    }
}

export default Subjects;