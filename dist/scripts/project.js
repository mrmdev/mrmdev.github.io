/*
 *	项目的js接口文件，这里包含了所有前端交互的js接口，
 *	js全部返回了对应的模拟的数据。我们会完成里面里面数据的请求部分，
 *	前端可以根据这个js文件先行开发，前端需要编写自己的js方法
 *	前端把完整的素材给我们之后，我们替换这个js文件就可以联调。
 *
 */
 
 /*
 * 修改部分
 *   接口3.qqmenu.getCityName()的返回结果
 *        由 "data":{"city":"上海市"}        改为 "data":{"province_name":"上海市","city_name":"上海市"}
 *   接口5.qqmenu.saveUserAnswer(city_name,AnswerArr)的传入参数
 *        由qqmenu.saveUserAnswer(AnswerArr) 改为 qqmenu.saveUserAnswer(city_name,AnswerArr)
 */
 
/**
 *
 * @type {Object}
 */
var qqmenu = {
		/*	
		 * 1.分享到朋友圈并抽奖
		 * @return JSON
		 *		code     返回的状态码
		 *		message  返回的状态信息
		 *    	data 
		 *    		item 抽奖结果的状态吗,0:未中奖,1:中奖
		 *    		msg  抽奖结果的信息,未中奖或奖品的信息
		 */
		shareAndLottery : function(){
			return	{"code": 0,"message": "success","data":{"item":"1","msg":"洁面膏"}};
		},
		/*	
		 * 2.保存用户的中奖信息
		 * @param mobile - 中奖用户的手机号
		 * @return JSON
		 *		code     返回的状态码
		 *		message  返回的状态信息
		 */
		saveLotteryInfo : function(mobile){
			return	{"code": 0,"message": "success"};
		},
		/*	
		 * 3.根据IP获得用户城市
		 * @return JSON
		 *		code     返回的状态码
		 *		message  返回的状态信息
		 *    	data
         *          province_name 后端获取IP所对应的省份		 
		 *    		city_name     后端获取IP所对应的城市
		 *
		 */
		getCityName : function(){
			return {"code": 0,"message": "success","data":{"province_name":"上海市","city_name":"上海市"}};	
		},
		/*	
		 * 4.获得登录QQ的昵称
		 * @return JSON
		 *		nick     返回的登录QQ的昵称(注意昵称过长情况,请自动隐藏过长昵称末尾字数,用...代替)
		 *
		 */
		getNick:function(){
			return {"nick":"啊啊啊啊啊啊啊啊啊啊"};
		},
		/*	
		 * 5.保存的用户答题答案
		 * @param city_name	- 用户城市
		 * @param AnswerArr	- 答案数组(数组转译json)
		          AnswerArr 
				      answer1:1,
					  answer2:1,
					  answer3:1,
					  answer4:1					  
		 * @return JSON
		 *		code     返回的状态码
		 *		message  返回的状态信息
		 *
		 */
		saveUserAnswer :function(city_name,AnswerArr){
			return {"code": 0,"message": "success"}
		}
		
}

/**
 * <L01>
 * QQ登录方法。在qq.com域名下调用这个方法会弹出QQ站点的一键登录，登录后会刷新当前页面。本地测试不会有效果，无返回值。
 */
function login(){
    if (!Act.ptlogin.isLogin()) {
        Act.ptlogin.login();
    }else{
    	return false;
    }
}


/**
 * <L02>
 * QQ退出方法。QQ在站点退出之后，会刷新当前页。
 */
function logout()
{
    Act.ptlogin.logout();
}

/**
 * <L03>
 * QQ是否登录判断方法。已登录返回true，未登录返回false
 * @return {Boolean}
 * @constructor
 */
function isLogin(){
    if (Act.ptlogin.isLogin()) {
        return true;
    }
    return false; //未登录
}

//找到url中匹配的字符串
function findInUrl(str){
	url = location.href;
	return url.indexOf(str) == -1 ? false : true;
}
//获取url参数
function queryString(key){
    return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
}
