<template>
    <div>
        <div class="main-banner">
			<div class="opacity-layer"></div>
			<div class="main-title">
				<h3>공지사항</h3>
				<p>나에게 필요한 부동산 정보</p>
			</div>
		</div>
		<div class="location-graph">
			<p>공지사항 > 공지글 작성</p>
		</div>
		<div class="article-contents">
			<h3>공지사항</h3>
			<p>부동산 문서, 주소 입력 한 번이면 OK!</p>
			<div class="flex-wrap">
				<div class="article-left">
					<div class="create-img-wrap">
						<img src="@/assets/img/create_img.jpg" alt=""/>
						
					</div>
				</div>
				<div class="article-right">
					<form>
						<input type="text" name="name" placeholder="작성자" v-model="userId" />
						<input type="text" name="title" placeholder="제목" v-model="title" />
						<input type="text" name="content" placeholder="내용" v-model="content" />
						<div class="button-wrap">
							<button @click="updateNotice">작성하기</button>
							<button><a href="/notice">목록보기</a></button>
						</div>
					</form>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
  import http from "@/assets/api/http.js";
  import {mapState} from 'vuex';

  export default {
    name: "update",
    components:{},
    data() {
        return {
            userId: "",
            title : "",
            content: "",
        };
    },
    computed: {
      ...mapState(["isLogged","user", "isManaged", "manager"]),
    },  
    methods:{
        async updateNotice(e){
            e.preventDefault();
            let response = await http.put('/api/notice/update', {
                articleNo : Number(this.$route.params.no),
                userId : this.userId,
                title : this.title,
                content: this.content,
            },{
              headers:{
                "jwt-auth-token": this.$store.state.manager.authToken,
              },
            })

            if(response.data == ""){
              console.log("관리자가 아니여서 실행할 수 없습니다.");
            }
            
            if(response.data.update === true){
                this.$router.push('/notice');
            }
        }
    },
    async fetch(){
        let response = await http.get(`/api/notice/updateDetail/${this.$route.params.no}`,{
          headers:{
            "jwt-auth-token" : this.$store.state.manager.authToken,
          }
        });
        console.log(response);
        this.userId = response.data.userId;
        this.title = response.data.title;
        this.content = response.data.content;
    }
}
</script>

<style lang="scss">
@import "@/assets/styles/function.scss";

.main-banner {
    width: 100%;
    height: 300px;
    background-image: url("@/assets/img/main-banner.png");
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .main-banner .opacity-layer {
    width: 100%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0px;
    left: 0px;
  }
  .main-banner .main-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .main-banner .main-title h3 {
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    align-items: center;
  }
  .main-banner .main-title p {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    margin-top: 9px;
    align-items: center;
  }
  
  .location-graph {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E7E7E7;
  }
  .location-graph p {
    width: 1200px;
    margin: 0 auto;
    font-size: 15px;
    font-weight: 300;
    color: #CECECE;
  }
  
  .article-contents {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 160px;
    p{
      font-size:14px;
      color:#000;
      margin-top:6px;
    }
  }
  .article-contents .flex-wrap{
    display:flex;
    .article-left{
      width:600px;
      display:flex;
      justify-content:center;
      align-items:center;
      .create-img-wrap{
        width:410px;
        position:relative;
        img{
          width:100%;
          border-radius:8px;
        }
      }
    }
  }
  .article-contents h3 {
    font-size: 30px;
    font-weight: 700;
    color: #161410;
    text-align: center;
    padding-top: 112px;
  }
  .article-contents form {
    margin-top: 52px;
    font-size: 13px;
    font-weight: 400;
    color: #888;
  }
  .article-contents form input {
    width: 630px;
    height: 40px;
    box-sizing: border-box;
    padding: 30px;
    background-color:#EEECEA;
    border-radius:30px;
    border:none;
    box-sizing: border-box;
  }
  .article-contents form input:nth-child(2) {
    margin-top: 10px;
    background-color:#EEECEA;
  }
  .article-contents form input[name=content] {
    width: 632px;
    height: 480px;
    box-sizing: border-box;
    padding: 30px;
    margin-top: 10px;
    background-color:#EEECEA;
    border-radius:30px;
    border:none;
    box-sizing: border-box;
  }
  .article-contents form .button-wrap {
    width: 630px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
  .article-contents form .button-wrap button {
    width: 120px;
    height: 35px;
    cursor: pointer;
    background-color: #888;
    border: none;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
  }
  .article-contents form .button-wrap button:nth-child(1) {
    margin-right: 8px;
  }
  
</style>