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
                <form>
                    <select name="" class="titleCode">
                        <option value="title">제목</option>
                        <option value="content">내용</option>
                        <option value="titleContent">제목+내용</option>
                    </select>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요."
                        name="content"
                        class="searchContent"
                    />
                    <button class="findNotice" @click.prevent="findNotice">검색</button>
                </form>
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
					<tr v-for="(article, index) in articles" :key="article.articleNo" :article="article" @click="showDetail(`${article.articleNo}`)">
						<td>{{ articlesNm - (((curPageNum-1)*10) + (index))}}</td>
						<td>{{ article.title }}</td>
						<td>{{ article.userId }}</td>
						<td>{{ article.hitCnt }}</td>
					</tr>
				</tbody>
			</table>
            <div class="pagination">
                <ul>
                    <li v-for="page in this.paginationNum" :key="page" @click="clickPage($event)">
                        {{page}}
                    </li>
                </ul>
            </div>
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
            originSearchArticles: [],
            originArticles: [],
            searchArticles: [],
            articlesNm: 0,
            curPageNum: 1,
            datapage: 10,
            paginationNum: 1,
            searchType:"",
            searchValue : "",
        };
    },
    head: () => ({
        title: "공지사항 - 싸방",
        meta: [
            {
                name: 'title',
                content: '공지사항 - 싸방',
            },
            {
                name: 'description',
                content: '싸방은 전문 부동산 중개 웹사이트로, 최상의 부동산 거래를 위한 서비스를 제공합니다. 저희 플랫폼은 매물의 노출과 홍보를 위한 다양한 마케팅 도구와 기능을 제공합니다. 우리의 목표는 고객에게 안전하고 신뢰할 수 있는 부동산 거래 환경을 제공하는 것입니다. 저희 웹사이트는 다양한 부동산 매물 정보를 제공하며, 구매자와 판매자가 원활하게 소통하고 거래를 진행할 수 있는 플랫폼을 제공합니다.',
            },
            {
                name: 'keywords',
                content: '싸방, 부동산 중개 플랫폼, 부동산, 매매, 시세, 부동산 시세, 공지사항, 부동산 소식'
            }
        ],
    }),
    computed: {
		...mapState(["isLogged","user"]),
	},
    methods:{
        async showDetail(no){
            let response = await http.put(`/api/notice/hitupdate/${no}`, {
                
            });
            console.log(response);
            this.$router.push(`/detail/${no}`);
        },
        async findNotice(){
            const titleCode = document.querySelector(".titleCode");
            let titleCodeValue = titleCode.options[titleCode.selectedIndex].value;
            const searchContent = document.querySelector(".searchContent").value;
            
            let response = await http.get(`/api/notice/searchall/${titleCodeValue}/${searchContent}`,{
            });
            this.originSearchArticles = response.data;
            let paging1SearchArticles = [];
            if(response.data.length < 10){
                for(let i=0; i<response.data.length; i++){
                    paging1SearchArticles.push(this.originSearchArticles[i]);
                }
            }else{
                for(let i=0; i<10; i++){
                    paging1SearchArticles.push(this.originSearchArticles[i]);
                }
            }
            this.articles = paging1SearchArticles;
            this.searchArticles = this.originSearchArticles;
            this.searchValue = searchContent;
            this.articlesNm = this.searchArticles.length;
            this.paginationNum = Math.ceil(this.articlesNm / 10);
        },
        async clickPage(e){
            let li = e.target;
            let pageNum = li.innerText;
            if(this.searchValue == ""){
                let response = await http.get(`/api/notice/list/${pageNum}`);
                this.articles = response.data;
                this.curPageNum = Number(pageNum);
            }else{
                let pagingSearchArticles = [];
                let iAmSorryJeongjoon = ((pageNum-1)*10);
                let finish = iAmSorryJeongjoon+10;
                if(finish > this.searchArticles.length){
                    finish = this.searchArticles.length;
                }
                for(let i=iAmSorryJeongjoon; i<finish; i++){
                    pagingSearchArticles.push(this.searchArticles[i]);
                }
                this.articles = pagingSearchArticles;
                this.curPageNum = pageNum;
            }
        }
    },
    async fetch(){
        const response = await http.get("/api/notice/list/1");
        this.articles = response.data;
        this.originArticles = response.data;

        let numResponse = await http.get("/api/notice/listCnt");
        this.articlesNm = numResponse.data.cnt;

        let paginationNum = Math.ceil(this.articlesNm / 10);
        this.paginationNum = paginationNum;
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
        form{
            select{
                @include setSize(80px, 40px);
                border:2px solid #E7E7E7;
                @include font(13px, 400, #888);
                margin-right:8px;
                padding:8px;
            }
            option{
                @include setSize(300px, 40px);
                border:2px solid #E7E7E7;
                @include font(13px, 400, #888);
            }
            input{
                @include setSize(260px, 40px);
                border-radius:0px;
                border:2px solid #E7E7E7;
                box-sizing: border-box;
                background-color: transparent;
                padding:10px;
            }
            .findNotice{
                @include setSize(80px, 40px);
                border:none;
                border-radius:4px;
                @include font(13px, 500, #888);
                margin-left:8px;
                cursor:pointer;
                &:hover{
                    background-color:#326CF9;
                    @include font(14px, 400, #fff);
                }
            }
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
    .pagination{
        @include block-center(1000px);
        margin-top:40px;
        ul{
            @include flex(flex,center,center);
            li{
                @include setSize(30px, 30px);
                @include flex(flex, center, center);
                cursor:pointer;
                border:1px solid #E7E7E7;
                @include font(12px, 400, #8A8A8A);
                margin-left:10px;
                &:nth-child(1){
                    margin-left:0px;
                }
                &:focus{
                    background-color:#326CF9;
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