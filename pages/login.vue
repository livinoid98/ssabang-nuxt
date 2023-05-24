<template>
    <div>
        <div class="main-banner">
            <div class="opacity-layer"></div>
            <div class="main-title">
                <h3>로그인</h3>
                <p>새로운 집을 만나는 첫 시작</p>
            </div>
        </div>
        <div class="login_wrap clearfix">
            <div class="login_title">
                <h3>WELCOME TO SSABANG</h3>
                <p>전·월세 부동산 직거래 플랫폼 싸방에 오신 걸 환영합니다.</p>
            </div>
            <div class="login_content">
                <div class="login">
                    <form action="/login" method="POST">
                        <h4>로그인</h4>
                        <input type="text" name="id" placeholder="ID" v-model="id" required/>
                        <input type="password" name="password" v-model="password" placeholder="PW" />
                        <input type="submit" value="LOGIN" @click="login"/>
                    </form>
                    <ul class="clearfix">
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                </div>
                <div class="sign_up_inlogin">
                    <h4>회원가입</h4>
                    <p>싸방 회원에게만 제공되는 다양한 혜택을 누려보세요.</p>
                    <nuxt-link to="/signup"><button>JOIN US</button></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/assets/api/http.js";

export default {
    name: "login",
    components:{},
    data() {
        return {
            id : "",
            password: "",
        };
    },
    head: () => ({
        title: "로그인 - 싸방",
        meta: [
            {
                name: 'title',
                content: '로그인 - 싸방',
            },
            {
                name: 'description',
                content: '싸방은 전문 부동산 중개 웹사이트로, 최상의 부동산 거래를 위한 서비스를 제공합니다. 저희 플랫폼은 매물의 노출과 홍보를 위한 다양한 마케팅 도구와 기능을 제공합니다. 우리의 목표는 고객에게 안전하고 신뢰할 수 있는 부동산 거래 환경을 제공하는 것입니다. 저희 웹사이트는 다양한 부동산 매물 정보를 제공하며, 구매자와 판매자가 원활하게 소통하고 거래를 진행할 수 있는 플랫폼을 제공합니다.',
            },
            {
                name: 'keywords',
                content: '싸방, 부동산 중개 플랫폼, 부동산, 매매, 시세, 부동산 시세, 로그인, 프로모션, 마케팅'
            }
        ],
    }),
    methods:{
        async login(e){
            e.preventDefault();

            const id = document.querySelector("input[name='id']").value;
            const password = document.querySelector("input[name='password']").value;

            if(id == ""){
                alert("아이디를 입력해주세요.");
                return;
            }

            if(password == ""){
                alert("패스워드를 입력해주세요.");
                return;
            }
            
            await http.post('/api/user/login', {
                userId: this.id,
                userPw: this.password,
            }).then((data) => {
                if(data.data.user === null){
                    alert("아이디 및 비밀번호를 다시 확인해주세요.");
                    this.$router.push('/login');
                }else{
                    try{
                        this.$store.commit('saveLogin', data.data.user);
                        this.$router.push('/');
                    }catch(err){
                        this.$router.push('/login');
                    }
                }
                
            })
        },
    },
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
            text-align: center;
        }
        p{
            @include font(14px, 400, #fff);
            margin-top:9px;
            align-items: center;
        }
    }
}

.login_wrap{
  width:1200px;
  margin:0 auto;
  margin-top:120px;
  margin-bottom: 150px;
  .login_title{
      width:100%;
      margin-top:58px;
      text-align:center;
      h3{
          font-size:26px;
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
  .login_content{
      display:flex;
      justify-content:center;
      margin-top:36px;
      .login{
          width:300px;
          form{
              h4{
                  font-size:16px;
                  font-weight:700;
                  color:#535353;
              }
              input{
                  width:250px;
                  height:40px;
                  margin-top:12px;
                  border:1px solid #c4c4c4;
                  box-sizing: border-box;
                  padding:10px;
                  &:nth-child(4){
                      width:257px;
                      background-color:#999999;
                      font-size:15px;
                      font-weight:700;
                      color:#fff;
                      cursor:pointer;
                  }
              }
          }
          ul{
              margin-top:10px;
              li{
                  float:left;
                  margin-left:6px;
                  font-size:12px;
                  font-weight:400;
                  color:#999;
                  cursor:pointer;
                  &::after{
                      content:"   /";
                  }
                  &:last-child::after{
                      content:"";
                  }
                  &:nth-child(1){
                      margin-left:0px;
                  }
              }
          }
      }
      .sign_up_inlogin{
          width:300px;
          h4{
              font-size:16px;
              font-weight:700;
              color:#535353;
              margin-top:4px;
          }
          p{
              margin-top:10px;
              font-size:12px;
              font-weight:300;
              line-height:16px;
              color:#4f4f4f;
          }
          button{
              width:257px;
              height:40px;
              margin-top:86px;
              border:1px solid #c4c4c4;
              background-color:#999999;
              font-size:15px;
              font-weight:700;
              color:#fff;
              cursor:pointer;
          }
      }
  }
}
</style>