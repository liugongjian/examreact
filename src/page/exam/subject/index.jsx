import React        from 'react';
import { Link }     from 'react-router-dom';
import Exam         from 'service/exam-service.jsx';
import MUtil        from 'util/mm.jsx';
import './index.css';


const _examservice = new Exam();
const _mm = new MUtil();

class Subject extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const indexs = [];

        for(let i = 1 ; i <= this.props.subject.examInfos.length ; i++){

            if (this.props.subject.examInfos[i-1].examId == this.props.activeExamId){
                indexs.push(
                    <a onClick={() => this.props.onLoadSubject(this.props.subject.subjectInfo.subjectId, i ,1)} key={i} className="list-group-item active">
                      <i className="glyphicon glyphicon-flag"></i><span className="exam-title">测试题{i}</span></a>
                );
              }else {
                indexs.push(
                    <a onClick={() => this.props.onLoadSubject(this.props.subject.subjectInfo.subjectId, i ,1)} key={i} className="list-group-item">
                      <i className="glyphicon glyphicon-flag"></i><span className="exam-title">测试题{i}</span></a>
                );
            }
        }
        return (
            <div className="col-md-3 subject-box">
                <h4 className="subject-title">{this.props.subject.subjectInfo.subjectName}</h4>
                <div className="list-group">
                  {indexs}
                </div>
            </div>
        );
    }
}

export default Subject;