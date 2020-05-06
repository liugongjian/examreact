/*
* @Author: Rosen
* @Date:   2018-01-31 13:19:15
* @Last Modified by:   Rosen
* @Last Modified time: 2018-02-04 22:52:34
*/
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class BuyService{
    // 获取商品详情
    getAQuestion(order_data){
        return _mm.request({
            type    : 'get',
            url     : '/manage/exam',
            data    : order_data
        });
    }

}

export default BuyService;