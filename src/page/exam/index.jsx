import React        from 'react';
import Subject      from 'page/exam/subject/index.jsx';
import Question     from 'page/exam/question/index.jsx';
import ExamService  from 'service/exam-service.jsx';
import MUtil        from 'util/mm.jsx';

import './index.css';


const _examservice = new ExamService();
const _mm = new MUtil();

class Exam extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            question:{
                subject_id: this.props.match.params.subject_id || 1,
                exam_id: 1,
                question_totalcount: 0,
                question_no: 1,
                question_desc: "",
                question_options: [],
                correct_option: "",
                question_explain: ""
            },
            subject:{
                subjectInfo:{
                    "subjectId": this.props.match.params.subject_id || 1,
                    "subjectName": ""
                },
                examInfos:[]
            },
            activeExamId:1
        }
    }

    componentDidMount(){
        this.loadSubject(this.state.question.subject_id);
        this.loadSingleQuestion(this.state.question.subject_id, this.state.question.exam_id, this.state.question.question_no);
    }

    loadSingleQuestion(subject_id,exam_id,quetion_no){
        _examservice.getAQuestion(subject_id, exam_id, quetion_no).then((res) =>{this.setState({
            question:res,
            activeExamId:res.exam_id
        })} , (errMsg)=>{_mm.errorTips(errMsg)})

    }

    loadSubject(subject_id){
        _examservice.getSubjectsInfo(subject_id).then((res) =>{this.setState({
            subject:res,
        })} , (errMsg)=>{_mm.errorTips(errMsg);})
    }

    render(){

        return (
            <div className="container examcontainer">
                <div className="row examrow">
                    <Subject activeExamId={this.state.activeExamId} 
                            subject={this.state.subject} 
                            onLoadSubject={this.loadSingleQuestion.bind(this)}></Subject>
                    <Question question={this.state.question} onloadSingleQuestion={this.loadSingleQuestion.bind(this)}></Question>
                </div>
            </div>
        );
    }
}

export default Exam;