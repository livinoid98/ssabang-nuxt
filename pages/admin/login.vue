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
                <h3>관리자 로그인</h3>
                <p>일반 사용자는 접근이 불가능합니다</p>
            </div>
            <div class="login_content">
                <div class="login">
                    <form action="/login" method="POST">
                        <h4>로그인</h4>
                        <input type="text" name="id" placeholder="ID" v-model="id" required/>
                        <input type="password" name="password" v-model="password" placeholder="PW" />
                        <input type="submit" value="LOGIN" @click.prevent="loginAdmin"/>
                    </form>
                    <ul class="clearfix">
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/assets/api/http.js";

export default {
    name: '',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() {},
    methods: {
        async loginAdmin(){
            const id = document.querySelector("input[type='text']").value;
            const password = document.querySelector("input[type='password']").value;

            let response = await http.post('/api/manager/login',{
                userId : id,
                userPw : password,
            });

            console.log(response.data.manager);

            try{
                this.$store.commit('saveLoginManager', response.data.manager);
                this.$router.push('/');
            }catch(e){
                this.$router.push('/admin/login');
            }


        }
    },
};
</script>

<style scoped lang="scss">
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
            text-align: center;
              h4{
                  font-size:16px;
                  font-weight:700;
                  color:#535353;
              }
              input{
                  width:254px;
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
              margin-left:28px;
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
  }
}
</style>