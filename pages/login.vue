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
                        <input type="text" name="id" placeholder="ID" required />
                        <input type="password" name="password" placeholder="PW" />
                        <input type="submit" value="LOGIN" />
                    </form>
                    <ul class="clearfix">
                        <li>아이디 찾기</li>
                        <li>비밀번호 찾기</li>
                    </ul>
                </div>
                <div class="sign_up_inlogin">
                    <h4>회원가입</h4>
                    <p>싸방 회원에게만 제공되는 다양한 혜택을 누려보세요.</p>
                    <Link href="/signup"><a><button>JOIN US</button></a></Link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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
              margin-top:70px;
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