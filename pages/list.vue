<template>
    <div>
        <div class="main-banner">
			<div class="opacity-layer"></div>
			<div class="main-title">
				<h3>매물정보</h3>
				<p>나에게 필요한 부동산 정보</p>
			</div>
		</div>
		<div class="select-wrap">
			<select name="" id="">
				<option value="">주거유형</option>
			</select>
			<select name="" id="">
				<option value="">지역</option>
			</select>
			<select name="" id="">
				<option value="">비용</option>
			</select>
			<select name="" id="">
				<option value="">평수</option>
			</select>
		</div>
		<div class="list-contents">
			<div class="recommend-house">
				<h3>Today's 인기하우스</h3>
				<ul>
					<li>
						<a href="#">
							<div class="recommend-img-wrap">
								<img src="@/assets/img/room1.png" alt="" />
							</div>
							<div class="recommend-text-wrap">
								<h4>동원베네스트</h4>
								<p>서울시 용산구 이촌동 434</p>
								<table>
									<tr>
										<td>매매</td>
										<td>14억 8,000만원</td>
									</tr>
									<tr>
										<td>입주</td>
										<td>2005. 11.</td>
									</tr>
								</table>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="recommend-img-wrap">
								<img src="@/assets/img/room2.png" alt="" />
							</div>
							<div class="recommend-text-wrap">
								<h4>신공덕삼성래미안 1차</h4>
								<p>서울시 마포구 신공덕동 155</p>
								<table>
									<tr>
										<td>매매</td>
										<td>11억 1,000만원</td>
									</tr>
									<tr>
										<td>입주</td>
										<td>2000. 08.</td>
									</tr>
								</table>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="recommend-img-wrap">
								<img src="@/assets/img/room3.png" alt="" />
							</div>
							<div class="recommend-text-wrap">
								<h4>e편한세상신촌</h4>
								<p>서울시 서대문구 북아현동 1013</p>
								<table>
									<tr>
										<td>매매</td>
										<td>11억 6,000만원</td>
									</tr>
									<tr>
										<td>입주</td>
										<td>2018. 05.</td>
									</tr>
								</table>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="recommend-img-wrap">
								<img src="@/assets/img/room1.png" alt="" />
							</div>
							<div class="recommend-text-wrap">
								<h4>서교푸르지오</h4>
								<p>서울시 마포구 서교동 486</p>
								<table>
									<tr>
										<td>매매</td>
										<td>9억 1,000만원</td>
									</tr>
									<tr>
										<td>입주</td>
										<td>2004. 11.</td>
									</tr>
								</table>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="recommend-img-wrap">
								<img src="@/assets/img/room2.png" alt="" />
							</div>
							<div class="recommend-text-wrap">
								<h4>마포한강푸르지오</h4>
								<p>서울시 마포구 합정동 472</p>
								<table>
									<tr>
										<td>매매</td>
										<td>15억 6,000만원</td>
									</tr>
									<tr>
										<td>입주</td>
										<td>2015. 03.</td>
									</tr>
								</table>
							</div>
						</a>
					</li>
					<li>
						<a href="#">
							<div class="recommend-img-wrap">
								<img src="@/assets/img/room3.png" alt="" />
							</div>
							<div class="recommend-text-wrap">
								<h4>아이파크분당3단지</h4>
								<p>경기도 성남시 분당구 정자동 11</p>
								<table>
									<tr>
										<td>매매</td>
										<td>16억 5,000만원</td>
									</tr>
									<tr>
										<td>입주</td>
										<td>2003. 05.</td>
									</tr>
								</table>
							</div>
						</a>
					</li>
				</ul>
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
        }
        p{
            @include font(14px, 400, #fff);
            margin-top:9px;
        }
    }
}

.select-wrap{
    @include block-center(1200px);
    @include flex(flex);
    padding-top:48px;
    select{
        @include setSize(130px, 40px);
        border-radius: 5px;
        background-color: transparent;
        border:1px solid #ccc;
        @include font(14px, 400, #929292);
        box-sizing: border-box;
        padding:10px;
        margin-left:14px;
        &:first-child{
            margin-left:0px;
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
        flex-wrap: wrap;
        li{
            @include setSize(380px, 400px);
            margin-left:30px;
            margin-bottom:54px;
            &:nth-child(3n+1){
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
</style>