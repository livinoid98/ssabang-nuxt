<template>
    <div>
        <div class="map-title">
			<form action="/apart" method="POST">
				<input type="text" name="apartName" placeholder="아파트 이름" />
				<input type="submit" value="검색"/>
			</form>
			<form action="/area" method="GET">
				<div class="separator">
					<select class="sido">
						<option>광역시</option>
					</select>
					<select class="gugun">
						<option>구/군</option>
					</select>
					<select class="dong" name="dong">
						<option>동</option>
					</select>

					<select class="year" style="display:none;">
						<option>연도</option>
					</select>
					<select class="month" style="display:none;">
						<option>월</option>
					</select>

					<input type="submit" class="find" value="검색">
				</div>
			</form>
		</div>
		<div class="main">
			<div class="map-left">
				<ul>

				</ul>
			</div>
			<div class="main-right"></div>
		</div>
    </div>
</template>

<script>

</script>


<style lang="scss">
@import "@/assets/styles/function.scss";

.map-title{
    @include setSize(1200px, 64px);
    margin:0 auto;
    @include flex(flex, null, center);
    border-bottom:1px solid #E7E7E7;
    form{
        width:400px;
        @include flex(flex);
        input[type='text']{
            @include setSize(180px, 36px);
            border:2px solid #F5F5F5;
            border-radius:5px;
            box-sizing: border-box;
            padding:10px;
        }
        input[type='submit']{
            @include setSize(80px, 40px);
            border:none;
            border-radius:5px;
            background-color:#F5F5F5;
            margin-left:8px;
            cursor:pointer;
            &:hover{
                background-color:#326CF9;
                @include font(14px, 400, #fff);
            }
        }
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

.main{
    @include block-center(1200px);
    @include flex(flex);
    .map-left{
        @include setSize(600px, 700px);
        overflow-y: scroll;
        .main-left-info{
            @include setSize(100%, 186px);
            display:flex;
            flex-direction: column;
            justify-content: center;
            margin-left:24px;
            cursor:pointer;
            p{
                @include font(14px, 400, #8D8E8D);
                margin-top: 12px;
                &:nth-child(1){
                    @include font(18px, 600, #000);
                }
            }
        }
        ul{
            li{
                height:200px;
                border-bottom: 1px solid #8D8E8D;
                .flex-wrap{
                    height:200px;
                    @include flex(flex, null, center);
                    .img-wrap{
                        width:200px;
                        img{
                            width:100%;
                        }
                    }
                    .text-wrap{
                        margin-left:10px;
                        span{
                            display:block;
                            &:nth-child(1){
                                @include font(10px, 300, #E55550);
                            }
                            &:nth-child(3){
                                @include font(12px, 400, #8D8E8D);
                                margin-top:6px;
                            }
                        }
                        h4{
                            @include font(18px, 700, #000000);
                            margin-top:4px;
                            line-height:22px;
                        }
                        p{
                            @include font(12px, 400, #8D8E8D);
                            margin-top:6px;
                        }
                    }
                }
            }
        }
    }

    .main-right{
        @include setSize(100%, 700px);
    }
}
</style>