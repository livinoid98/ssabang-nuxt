<template>
  <section class="container">
    <div class="main-search-banner">
			<div class="opacity-layer"></div>
			<div class="position-wrap">
				<div class="main-search-title">
					<p>나에게 필요한</p>
					<p>부동산 정보를 검색해보세요.</p>
				</div>
				<div class="main-search-form">
					<form action="#">
						<input
							type="text"
							placeholder="검색어를 입력해보세요."
							class="search"
						/>
						<input type="submit" value="검색" />
					</form>
				</div>
				<div class="keyword-wrap">
					<span>인기검색어</span>
					<p>#공시가격</p>
					<p>#공공분야</p>
					<p>#3기신도시</p>
				</div>
			</div>
		</div>
		<div class="recommend-house">
			<h3>Today's 인기하우스</h3>
			<ul>
				<li>
					<nuxt-link to="/">
						<div class="recommend-img-wrap">
							<img src="@/assets/img/room1.png" alt="" />
						</div>
						<div class="recommend-text-wrap">
							<h4>논현아펠바움1차 (38세대)</h4>
							<p>서울시 강남구 논현동 250</p>
							<table>
								<tr>
									<td>매매</td>
									<td>46억 5,000만원</td>
								</tr>
								<tr>
									<td>입주</td>
									<td>2007. 12.</td>
								</tr>
							</table>
						</div>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/">
						<div class="recommend-img-wrap">
							<img src="@/assets/img/room2.png" alt="" />
						</div>
						<div class="recommend-text-wrap">
							<h4>LG 한강자이 (656세대)</h4>
							<p>서울시 용산구 이촌동 430</p>
							<table>
								<tr>
									<td>매매</td>
									<td>15억 7,000만원</td>
								</tr>
								<tr>
									<td>분양</td>
									<td>2003. 04.</td>
								</tr>
							</table>
						</div>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/">
						<div class="recommend-img-wrap">
							<img src="@/assets/img/room3.png" alt="" />
						</div>
						<div class="recommend-text-wrap">
							<h4>아크로리버뷰신반포 (595세대)</h4>
							<p>서울시 서초구 잠원동 159</p>
							<table>
								<tr>
									<td>매매</td>
									<td>39억 1,000만원</td>
								</tr>
								<tr>
									<td>입주</td>
									<td>2018. 06.</td>
								</tr>
							</table>
						</div>
					</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="info-wrap">
			<div class="info-title">
				<h3>Hot &amp; New</h3>
				<p>부동산 시장의 유용한 정보를 한곳에서!</p>
			</div>
			<div class="info-contents">
				<nuxt-link to="/map">
					<div class="real-price-wrap">
						<h4>실거래가<br />알아보기</h4>
					</div>
				</nuxt-link>
				<nuxt-link to="/news">
					<div class="news-wrap">
						<div class="news-img-wrap">
							<img src="@/assets/img/news-thumbnail.jpg" alt="" />
						</div>
						<div class="news-text-wrap">
							<span>리포트&amp;뉴스</span>
							<p>아파트값 하락폭 축소와 확대 반복</p>
						</div>
					</div>
				</nuxt-link>
				<nuxt-link to="/notice">
					<div class="article-wrap">
						<h3>공지/뉴스</h3>
						<div class="separate-line"></div>
						<table>
							<tr>
								<td>
									실거래 데이터 02월 28일자 기준 업데이트 안내
								</td>
								<td>2023.03.03</td>
							</tr>
							<tr>
								<td>
									실거래 데이터 02월 28일자 기준 업데이트 안내
								</td>
								<td>2023.03.03</td>
							</tr>
							<tr>
								<td>
									실거래 데이터 02월 28일자 기준 업데이트 안내
								</td>
								<td>2023.03.03</td>
							</tr>
							<tr>
								<td>
									실거래 데이터 02월 28일자 기준 업데이트 안내
								</td>
								<td>2023.03.03</td>
							</tr>
						</table>
					</div>
				</nuxt-link>
			</div>
		</div>
  </section>
</template>

<script>
export default {
    head: () => ({
        title: "내 집 마련의 시작, 싸방",
        meta: [
            {
                name: 'title',
                content: '내 집 마련의 시작, 싸방',
            },
            {
                name: 'description',
                content: '싸방은 전문 부동산 중개 웹사이트로, 최상의 부동산 거래를 위한 서비스를 제공합니다. 저희 플랫폼은 매물의 노출과 홍보를 위한 다양한 마케팅 도구와 기능을 제공합니다. 우리의 목표는 고객에게 안전하고 신뢰할 수 있는 부동산 거래 환경을 제공하는 것입니다. 저희 웹사이트는 다양한 부동산 매물 정보를 제공하며, 구매자와 판매자가 원활하게 소통하고 거래를 진행할 수 있는 플랫폼을 제공합니다.',
            },
            {
                name: 'keywords',
                content: '싸방, 부동산 중개 플랫폼, 부동산, 매매, 시세, 부동산 시세'
            }
        ],
    }),
}
</script>

<style lang="scss">
@import "@/assets/styles/function.scss";

  .main-search-banner{
    @include setSize(100%, 480px);
    background-image: url("@/assets/img/main-banner.png");
    background-position: center;
    background-size: cover;
    position:relative;
    .opacity-layer{
        @include setSize(100%, 480px);
        background-color:#000;
        opacity:0.2;
    }
    .position-wrap{
        width:700px;
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        .main-search-title{
            p{
                @include font(36px, 700, #FFF);
                line-height:48px;
                &:nth-child(1){
                    font-size:34px;
                }
            }
        }
        .main-search-form{
            position:relative;
            margin-top:22px;
            .search{
                @include setSize(700px, 60px);
                background-color:#FFF;
                border-radius:8px;
                border:none;
                box-sizing: border-box;
                padding:20px;
                @include font(14px, 400, #838383);
            }
            input[type='submit']{
                @include setSize(100px, 60px);
                position:absolute;
                top:0px;
                left:600px;
                background-color:#129DED;
                border-radius:8px;
                border:none;
                cursor:pointer;
                @include font(16px, 500, #FFF);
            }   
        }
        .keyword-wrap{
            @include flex(flex, null, center);
            margin-top:20px;
            @include font(10px, 400, #FFF);
            span{
                @include font(14px, 600, #FFF);
                margin-top:-3px;
            }
            p{
                @include setSize(80px, 20px);
                background-color:rgba(00,00,00,0.5);
                @include flex(flex, center, center);
                border-radius: 4px;
                margin-left:10px;
            }
        }
    }
}

.recommend-house{
  @include block-center(1200px);
    padding-top:80px;
    padding-bottom:86px;
    h3{
        @include font(18px, 700, #323232);
    }
    ul{
        margin-top:20px;
        @include flex(flex, center);
        li{
            @include setSize(380px, 400px);
            margin-left:30px;
            &:first-child{
                margin-left:0px;
            }
            .recommend-img-wrap{
                width:100%;
                img{
                    width:100%;
                }
            }
            .recommend-text-wrap{
                h4{
                    padding-top:36px;
                    @include font(17px, 700, #323232);
                }
                p{
                    @include font(13px, 400, #828282);
                    margin-top:16px;
                }
                table{
                    margin-top:10px;
                    tr{
                        td{
                            @include font(12px, 400, #828282);
                            padding:4px;
                            padding-left:0px;
                            padding-right:8px;
                        }
                    }
                }
            }
        }
    }
}

.info-wrap{
  @include setSize(100%, null);
    background-color:#FAFAFA;
    padding-top:86px;
    padding-bottom:120px;
    .info-title{
        text-align:center;
        h3{
            @include font(24px, 700, #323232);
        }
        p{
            @include font(14px, 400, #95977B);
            margin-top:10px;
        }
    }
    .info-contents{
        margin-top:56px;
        @include flex(flex, center, center);
        .real-price-wrap{
            @include setSize(244px, 280px);
            background-image: url("@/assets/img/price-thumbnail.jpg");
            background-position: center;
            background-size: cover;
            border:1px solid #ccc;
            h4{
                @include font(20px, 600, #000);
                padding-top:26px;
                padding-left:30px;
                line-height:30px;
            }
        }
        .news-wrap{
            @include setSize(343px, 280px);
            background-color:#fff;
            margin-left:34px;
            .news-img-wrap{
                width:100%;
                img{
                    width:100%;
                }
            }
            .news-text-wrap{
                height:48px;
                display:flex;
                flex-direction: column;
                justify-content: center;
                padding-left:18px;
                span{
                    @include font(10px, 400, #EE0E2A);
                }
                p{
                    @include font(12px, 400, #333);
                    margin-top:3px;
                }
            }
        }
        .article-wrap{
            @include setSize(470px, 280px);
            background-color:#fff;
            margin-left:34px;
            display:flex;
            flex-direction: column;
            justify-content: center;
            padding:0px 50px;
            h3{
                @include font(20px, 600, #222);
            }
            .separate-line{
                @include setSize(40px, 2px);
                background-color:#D9D9D9;
                margin-top:14px;
            }
            table{
                margin-top:20px;
                tr{
                    td{
                        padding:8px;
                        @include font(14px, 400, #747774);
                    }
                }
            }
        }
    }
}
</style>

