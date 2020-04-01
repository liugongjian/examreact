/*
* @Author: Rosen
* @Date:   2018-01-31 13:19:15
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-04 22:52:34
*/
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class ExamService{
    // 获取商品详情
    getAQuestion(subject_id,exam_id,question_no){
        return _mm.request({
            type    : 'get',
            url     : '/manage/exam',
            data    : {
                subject_id : subject_id,
                exam_id : exam_id,
                question_no: question_no
            }
        });
    }

    getSubjectsInfo(subject_id){
        return _mm.request({
            type    : 'get',
            url     : '/manage/subject',
            data    : {
                subject_id : subject_id,
            }
        });
    }

    getSubjects(){
        return _mm.request({
            type    : 'get',
            url     : '/manage/subjects',
            data    : {}
        });
    }
}

export default ExamService;