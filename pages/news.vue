<template>
    <div>
      <div class="main-banner">
				<div class="opacity-layer"></div>
				<div class="main-title">
					<h3>뉴스/소개</h3>
					<p>나에게 필요한 부동산 정보</p>
				</div>
			</div>
			<div class="location-graph">
				<p>공지사항 > 뉴스/소개</p>
                <div class="separator">

                    <select class="sido" @change="selectSi">
                        <option>광역시</option>
                        <option v-for="(si,index) in si" :key="index" :si="si" :value="si.dongCode">{{ si.sidoName }}</option>
                    </select>
                    <select class="gugun">
                        <option>구/군</option>
                        <option v-for="(gugun,index) in gugun" :key="index" :gugun="gugun" :value="gugun.dongCode">{{ gugun.gugunName }}</option>
                    </select>

                    <input type="submit" class="find" value="검색" @click.prevent="findNews">
                </div>
			</div>
      <div class="bg">
        <div class="article-contents">
          <div class="news-content">
            <div class="news-title">
              <h4>
                THE<br/>
                ESTATE<br/>
                NEWS
              </h4>
              <p>오늘의 주요 부동산<br/>
              <b class="bold">뉴스를 한 곳에서!</b></p>
              <p>#주택공급 #주택금융 #주택정책 #주택청약
                #정비사업 #재개발 #공공재개발 #임대사업자
                #주담대 #양도세 #종부세 #대출
                #개발호재 #도시재생 #신도시 #재건축
                #임대주택 #도시계획 #가격동향 #통계</p>
              <button><a href="https://land.naver.com/news/headline.naver">부동산 정보 더 알아보기</a></button>
            </div>
            <div class="news-main">
              <ul>
                <li v-for="article in news" :key="article">
                  <a @click.prevent="linkNews(`${article.link}`)">
                    <h4>{{article.title}}</h4>
                    <p>{{article.content}}</p>
                    <span>+ 더 알아보기</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import http from "@/assets/api/http.js";
import {mapMutations, mapState} from 'vuex';

export default {
    name: "news",
    components:{},
    data() {
        return {
            news: [],
            si: [],
            gugun: [],
        };
    },
    head: () => ({
        title: "부동산 뉴스 - 싸방",
        meta: [
            {
                name: 'title',
                content: '부동산 뉴스 - 싸방',
            },
            {
                name: 'description',
                content: '싸방은 전문 부동산 중개 웹사이트로, 최상의 부동산 거래를 위한 서비스를 제공합니다. 저희 플랫폼은 매물의 노출과 홍보를 위한 다양한 마케팅 도구와 기능을 제공합니다. 우리의 목표는 고객에게 안전하고 신뢰할 수 있는 부동산 거래 환경을 제공하는 것입니다. 저희 웹사이트는 다양한 부동산 매물 정보를 제공하며, 구매자와 판매자가 원활하게 소통하고 거래를 진행할 수 있는 플랫폼을 제공합니다.',
            },
            {
                name: 'keywords',
                content: '싸방, 부동산 중개 플랫폼, 부동산, 매매, 시세, 부동산 시세, 호제, 부동산 뉴스, 부동산 이슈'
            }
        ],
    }),
    computed:{
        ...mapState(["user"]),
    },
    methods:{
        linkNews(link){
            window.location.href = link;
        },
        async selectSi(){
            const sido = document.querySelector(".sido");
            let value = sido.options[sido.selectedIndex].value;
            let responseData = value.slice(0,2);
            let response = await http.get(`/api/map/list/juso/gugun/${responseData}`);
            this.gugun = response.data;
        },
        async findNews(){
            const sido = document.querySelector(".sido");
            let sidoCode = sido.options[sido.selectedIndex].value;
            const gugun = document.querySelector(".gugun");
            let gugunCode = gugun.options[gugun.selectedIndex].value;

            if(gugunCode=="구/군" || sidoCode=="광역시"){
                alert("지역 또는 날짜를 반드시 입력해주세요.");
                return;
            }

            let response = await http.get(`/api/news/${sidoCode}/${gugunCode}`);
            console.log(response);
            this.news = response.data;
        }
    },
    async fetch(){
        if(this.$store.state.user.addressCity != "" && this.$store.state.user.addressGu != "" && this.$store.state.user.addressCity != undefined && this.$store.state.user.addressGu != undefined){
            const response = await http.get(`/api/news/${this.$store.state.user.addressCity}/${this.$store.state.user.addressGu}`)
            this.news = response.data;
        }else{
            const response = await http.get("/api/news");
            this.news = response.data;
        }

        let response = await http.get('/api/map/list/juso');
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
        }
        p{
            @include font(14px, 400, #fff);
            margin-top:9px;
            align-items: center;
        }
    }
}

.location-graph{
    @include setSize(1200px, 56px);
    width: 1200px !important;
    margin:0 auto;
    @include flex(flex, space-between, center);
    justify-content: space-between;
    border-bottom:1px solid #E7E7E7;
    p{
        @include block-center(1200px);
        @include font(15px, 300, #CECECE);
    }
    .separator{
        @include flex(flex, center);
        select{
            @include setSize(100px, 40px);
            background-color:#f5f5f5;
            border:none;
            border-radius:4px;
            margin-left:16px;
            box-sizing: border-box;
            padding:10px;
            &:focus{
                background-color:#326CF9;
                @include font(14px, 400, #fff);
            }
            option{
                background-color:#f5f5f5;
                @include font(14px, 400, #737373);
            }
        }
        .find{
            @include setSize(80px, 40px);
            border:none;
            border-radius:4px;
            @include font(13px, 500, #000);
            margin-left:12px;
            cursor:pointer;
            &:hover{
                background-color:#326CF9;
                @include font(14px, 400, #fff);
            }
        }
    }
}

.bg{
    width:100%;
    background-color:#F3F2EE;
    padding-top:100px;
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
    
        .news-content{
            width:1200px;
            padding-bottom:120px;
            @include flex(flex);
            .news-title{
                width:400px;
                box-sizing: border-box;
                display:flex;
                flex-direction: column;
                justify-content:center;
                h4{
                    @include font(72px, 400, #326CF9);
                }
                p{
                    &:nth-child(2){
                        @include font(32px, 400, #353535);
                        line-height:40px;
                        margin-top:18px;
                        .bold{
                            font-weight:700;
                        }
                    }
                    &:nth-child(3){
                        @include font(14px, 400, #CFCFCF);
                        padding-right:60px;
                        margin-top:14px;
                        line-height:16px;
                    }
                }
                button{
                    @include setSize(220px, 50px);
                    background-color:#326CF9;
                    border:none;
                    @include font(16px, 700, #FFFFFF);
                    margin-top:22px;
                }
            }
            .news-main{
                width:800px;
                ul{
                    @include flex(flex);
                    flex-wrap:wrap;
                    li{
                        @include setSize(350px, 300px);
                        background-color:#FFF;
                        margin-top:20px;
                        @include flex(flex, center);
                        flex-direction: column;
                        box-sizing: border-box;
                        padding:50px;
                        &:nth-child(2n){
                            margin-left:20px;
                        }
                        h4{
                            @include font(20px, 700, #3A3A3A);
                            line-height:28px;
                        }
                        p{
                            @include font(12px, 400, #9E9E9E);
                            line-height:18px;
                            margin-top:10px;
                        }
                        span{
                            display:block;
                            @include font(12px, 400, #BBBBBB);
                            margin-top:14px;
                        }
                    }
                }
            }
        }
    }
}
</style>