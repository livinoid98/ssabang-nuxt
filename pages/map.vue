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
                        <option v-for="si in si" :key="si" :si="si">{{ si.sidoName }}</option>
					</select>
					<select class="gugun">
						<option>구/군</option>
					</select>
					<select class="dong" name="dong">
						<option>동</option>
					</select>

					<select class="year">
						<option>연도</option>
                        <option>2015년</option>
                        <option>2016년</option>
                        <option>2017년</option>
                        <option>2018년</option>
                        <option>2019년</option>
                        <option>2020년</option>
                        <option>2021년</option>
                        <option>2022년</option>
					</select>
					<select class="month">
						<option>월</option>
                        <option>1월</option>
                        <option>2월</option>
                        <option>3월</option>
                        <option>4월</option>
                        <option>5월</option>
                        <option>6월</option>
                        <option>7월</option>
                        <option>8월</option>
                        <option>9월</option>
                        <option>10월</option>
                        <option>11월</option>
                        <option>12월</option>
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
import http from "@/assets/api/http.js";

export default {
    name: "mainMap",
    components:{},
    data() {
        return {
            mapComp: null,
            si:[],
        };
    },
    mounted(){
        kakao.maps.load(this.initMap);
    },
    async fetch(){
        let response = await http.get('/api/map/list/juso');
        this.si = response.data;
    },
    methods:{
        initMap(){
            const container = document.querySelector(".main-right");
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 5,
            };
            let map = new kakao.maps.Map(container, options);
            this.mapComp = map;
        },
        
    },
}
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