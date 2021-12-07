function validate_form() {
       var re1 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,10}$/;
       var re2 = /^[0-9]{1,4}$/;
       var re3 = /^[0-9]{1,3}$/;
       var re4 = /^[0-9]{1,9}$/;
       var re5 = /^[0-9]{1,2}$/;
       var re6 = /^[0-9]{1,2}$/;
       var re7 = /^[0-9]{1,9}$/;


       var re = /^[a-zA-Z0-9]{4,20}$/;
       var re = /^.{1,100}$/;
       var re = /^.{1,5000}$/;

       var name = document.getElementById("name");
       var phone_number_1 = document.getElementById("phone_number_1");
       var phone_number_2 = document.getElementById("phone_number_2");
       var phone_number_3 = document.getElementById("phone_number_3");
       var age = document.getElementById("age");
       var pay = document.getElementById("pay");
       var pay_day = document.getElementById("pay_day");
       var credit_grade = document.getElementById("credit_grade");
       var credit_amount = document.getElementById("credit_amount");

       if(!check(re1,name,"신청자 이름을 제대로 입력해주세요.")) {
           return false;
       }
       if(!check(re2,phone_number_1,"전화번호 첫번쨰칸을 제대로 입력해주세요.")) {
           return false;
       }
       if(!check(re2,phone_number_2,"전화번호 두번째칸을 제대로 입력해주세요.")) {
           return false;
       }
       if(!check(re2,phone_number_3,"전화번호를 세번째칸을 입력해주세요.")) {
           return false;
       }
       if(!check(re3,age,"나이를 제대로 입력해주세요.")) {
           return false;
       }
       if(!check(re4,pay,"월수입을 제대로 입력해주세요. 숫자만 입력가능합니다. (단위: 만원)")) {
           return false;
       }
       if(!check(re5,pay_day,"급여일을 제대로 입력해주세요. 1~31 까지의 숫자만 입력가능합니다.")) {
           return false;
       }
       if(!check(re6,credit_grade,"신용등급을 제대로 입력해주세요. 1~10 까지의 숫자만 입력가능합니다.")) {
           return false;
       }
       if(!check(re7,credit_amount,"대출신청금액을 제대로 입력해주세요. 숫자만 입력가능합니다. (단위: 만원)")) {
           return false;
       }

       alret("해당업체의 심사 신청이 완료되었습니다.");
   }


function validate_login() {

        var re1 = /^[a-zA-Z0-9]{1,20}$/;
        var re2 = /^.{1,20}$/;;

        var user_id = document.getElementById("user_id");
        var user_pw = document.getElementById("user_pw");

        if(!check(re1, user_id, "아이디는 영문 또는 숫자 1~20자 이내 입니다.")) {
            return false;
        }

        if(!check(re2, user_pw, "비밀번호는 1~20자 이내 입니다.")) {
            return false;
        }

    }

function check(re, what, message) {
    if(re.test(what.value)) {
        return true;
    }
    alert(message);
    what.value = "";
    what.focus();
}
