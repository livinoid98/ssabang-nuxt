<template>
    <div>
        <div class="main-banner">
			<div class="opacity-layer"></div>
			<div class="main-title">
				<h3>공지사항</h3>
				<p>나에게 필요한 부동산 정보</p>
			</div>
		</div>
		<div class="notice">
            <div class=notice_title>
                <button><a href="/notice">목록</a></button>
            </div>
            <div class="notice_body">
                <span>공지사항</span>
                <h3>{{title}}</h3>
                <span>{{registTime}}</span>
                <p>{{content}}</p>
                <div class="comment-wrap">
                    <div class="comment-content-wrap">
                        <ul>
                            <li v-for="(comment, index) in comments" :key="index" :comment="comment">
                                <div class="comment-content">
                                    <div class="comment-profile-img">
                                        <img src="@/assets/img/ssabang-icon.png" alt="">
                                    </div>
                                    <div class="comment-main-wrap">
                                        <h4>{{comment.userName}}</h4>
                                        <p>{{comment.content}}</p>
                                    </div>
                                    <div class="remove-comment" @click="removeComment(`${comment.commentNo}`)">
                                        <img src="@/assets/img/close-icon.png" alt="">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="comment-write-wrap">
                        <textarea name="" id="" cols="30" rows="10" class="commentValue"></textarea>
                        <button @click="addComment(`${articleNo}`)">댓글달기</button>
                    </div>
                </div>
                <button @click="updateNotice(`${articleNo}`)" v-if="isManaged==true">수정</button>
                <button @click="deleteNotice(`${articleNo}`)" v-if="isManaged==true">삭제</button>
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/assets/api/http.js';
import {mapState} from 'vuex';

export default {
    name: "notice",
    components:{},
    data() {
        return {
            articleNo: 0,
            title: "",
            content: "",
            registTime: "",
            comments:[],
        };
    },
    computed: {
		...mapState(["isLogged","user","manager","isManaged"]),
	},
    methods:{
        async deleteNotice(articleNo){
            let stateResponse = await http.get(`/api/notice/updateDetail/${articleNo}`,{
                headers:{
                    "jwt-auth-token": this.$store.state.manager.authToken,
                }
            });
            if(stateResponse.data == ""){
                alert("관리자외에는 게시글을 삭제할 수 없습니다.");
                return;
            }
            let response = await http.delete(`/api/notice/delete/${articleNo}`,{
                headers: {
                    "jwt-auth-token": this.$store.state.manager.authToken,
                },
            });
            if(response.data.delete === true){
                this.$router.push('/notice');
            }
        },
        async updateNotice(articleNo){
            let stateResponse = await http.get(`/api/notice/updateDetail/${articleNo}`,{
                headers:{
                    "jwt-auth-token": this.$store.state.manager.authToken,
                }
            });
            console.log(stateResponse);
            if(stateResponse.data == ""){
                alert("관리자외에는 게시글을 수정할 수 없습니다.");
                return;
            }
            this.$router.push(`/update/${articleNo}`);
        },
        async addComment(articleNo){
            let commentValue = document.querySelector(".commentValue").value;
            let response = await http.post('/api/comment/insert', {
                userNo: this.$store.state.user.userNo,
                userName: this.$store.state.user.name,
                articleNo: articleNo,
                content: commentValue,
            },{
                headers:{
                    "jwt-auth-token": this.$store.state.user.authToken,
                }
            });

            if(response.data.insert == true){
                this.$router.push('/notice');
                commentValue = "";
            }
        },
        async removeComment(commentNo){
            let response = await http.delete(`/api/comment/delete/${commentNo}`, {
                headers:{
                    "jwt-auth-token": this.$store.state.user.authToken,
                }
            });

            if(response.data.delete == true){
                this.$router.push('/notice');
            }
        },
        async loadData(that){
            let response = await http.get('/api/notice/detail/' + this.$route.params.no);
            this.articleNo = response.data.detail.articleNo;
            this.title = response.data.detail.title;
            this.content = response.data.detail.content;
            this.registTime = response.data.detail.registTime;
            console.log(that);
            console.log("store: " + that.$store);
            let commentResponse = await http.get('/api/comment/list/'+ this.$route.params.no, {
                headers:{
                    "jwt-auth-token" : this.$store.state.user.authToken,
                }
            })

            this.comments = commentResponse.data.list;
            console.log(this.comments);
        }
    },
    created() {
        this.loadData(this);
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
    
    .notice{
        width:1000px;
        margin:0 auto;
        margin-top:120px;
        margin-bottom:140px;
    }
    .notice_title{
        height:40px;
        border-bottom: 1px solid #efefef;
    }
    .notice_title button{
        width:60px;
        height:30px;
        font-size: 13px;
        font-weight:500;
        color: #48453b;
        border: 1px solid #e4e4e4;
        background-color:transparent;
    }
    .notice_body{
        margin-top:10px;
        .comment-wrap{
            .comment-content-wrap{
                ul{
                    @include setSize(1000px);
                    li{
                        height:100px;
                        box-sizing: border-box;
                        padding:20px;
                        margin-top:2px;
                        border-top: 1px solid #ddd;
                        border-bottom: 1px solid #ddd;
                        @include flex(flex, flex-start, center);
                        .comment-content{
                            width:100%;
                            @include flex(flex, flex-start, center);
                            position:relative;
                            .comment-profile-img{
                                @include setSize(48px, 48px);
                                img{
                                    @include setSize(100%, 100%);
                                    border-radius: 50px;
                                }
                            }
                            .comment-main-wrap{
                                margin-left:10px;
                                h4{
                                    @include font(15px, 600, #444);
                                }
                                p{
                                    @include font(14px, 400, #ccc);
                                    margin-top:6px;
                                }
                            }
                            .remove-comment{
                                @include setSize(12px, 12px);
                                position:absolute;
                                right:4px;
                                cursor:pointer;
                                img{
                                    width:100%;
                                }
                            }
                        }
                    }
                }
            }
            .comment-write-wrap{
                @include setSize(1000px);
                @include flex(flex, center, center);
                margin-top:6px;
                textarea{
                    @include setSize(900px, 80px);
                    border:1px solid #ddd;
                }
                button{
                    @include setSize(92px, 88px);
                    margin:0px;
                    margin-left:8px;
                    @include font(14px, 400, #8B8C8E);
                    &:hover{
                        background-color:#326CF9;
                        @include font(14px, 400, #fff);
                    }
                }
            }
        }
    }
    .notice_body span:nth-child(1){
        font-size:12px;
        font-weight:400;
        color:#333;
        margin-top:30px;
        margin-left:6px;
    }
    .notice_body h3{
        font-size:22px;
        font-weight:700;
        color:#48453b;
        margin-top:12px;
        margin-left:6px;
    }
    .notice_body span:nth-child(3){
        font-size:12px;
        font-weight:400;
        color:#666;
        position:relative;
        top:10px;
        margin-left:6px;
    }
    .notice_body > p{
        height:400px;
        margin-top:40px;
        overflow-y: scroll;
        font-size:16px;
        font-weight:400;
        line-height: 24px;
        color:#333;
        margin-left:10px;
    }
    .notice_body button{
        width:60px;
        height:30px;
        background-color:transparent;
        border: 1px solid #e4e4e4;
        margin-top:10px;
        font-size: 14px;
        font-weight:500;
        color: #48453b;
        cursor:pointer;
        font-family: 'Noto Sans KR', sans-serif !important;
    }
    .notice_body button:nth-child(5){
        margin-left:860px;
    }
    .notice_body button:nth-child(6){
        margin-left:4px;
    }
</style>