import React        from 'react';
import MUtil        from 'util/mm.jsx';

import './index.css';


const _mm = new MUtil();

class ExamResult extends React.Component{

    constructor(props){
        super(props);
        this.subject_id = _mm.getStorage('subject_id');
        this.exam_id = _mm.getStorage('exam_id');
        this.question_list = _mm.getStorage('question_list');
        this.answer_list = _mm.getStorage('answer_list');
    }


    compare(question1,question2){
        return question1.question_no-question2.question_no;
    }

    prepareData(){
        let correct_total = 0;
        for (let i = 0; i < this.question_list.length; i++) {
            for (let j = 0; j < this.answer_list.length; j++) {
                if (this.answer_list[j].question_no == this.question_list[i].question_no) {
                    this.question_list[i].choosed_option=this.answer_list[j].choosed_option;
                    correct_total += 1;
                    break;
                }
            }
        }

        this.question_list.sort(this.compare);
        return correct_total;
    }

    render(){
       const correct_total = this.prepareData();
        return (
            
        <div className="main-container">
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>测试结果</h2>
                    </div>          
                </div>
                <hr/>
                

                <div className="row">
                        <div className="col-xs-3 col-md-2">
                            <span></span>
                            &nbsp;&nbsp;
                            <strong>正确率:  {parseInt((correct_total/this.question_list[0].question_totalcount)*100)}%</strong>
                        </div>
                        <div className="col-xs-3 col-md-2">
                            <span>|</span>
                            &nbsp;&nbsp;
                            <strong>正确:  {correct_total}</strong>
                        </div>
                        <div className="col-xs-3 col-md-2">
                            <span>|</span>
                            &nbsp;&nbsp;
                            <strong>错误:  {this.question_list[0].question_totalcount-correct_total}</strong>
                        </div>
                </div>
                <hr/>
                <br/>
                <div className="col-sm-12">
                    {
                        this.question_list ? this.question_list.map(
                                    (question, index) => (
                                        <div className="question_info" key={index}>
                                            <div className="question_no">
                                                <b>问题 : {question.question_no} / {question.question_totalcount} </b>
                                            </div>
                                            <div className="question_detail"> 
                                                {question.question_desc}
                                                {
                                                    question.choosed_option == question.correct_option?
                                                    (
                                                        <div><span className="label label-success">正确</span></div>
                                                    ):(                                                        
                                                        <div><span className="label label-danger">错误</span></div>
                                                    )

                                                }
                                                <br/>
                                                <br/>
                                                <b>你的答案</b>
                                                <div>
                                                    {question.question_options.map((option,index)=>(
                                                        <span key={index}>    
                                                            <b>{option.option_name}</b>
                                                            &nbsp;
                                                            {option.option_name==question.choosed_option?
                                                                <input type="radio" checked="true" disabled/>:<input type="radio" disabled/>}
                                                            &nbsp;{option.option_desc}
                                                        </span> 
                                                        ))}

                                                </div>
                                                <br/>
                                                <br/>
                                                <b>正确答案</b>
                                                <div>    
                                                    <b>{question.correct_option}</b>
                                                </div>
                                                <br/>
                                                <b>解析</b>
                                                <div>    
                                                    {question.question_explain}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ) : (<div>页面错误</div>)
                    }



                </div>
            </div>
        </div>
        );
    }
}

export default ExamResult;