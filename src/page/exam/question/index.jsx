import React        from 'react';
import { Link }     from 'react-router-dom';
import Exam         from 'service/exam-service.jsx';
import MUtil        from 'util/mm.jsx'
import './index.css';


const _examservice = new Exam();
const _mm           = new MUtil();

class Question extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    choose(e){
        this.setState({
            choosed_option:e.target.value
        })
    }

    nextQuestion() {
         // this.props.onSaveOneQuestion(this.props.question.subject_id, this.props.question.exam_id,this.props.currentQuestionNo+1);
         //console.log('nextQuestion--->this:',this);
         const {currentQuestionNo,question,onSaveOneQuestion}= this.props;
         //const {currentQuestionNo,question} = state;
         onSaveOneQuestion(question.subject_id,question.exam_id,currentQuestionNo,this.state.choosed_option);
        // const {parent} = this.props;
        // parent.setState({

        // })

    }

    render(){
        let options = ['A','B','C','D','E','F','G','H','I','J','K','L'];
        const indexs = [];
        for(let i = 1; i <= this.props.question.question_totalcount ; i++){
            /*indexs.push(<li className="question-page" key={i}><Link to={`/exam/${this.props.subject_id}/${this.props.exam_id}/${i}`} className="page-text">{i}</Link></li>);
            */
            indexs.push(
                <li className="question-page" key={i}>
                    <a onClick={() => this.props.onloadSingleQuestion(this.props.question.subject_id, this.props.question.exam_id,i)}>{i}</a>
                </li>
            );
        }
        return (
        	<div className="col-md-8 col-md-offset-1">
	            <h3 className="exam-title">测试题{this.props.question.exam_id}</h3>
				<ul className="nav nav-pills" role="tablist">
				  	<li><i className="fa fa-bullhorn"></i><span className="tiny-title">问题</span><span className="dynamic">{this.props.question.question_no}/{this.props.question.question_totalcount}</span></li>
				</ul>
    			<div>
            			<h4>{this.props.question.question_desc}</h4>
            	</div>
            	<div className="answer-box">
            		<ul>
                            {
                                this.props.question.question_options.length ? this.props.question.question_options.map(
                                    (option, index) => (
                                        <li className="answer-option" key={index}>
                                            <input type="radio" value={options[index]} onChange={(e)=>this.choose(e)}></input>
                                            <span>{option.option_desc}</span>
                                        </li>)
                                ) : (<li><span>错误</span></li>)
                            }
            		</ul>
            	</div>

                <div className="buttons-submit">
                    <button type="submit" className="btn btn-info" 
                            onClick={() =>this.nextQuestion()}>下一题
                    </button>
                    <button type="submit" className="btn btn-info" onClick={() => this.props.onloadSingleQuestion(this.props.question.subject_id, this.props.question.exam_id,this.props.currentQuestionNo+1)}>跳过</button>
                    <button type="submit" className="btn btn-success" onClick={() => this.props.onSubmitExamResult()}>结束考试</button>
                </div>

                <div className="page-button-container">
                    <ul className="list-inline">
                            {indexs}
                    </ul>
                </div>
				
	        </div>
        );
    }
}

export default Question;