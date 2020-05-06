import React        from 'react';
import Subject      from 'page/exam/subject/index.jsx';
import Grading      from 'page/exam/grading/index.jsx';
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
            activeExamId:1,
            currentQuestionNo:1,
            choosed_option:'',
            submitting:false
        };
        this.answer_list = [];
        this.question_list = [];
        this.freeQuestionAmount = 5;

    }

    getSubjectStatus(){

        //return true if the order expires
        let order_subjects = _mm.getStorage('order_subjects');

        for (let i=0; i < order_subjects.length; i++) {
        

            if (order_subjects[i].subjectInfo.subjectId == this.state.question.subject_id){

                return order_subjects[i].expire;
            }
        }
    }

    componentDidMount(){
        this.loadSubject(this.state.question.subject_id);
        this.loadSingleQuestion(this.state.question.subject_id, this.state.question.exam_id, this.state.question.question_no);
        if (!this.getSubjectStatus()) {
            
            alert( "您尚未购买该科目，仅可试看前"+this.freeQuestionAmount+"题");
        }
    }

    componentWillUnmount(){
        _mm.removeStorage('order_subjects');
        _mm.removeStorage('answer_list');
        _mm.removeStorage('question_list');
        _mm.removeStorage('exam_id');
        _mm.removeStorage('subject_id');
    }

    checkAndAddQuestionList(question){

        for(let j=0;j<this.question_list.length;j++){

            if(question.question_no == this.question_list[j].question_no){
                return;
            }
        }
        this.question_list = [question,...this.question_list];
        _mm.setStorage('question_list',this.question_list);


    }

    loadSingleQuestion(subject_id,exam_id,quetion_no){
        if( this.getSubjectStatus() ) {
            _examservice.getAQuestion(subject_id, exam_id, quetion_no).then((res) =>{
                this.setState({
                    question:res,
                    activeExamId:res.exam_id,
                    currentQuestionNo:quetion_no
                }),this.checkAndAddQuestionList(res)
                } , (errMsg)=>{_mm.errorTips(errMsg)})
        } else if(!this.getSubjectStatus() && quetion_no < this.freeQuestionAmount) {
         
            _examservice.getAQuestion(subject_id, exam_id, quetion_no).then((res) =>{
                this.setState({
                    question:res,
                    activeExamId:res.exam_id,
                    currentQuestionNo:quetion_no
                }),this.checkAndAddQuestionList(res)
                } , (errMsg)=>{_mm.errorTips(errMsg)});

        }else{
            alert("您尚未购买该科目，仅可试看前"+this.freeQuestionAmount+"题");
        }

    }



    saveAndLoadNextQuestion(subject_id,exam_id,question_no,choosed_option){
        //console.log('saveAndLoadNextQuestion--->this:',this);
        this.loadSingleQuestion(subject_id,exam_id,question_no+1); 

        //console.log(this.answer_list);
        for(let j=0;j<this.answer_list.length;j++){

            if(question_no == this.answer_list[j].question_no){
                this.answer_list.splice(j,1);
                j--;
            }
        }
        //console.log(this.answer_list);

        this.answer_list = [{
            question_no:question_no,
            choosed_option:choosed_option},...this.answer_list];


         _mm.setStorage('subject_id',this.state.question.subject_id);
         _mm.setStorage('exam_id',this.state.question.exam_id);
         _mm.setStorage('answer_list',this.answer_list);

    }



    loadSubject(subject_id){
        _examservice.getSubjectsInfo(subject_id).then((res) =>{this.setState({
            subject:res,
        })} , (errMsg)=>{_mm.errorTips(errMsg);})
    }

    submitExamResult(){
        this.setState({
            submitting:true
        });
    }

    closeModal(){
        this.setState({
            submitting:false
        });
    }


    checkExamResult(){
        const {subject_id,exam_id} = this.state.question;
        _mm.setStorage('subject_id',subject_id);
        _mm.setStorage('exam_id', exam_id);
        _mm.setStorage('answer_list',this.answer_list);
        _mm.setStorage('question_list',this.question_list);
        window.location.href = '/examresult';
    }

    render(){
       
        return (
            <div className="modal-container" >
                <div className="container examcontainer">
                    <div className="row examrow">
                        <Subject activeExamId={this.state.activeExamId} 
                                subject={this.state.subject} 
                                onLoadSubject={this.loadSingleQuestion.bind(this)}></Subject>
                        <Question currentQuestionNo={this.state.currentQuestionNo} 
                                    question={this.state.question} 
                                    onloadSingleQuestion={this.loadSingleQuestion.bind(this)} 
                                    onSaveOneQuestion={this.saveAndLoadNextQuestion.bind(this)}
                                    onSubmitExamResult={this.submitExamResult.bind(this)}></Question>
                    </div>
                </div>
                <Grading submitting={this.state.submitting} 
                         onCloseModal={this.closeModal.bind(this)}
                         onCheckExamResult={this.checkExamResult.bind(this)}></Grading>
            </div>
            
        );
    }
}

export default Exam;