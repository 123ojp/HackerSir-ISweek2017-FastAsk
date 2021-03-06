document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js'></script>");
var NID;
var middle=0;
var score = 0;
var submit_time = 0;
var question={
	q_ask:"",
	q1:"",
	q2:"",
	q3:"",
	q4:"",
	ans:""
};

var question_lab=[
	["下列哪項是處理垃圾郵件的方法？","執行附加檔案，查看內容","回覆要求寄件者停止","直接刪除","轉寄給朋友看","直接刪除","1"],
	["為了避免收到垃圾郵件，平時該？","定時更新修補程式","定時更新病毒碼","安裝防火牆","不隨意在網路上留下電子郵件","不隨意在網路上留下電子郵件","2"],
	["上網的電腦沒有安裝防火牆，可能產生什麼風險？","電腦檔案被破壞","個人資料被竊取","電腦被駭客操控","其餘三者皆是","其餘三者皆是","3"],
	["有些作業系統會幫我們自動更新，請問：為什麼需要進行更新？","提升遊戲執行速度","清除電腦病毒","修補漏洞，降低被駭風險","讓大家知道他有在做事","修補漏洞，降低被駭風險","4"],
	["在使用公用WiFi時，下列何者網路行為是安全的？","收發電子郵件","登入網路銀行進行轉帳","查詢資料，不登入帳號密碼","登入網拍網站購物","查詢資料，不登入帳號密碼","5"],
	["為了避免資料遺失，下列何者備份方法是<b>錯</b>的？","將資料複製到外接硬碟","將資料複製到同一顆硬碟","將資料燒進光碟","將資料上傳至檔案伺服器","將資料複製到同一顆硬碟","6"],
	["當網址列出現https時，代表網站具有何者功能？","資料是加密傳輸的","具有網路信賴付款機制","不會有網路交易糾紛","只要出現這個就絕對安全","資料是加密傳輸的","7"],
	["在購物平台上，為何需要注意網站有無安全認證(https)？","確保賣家有支付運費","代表商品比較便宜","保護電腦不會中毒","確保個資傳輸時有加密保護","確保個資傳輸時有加密保護","8"],
	["電腦使用到一半要離開座位時，怎麼做比較安全？","請附近的人幫我顧","貼上「暫離、請勿觸碰」的標籤","關閉螢幕電源","將電腦鎖定，設定保護密碼","將電腦鎖定，設定保護密碼","9"],
	["開啟不常見的網站時，跳出提醒顯示你中獎該怎麼做？","中獎開心領取","不理他，一定是釣魚網站","馬上填個資","轉傳網頁給朋友一起抽","不理他，一定是釣魚網站","10"],
	["如果中了勒索病毒怎麼辦？","立即關機，防止加密更多檔案","繼續使用電腦，查詢解決方法","不理會","把檔案copy出來在關機","立即關機，防止加密更多檔案","11"],
	["在網站上填資料時要注意什麼？","確認網址正確","確認傳輸是否加密(https)","是否在個人電腦上使用","其餘三者皆是","其餘三者皆是","12"],
	["下列何者密碼型式較安全？","使用自己生日","使用大小寫與數字，每個網站密碼不同","每個網站使用同組帳密","使用喜歡的人的生日","使用大小寫與數字，每個網站密碼不同","13"],
	["今年5月，哪一隻程式在國際網路上廣泛傳播，感染全球許多執行Windows系統的裝置？","Don’t Wanny Cry","WannaCry","Don’t Cry","VirusCry","WannaCry","14"],
	["下列哪項不是攻擊方法？","SQL Injection","Cross-Site Scripting","Port Forwarding","Server-Side Request Forgery","Port Forwarding","15"],
	["防火牆(Fire Wall)主要作用是？","防火","防搶","防止資料被盜與病毒感染","硬體上的設施","防止資料被盜與病毒感染","16"],
	["UPS的主要功能為？","消除靜電","傳送資料 ","防止電源中斷","備份資料","防止電源中斷","17"],
	["為了避免電腦淪為駭客可操控的殭屍電腦，應該安裝哪項最基本的防護軟體？","分享軟體","防毒軟體與防火牆","反垃圾郵件軟體","阻擋彈跳視窗軟體","防毒軟體與防火牆","18"],
	["開啟夾帶病毒的垃圾郵件，可能會造成哪一種危害？","電腦中毒","執行不明的程式","遭安裝木馬程式","其餘三者皆是","其餘三者皆是","19"],
	["在學校等地方使用公共電腦，該注意哪一種可能的風險？","若存取檔案，可能感染病毒","若輸入密碼，可能被側錄","若輸入個人資料，可能外洩被盜用","其餘三者皆是","其餘三者皆是","20"],
	["下面哪一項<b>不是</b>預防感染勒索病毒的方法？","定期更新軟體","常上購物網站","只打開信任的郵件","安裝防護軟體","常上購物網站","21"],
	["電腦病毒通常附著在？","開機磁碟內","其他程式中","WORD檔案中","其餘三者皆是","其餘三者皆是","22"],
	["何者為作業系統？","Microsoft Windows NT","Microsoft Surface","Microsoft Visual","Microsoft Office","Microsoft Windows NT","23"],
	["何謂滲透測試？","模擬駭客手法攻擊","敲電腦試硬度","拿水測試電腦防水性","觀看電腦內部資料","模擬駭客手法攻擊","24"],
	["何謂弱掃工具？","ZAP","TimeTree","7-Zip","Packet Tracer","ZAP","25"],
	["下列何者<b>不是</b>電腦中毒後所發生之現象？","檔案長度無故變長","無法開機","電源突然中斷","鍵盤無法輸入資料","電源突然中斷","26"],
	["哪一項<b>不是</b>勒索病毒<b>主要</b>的感染途徑？","網路廣告","被駭客入侵的網站","隨身碟","惡意郵件","隨身碟","27"],
	["勒索病毒危害很大, 是因為？","沒有人可以躲過它","它是結合最新科技與最新技術的軟體","很多人沒有裝防護軟體","它會將硬碟整個格式化","很多人沒有裝防護軟體","28"],
	["何者是勒索病毒曾經使用過的手法？","網路釣魚信件","針對瀏覽器或作業系統上的漏洞","內含惡意程式的網路廣告或論壇文章","其餘三者皆是","其餘三者皆是","29"],
	["以下防毒概念何者<b>錯誤<b>？","只要被感染過以後就沒事了","用無毒的開機光碟開機","使用隨身碟前先掃毒","安裝防毒軟體","只要被感染過以後就沒事了","30"],

];
var now_question = Math.floor(Math.random() * (question_lab.length));
var maxques = 12; //要顯示的題數
function set_question(){
	maxques -= 1;
	if (maxques==-1){
		$("#Q1").hide();
		$("#timer").hide();
		$("#score").hide();
		$("#end_page").show();
		$("#final_score").text(score);
		final_score_post();
		timmerr.pause();
	}
	else {
		question.q_ask=question_lab[now_question][0];
		question.q1=question_lab[now_question][1];
		question.q2=question_lab[now_question][2];
		question.q3=question_lab[now_question][3];
		question.q4=question_lab[now_question][4];
		question.ans=question_lab[now_question][5];
		question.num=question_lab[now_question][6];
		question_lab.splice(now_question,1);
		now_question = Math.floor(Math.random() * (question_lab.length));
	}
}
function show_question(){
	document.getElementById("q1_q").innerHTML=question.q_ask;
	document.getElementById("q1_ans_0").value=question.q1;
	document.getElementById("q1_ans_1").value=question.q2;
	document.getElementById("q1_ans_2").value=question.q3;
	document.getElementById("q1_ans_3").value=question.q4;
}

function checknid(string) {
    re1 = /^[dempDEMP]{1}0[0-9]{6}$/;
    re2 = /^[tT][0-9]{5}$/
    if (re1.test(string)||re2.test(string)){
        return true;
    }
    else{
        return false;
    }
}

function post_answer(post_Q,post_A,post_qnum){
    $.ajax({
        type: "post",

        http_headers:
	    {
	        "Access-Control-Allow-Origin": "*"
        },
        data: {
            "NID":NID,
            "method": "write",
            "Q_name": post_Q,
            "Q_ans": post_A,
            "Q_num":post_qnum
        },
        url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbx6XQT0wn5mtgQ0Pq40rfhYvIhLbOnEUJxUXr9sqDW-LKpiofWY/exec" // 填入網路應用程式網址
    });
}

$(document).ready(function(){
	$(".Question_page").each(function(index,item){
		$(item).hide();
	})
    $("#timer").hide();
	$("#score").hide();
	$("#end_page").hide();
	$("#end_page_time").hide();
	$("#show_wrong").hide();
	/*********************test*************************/
	//$("#start_div").hide();
	//$("#score").show();
	//$("#Q4").show();
	//reorder_Q2();
	//$("#end_page").show();
});

/***********************Start Page*******************************/
$("#start_btn").click(function(){
	if (checknid(document.getElementById("input_nid").value)){
		NID=document.getElementById("input_nid").value;
		middle=1;
		timmerr.start()
		$("#start_div").hide();
	    $("#timer").show();
		$("#score").show();
		$("#Q1").show();
		reorder();
	}
	else{
		alert("NID格式錯誤");
		$("#start_div").show();
	}
});

$('#input_nid').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
		if (checknid(document.getElementById("input_nid").value)){
			NID=document.getElementById("input_nid").value;
			middle=1;
			timmerr.start()
			$("#start_div").hide();
		    $("#timer").show();
			$("#score").show();
			$("#Q1").show();
			reorder();
		}
		else{
			alert("NID格式錯誤");
			$("#start_div").show();
		}
    }
});

function startOAO(){
	if (checknid(document.getElementById("input_nid").value)){
		NID=document.getElementById("input_nid").value;
		middle=1;
		timmerr.start()
		$("#start_div").hide();
	    $("#timer").show();
		$("#score").show();
		$("#Q1").show();
		reorder();
	}
	else{
		alert("NID格式錯誤");
	}

}

/****************************Q1*********************************/
//each time reorder the element
function reorder(){
	var order =[-1,-1,-1,-1];
	set_question();
	show_question();
	$("input:button[name=Question1]").each(function(){
        var rand = Math.floor((Math.random()*10))%4;
        while(order[rand] != -1){
            rand = Math.floor((Math.random()*10))%4;
        }
        order[rand] = this.parentElement;
	});
	$("#Q1_form").empty();
	for(let i = 0; i < 4; i++){
		$("#Q1_form").append(order[i]);
	}
	next();
}

function next(){
	$("input:button[name=Question1]").click(function(index,val){
		submit_time++;
		var answer = $(this).val();
		if(submit_time == 1 && answer == question.ans){
			score++;
			$("#score_span").text(score);
			$("#this_span").text("1");
		}
		else {
			//score--;
			$("#score_span").text(score);
			ans_lab.push([question.q_ask,question.ans]);
			maxans+=1;
		}
		$("button.Q1").show();
		var className = $(this).attr("class");
		$('p.'+className).show();
	});
    $("#q1_ans_0").click(function(){
        submit_time = 0;
        post_answer(question.q_ask,question.q1,question.num);
        reorder();
    });
    $("#q1_ans_1").click(function(){
        submit_time = 0;
        post_answer(question.q_ask,question.q2,question.num);
        reorder();
    });
    $("#q1_ans_2").click(function(){
        submit_time = 0;
        post_answer(question.q_ask,question.q3,question.num);
        reorder();
    });
    $("#q1_ans_3").click(function(){
        submit_time = 0;
        post_answer(question.q_ask,question.q4,question.num);
        reorder();
    });
}


/*******************************End*********************************/
$("#again_btn").click(function(){
	window.location.reload();
});
$("#again_btn_time").click(function(){
    window.location.reload();
});
/******************************Timer********************************/
var timmerr= new Vue({
    el: "#app",
    data: {
        time: 60,
        initial: 60,
        started: false
    },

    methods: {
        start:function() {
            var beeps = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/240258/endbeeps.wav');
            if (middle==1){
                this.interval = setInterval(() => {
                    this.time -= 1;
                    if (this.time === 0) {
                        this.started = false;
                        beeps.play();
                        $("#Q1").hide();
                        $("#timer").hide();
                        $("#score").hide();
                        $("#end_page_time").show();
												final_score_post();
                        $("#final_score_time").text(score);
                    }
                }, 1000);
                this.started = true;
            }
        },

        pause:function() {
            clearInterval(this.interval);
            this.started = false;
        }
    }
})


var show_answer={
	q_ask:"",
	q1:"",
	q2:"",
	q3:"",
	q4:"",
	ans:""
};
var maxans=0;
var ans_lab=[];

function set_show_ans(){

	if (maxans==now_question){
		$("#Q1").hide();
		$("#timer").hide();
		$("#score").hide();
		$("#end_page").show();
		$("#final_score").text(score);
		$("#show_wrong").hide();
	}
	else {
		show_answer.q_ask=ans_lab[now_question][0];
		show_answer.ans=ans_lab[now_question][1];
		now_question +=1;
	    show_show_ans();
	}
}

function show_show_ans(){
	document.getElementById("show_wrong_q").innerHTML=show_answer.q_ask;
	document.getElementById("show_wrong_ans_0").value=show_answer.ans;
}

function show_wrong_main(){
	if (ans_lab.length>0){
		$("#timer").hide();
		$("#score").hide();
		$("#end_page").hide();
		$("#end_page_time").hide();
		$("#show_wrong").show();
		now_question=0;
		set_show_ans();
	}
	else {
		alert("你沒有錯任何題目喔")
	}
}
function final_score_post(){
    $.ajax({
        type: "post",

        http_headers:
	    {
	        "Access-Control-Allow-Origin": "*"
        },
        data: {
            "NID":NID,
            "method": "finalscore_write",
              "score":score
        },
        url: "https://script.google.com/a/mail.fcu.edu.tw/macros/s/AKfycbx6XQT0wn5mtgQ0Pq40rfhYvIhLbOnEUJxUXr9sqDW-LKpiofWY/exec" // 填入網路應用程式網址
    });
}
