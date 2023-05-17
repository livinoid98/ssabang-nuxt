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
			<p>공지사항 &gt; 공지사항</p>
		</div>
		<div class="article-contents">
			<h3>공지사항</h3>
			<div class="search-wrap">
				<select name="" id="">
					<option value="">제목</option>
				</select>
				<input
					type="text"
					placeholder="검색어를 입력하세요."
					name="content"
				/>
			</div>
			<table>
				<colgroup>
					<col style="width: 10%" />
					<col style="width: 70%" />
					<col style="width: 10%" />
					<col style="width: 10%" />
				</colgroup>
				<thead>
					<tr>
						<td>구분</td>
						<td>제목</td>
						<td>작성자</td>
						<td>조회수</td>
					</tr>
				</thead>
				<tbody>
					
					<tr v-for="article in articles" :key="article.article_no" :article="article" @click="showDetail(`${article.articleNo}`)">
						<td>{{ article.articleNo }}</td>
						<td>{{ article.title }}</td>
						<td>{{ article.userId }}</td>
						<td>{{ article.hitCnt }}</td>
					</tr>

				</tbody>
			</table>
			<div class="button-wrap">
				<nuxt-link to="/create" v-if="user.userId === 'ssafy'"><button>글 쓰기</button></nuxt-link>
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
            articles: [],
        };
    },
    computed: {
		...mapState(["isLogged","user"]),
	},
    methods:{
        async showDetail(no){
            this.$router.push(`/detail/${no}`);
        }
    },
    async fetch(){
        const response = await http.get("/api/notice/list/1");
        this.articles = response.data;
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
        }
        p{
            @include font(14px, 400, #fff);
            margin-top:9px;
            align-items: center;
        }
    }
}

.location-graph{
    @include setSize(100%, 56px);
    @include flex(flex, null, center);
    border-bottom:1px solid #E7E7E7;
    p{
        @include block-center(1200px);
        @include font(15px, 300, #CECECE);
    }
}

.article-contents{
    @include block-center(1200px);
    h3{
        @include font(30px, 700, #161410);
        text-align:center;
        padding-top:112px;
    }
    .search-wrap{
        @include flex(flex, flex-end);
        margin-right:100px;
        margin-top:56px;
        select{
            @include setSize(80px, 40px);
            border:2px solid #E7E7E7;
            @include font(13px, 400, #DBDBDB);
            margin-right:20px;
        }
        option{
            @include setSize(300px, 40px);
            border:2px solid #E7E7E7;
            @include font(13px, 400, #DBDBDB);
        }
        input{
            border:2px solid #E7E7E7;
            box-sizing: border-box;
            padding:10px;
        }
    }
    table{
        @include block-center(1000px);
        text-align:center;
        margin-top:32px;
        thead{
            @include font(12px, 600, #767676);
            tr{
                border-top:1px solid #8A8A8A;
                border-bottom:1px solid #E7E7E7;
                td{
                    height:52px;
                    line-height:52px;
                }
            }
        }
        tbody{
            @include font(12px, 400, #9B9B9B);
            tr{
                border-bottom:1px solid #E7E7E7;
                cursor:pointer;
                &:last-child{
                    border-bottom:1px solid #8A8A8A;
                }
                td{
                    height:52px;
                    line-height:52px;
                }
            }
        }
    }
}

.article-contents .button-wrap {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 190px;
  }
  .article-contents .button-wrap button {
    width: 120px;
    height: 35px;
    cursor: pointer;
    background-color: #129ded;
    border: none;
    margin-top: 20px;
    font-size: 1px;
    font-weight: 400;
    color: #fff;
  }
</style>