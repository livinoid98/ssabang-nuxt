<template>
    <div>
        <div class="main-banner">
			<div class="opacity-layer"></div>
			<div class="main-title">
				<h3>회원가입</h3>
				<p>새로운 집을 만나는 첫 시작</p>
			</div>
		</div>
		<div class="login_title">
			<h3>JOIN US</h3>
			<p>회원가입을 환영합니다.</p>
		</div>
		<div class="sign_up">
			<div class="sign_up_title">
				<h4>기본 정보</h4>
				<p>회원가입을 위한 필수입력 항목</p>
			</div>
			<div class="sign_up_content">
				<form>
					<table>
						<tr>
							<td>아이디</td>
							<td><input type="text" name="id" required /></td>
						</tr>
						<tr>
							<td>비밀번호</td>
							<td><input type="password" name="password" required /></td>
						</tr>
						<tr>
							<td>비밀번호 확인</td>
							<td><input type="password" name="passwordCheck" required/></td>
						</tr>
						<tr>
							<td>이름</td>
							<td><input type="text" name="name" required/></td>
						</tr>
                    </table>

                    <div class="sign_up_title">
                        <h4>선택 정보</h4>
                        <p>선택정보를 입력하시면 3개월 안에 사용하실 수 있는 쿠폰을 드립니다.</p>
                    </div>

                    <table>
						<tr>
							<td>휴대전화</td>
							<td>
                                <input type="tel" name="phone"/>
                            </td>
						</tr>
						<tr>
							<td>이메일</td>
							<td><input type="email" name="email"/></td>
						</tr>
                        <tr>
							<td>주소</td>
							<td class="address-content">
                                <select class="sido" @change="selectSi">
                                    <option>광역시</option>
                                    <option v-for="(si,index) in si" :key="index" :si="si" :value="si.dongCode">{{ si.sidoName }}</option>
                                </select>
                                <select class="gugun">
                                    <option>구/군</option>
                                    <option v-for="(gugun,index) in gugun" :key="index" :gugun="gugun" :value="gugun.dongCode">{{ gugun.gugunName }}</option>
                                </select>
                            </td>
						</tr>
                        <tr>
							<td>성별</td>
							<td>
                                <select>
                                    <option value="no">선택안함</option>
                                    <option value="male">남</option>
                                    <option value="female">여</option>
                                </select>
                            </td>
						</tr>
                        <tr>
							<td>나이</td>
							<td><input type="number" name="age"/></td>
						</tr>
					</table>
					<h4>개인정보 수집 및 이용 동의</h4>
					<textarea readOnly value="">■ 개인정보 수집항목
이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 비밀번호 질문과 답변 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일 , 기념일 , 사는지역
■ 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다..
ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
구매 및 요금 결제 , 물품배송 또는 청구지 등 발송
ο 회원 관리
불만처리 등 민원처리
ο 마케팅 및 광고에 활용
신규 서비스(제품) 개발 및 특화 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재
■ 개인정보 제공
회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
- 이용자들이 사전에 동의한 경우
- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
■ 수집한 개인정보의 위탁
싸방은 서비스 향상을 위해 관계법령에 따라 회원의 동의를 얻거나 관련 사항을 공개 또는 고지 후 회원의 개인정보를 외부에 위탁하여 처리하고 있습니다.
싸방 의 개인정보처리 수탁자와 그 업무의 내용은 다음과 같습니다.
                        
- 수탁자 : (주)삼성
- 위탁 업무 내용 : 카카오 알림톡 발송 업무
- 수집항목 : 휴대폰버호, 주문정보, 배송정보
- 보유기간 : 회원 탈퇴 시 혹은 법정 보유기간
- 수탁자 : (주)싸방
- 위탁 업무 내용 : 배송 및 C/S처리 목적을 가지고, 셀메이트 프로그램에 일시적으로 제공
- 수집항목 : 회원정보, 주문정보, 배송정보, C/S상담내역
- 보유기간 : 회원 탈퇴 시 혹은 법정 보유기간
                        
직송 등 일부 배송형태에 따라, 전자상거래소비자보호법 제 21조에 의거 협력사에 배송정보가 제공 됩니다.
■ 개인정보의 보유 및 이용기간
원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
보존 항목 : 이름 , 성별 , 로그인ID , 비밀번호 , 비밀번호 질문과 답변 , 자택 전화번호 , 자택 주소 , 휴대전화번호 , 이메일
보존 근거 : 신용정보의 이용 및 보호에 관한 법률
보존 기간 : 재구매시정보이용</textarea>
					<div class="check">
						<span>개인정보 수집 및 이용에 동의하십니까?</span>
						<input type="checkbox" name="agree" reqired/>동의함
					</div>
					<div class="submit">
						<next-link to="/"><button>취소</button></next-link>
						<input type="submit" value="회원가입" @click.prevent="submitSignup"/>
					</div>
				</form>
			</div>
		</div>
    </div>
</template>

<script>
import http from "@/assets/api/http.js";

export default {
    name: "signup",
    components:{},
    data() {
        return {
            articles: [],
            si: [],
            gugun: [],
        };
    },
    methods:{
        async submitSignup(){
            const id = document.querySelector("input[name='id']").value;
            const password = document.querySelector("input[name='password']").value;
            const passwordCheck = document.querySelector("input[name='passwordCheck']").value;
            const name = document.querySelector("input[name='name']").value;
            const phone = document.querySelector("input[name='phone']").value;
            const email = document.querySelector("input[name='email']").value;
            const sido = document.querySelector(".sido");
            let sidoValue = sido.options[sido.selectedIndex].value;
            const gugun = document.querySelector(".gugun");
            let gugunValue = gugun.options[gugun.selectedIndex].value;

            if(id == ""){
                alert("아이디를 작성해주세요.");
                return;
            }

            if(password == ""){
                alert("비밀번호를 작성해주세요.")
                return;
            }

            if(password != passwordCheck){
                alert("비밀번호가 다릅니다.");
                return;
            }

            if(name == ""){
                alert("이름을 작성해주세요.");
            }


            const phoneRegex1 = /\d{3}-\d{4}-\d{4}/;
            const phoneRegex2 = /\d{3}\d{4}\d{4}/;
            if(phone.length > 0){
                if(!phoneRegex1.test(phone) && !phoneRegex2.test(phone)){
                    alert("전화번호는 01012345678 형식에 맞춰 작성해주세요.");
                    return;
                }
            }

            const emailRegex = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
            if(email.length>0){
                if(!emailRegex.test(email)){
                    alert("이메일은 ssabang@naver.com 형식으로 작성해주세요.");
                    return;
                }
            }

            if(check.checked == false) {
                alert("개인정보 수집에 동의해주세요.");
                return;
            }

            let response = await http.post('/api/user/signup', {
                name : userName,
                userId : id,
                userPw : password,
                phone : phone,
                email : email,
                address : address,
                gender : genderValue,
                address_city: sidoValue,
                address_gu: gugunValue,
            });

            console.log(response);

        },

        async selectSi(){
            const sido = document.querySelector(".sido");
            let value = sido.options[sido.selectedIndex].value;
            let responseData = value.slice(0,2);
            let response = await http.get(`/api/map/list/juso/gugun/${responseData}`);
            this.gugun = response.data;
        },

        
    },
    async fetch(){
        let response = await http.get('/api/map/list/juso');
        console.log(response);
        this.si = response.data;
    }
}

</script>

<style lang="scss">
@import "@/assets/styles/function.scss";

.main-banner{
    @include setSize(100%, 300px);
    background-image: url("@/assets/img/main-banner.png");
    background-position: center;
    background-size: cover;
    position:relative;
    .opacity-layer{
        @include setSize(100%, 300px);
        background-color: rgba(0,0,0,0.2);
        top:0px;
        left:0px;
    }
    .main-title{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        h3{
            @include font(42px, 700, #fff);
            align-items: center;
            text-align:center;
        }
        p{
            @include font(14px, 400, #fff);
            margin-top:9px;
            align-items: center;
        }
    }
}

.wrapper {
	margin-top: 80px;
	margin-bottom: 80px;
}

.form-signup {
	max-width: 380px;
	padding: 15px 35px 45px;
	margin: 0 auto;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
}
.form-signup .form-signup-heading {
	margin-top: 20px;
	margin-bottom: 30px;
	font-size: 20px;
}
.form-signup input {
	border: none;
	border-bottom: 1px solid gray;
	margin-bottom: 30px;
	padding: 10px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
.form-signup input[type="email"] {
	margin-bottom: 20px;
}
.form-signup button {
	border: none;
	border-radius: 5px;
	margin-top: 20px;
	padding: 20px 10px;
	background-color: #129ded;
	color: white;
}

.login_title{
    width:1200px;
    margin:0 auto;
    margin-top:40px;
    text-align:center;
    h3{
        font-size:28px;
        font-weight:700;
        color:#353535;
    }
    p{
        margin-top:4px;
        font-size:12px;
        font-weight:300;
        color:#b5b5b5;
    }
}

.login_title{
    margin-top:140px;
}

.sign_up{
    width:900px;
    margin:0 auto;
    margin-bottom:140px;
    .sign_up_title{
        margin-top:20px;
        h4{
            font-size:18px;
            font-weight:700;
            color:#535353;
            display:inline-block;
        }
        p{
            font-size:12px;
            font-weight:300;
            color:#898989;
            display:inline-block;
            margin-left:8px;
        }
    }
    .sign_up_content{
        width:900px;
        form{
            table{
                width:900px;
                margin-top:16px;
                tr{
                    border-top:1px solid #e8e8e8;
                    &:first-child{
                        border-top:2px solid #e8e8e8;
                    }
                    &:nth-child(3){
                        span{
                            font-size:12px;
                            font-weight:300;
                            color:#ff0000;
                            margin-left:12px;
                        }
                    }
                    td{
                        padding:12px;
                        &:nth-child(1){
                            width:152px;
                            font-size:14px;
                            font-weight:500;
                            color:#333;
                        }
                        input{
                            width:260px;
                            height:20px;
                            border:1px solid #d9d9d9;
                        }
                        select{
                            width:266px;
                            height:26px;
                            border:1px solid #d9d9d9;
                        }
                    }
                    .address-content{
                        input{
                            width:130px;
                        }
                    }
                }
                
            }
            h4{
                font-size:12px;
                font-weight:400;
                color:#3c3c3c;
                margin-top:32px;
            }
            textarea{
                width:900px;
                height:160px;
                margin-top:8px;
                border:1px solid #747474;
                padding:10px;
                font-size:12px;
                font-weight:300;
                color:#747474;
                line-height:20px;
            }
            .check{
                margin-top:10px;
                text-align:right;
                span{
                    font-size:14px;
                    font-weight:400;
                    color:#202020;
                }
                input{
                    cursor:pointer;
                }
            }
            .submit{
                width:900px;
                margin-top:26px;
                margin-bottom:36px;
                text-align:center;
                button{
                    width:145px;
                    height:35px;
                    font-size:12px;
                    font-weight:400;
                    color:#fff;
                    border:none;
                    cursor:pointer;
                    background-color:#bfbfbf;
                }
                input{
                    width:145px;
                    height:35px;
                    margin-left:6px;
                    font-size:12px;
                    font-weight:400;
                    color:#fff;
                    border:none;
                    background-color:#3c3c3c;
                    cursor:pointer;
                }
            }
            .sign_up_title{
                > h4{
                    font-size:18px;
                    font-weight:700;
                    color:#535353;
                    display:inline-block;
                }
                p{
                    font-size:12px;
                    font-weight:300;
                    color:#898989;
                    display:inline-block;
                    margin-left:8px;
                }
            }
        }
    }
}
</style>