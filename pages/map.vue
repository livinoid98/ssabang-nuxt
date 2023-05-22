<template>
    <div>
        <div class="map-title">
			<form>
				<input type="text" name="apartName" placeholder="아파트 이름" />
				<input type="submit" value="검색" @click.prevent="searchApt" />
			</form>
			<form action="/area" method="GET">
				<div class="separator">
					<select class="sido" @change="selectSi">
						<option>광역시</option>
                        <option v-for="(si,index) in si" :key="index" :si="si" :value="si.dongCode">{{ si.sidoName }}</option>
					</select>
					<select class="gugun" @change="selectGugun">
                        <option>구/군</option>
						<option v-for="(gugun,index) in gugun" :key="index" :gugun="gugun" :value="gugun.dongCode">{{ gugun.gugunName }}</option>
					</select>
					<select class="dong" name="dong">
						<option>동</option>
                        <option v-for="(dong, index) in dong" :key="index" :dong="dong" :value="dong.dongCode">{{ dong.dongName }}</option>
					</select>

                    <select class="year">
						<option>연도</option>
                        <option value="2015">2015년</option>
                        <option value="2016">2016년</option>
                        <option value="2017">2017년</option>
                        <option value="2018">2018년</option>
                        <option value="2019">2019년</option>
                        <option value="2020">2020년</option>
                        <option value="2021">2021년</option>
                        <option value="2022">2022년</option>
					</select>
					<select class="month">
						<option>월</option>
                        <option value="01">1월</option>
                        <option value="02">2월</option>
                        <option value="03">3월</option>
                        <option value="04">4월</option>
                        <option value="05">5월</option>
                        <option value="06">6월</option>
                        <option value="07">7월</option>
                        <option value="08">8월</option>
                        <option value="09">9월</option>
                        <option value="10">10월</option>
                        <option value="11">11월</option>
                        <option value="12">12월</option>
					</select>

					<input type="submit" class="find" value="검색" @click.prevent="findApart">
				</div>
			</form>
		</div>
		<div class="main">
			<div class="map-left" >
                <div class="no-search-img-wrap" v-if="apt.length == 0">
                    <img src="@/assets/img/no-search.png" alt="">
                </div>
				<ul class="apt-info-list" style="display:none;">
                    <li v-for="(apt, index) in apt" :key="index" :apt="apt" @click="aptDetail(`${apt.lng}`, `${apt.lat}`, `${apt.apartmentName}`, `${apt.dong}`, `${apt.roadName}`, `${apt.floor}`, `${apt.area}`, `${apt.buildYear}`)">
                        <div class="flex-wrap" @click="addCart(apt)">
                            <div class="img-wrap">
                                <img src="@/assets/img/room2.png" alt=""/>
                            </div>
                            <div class="text-wrap">
                                <span>중공년도: {{apt.buildYear}}년</span>
                                <h4>{{apt.apartmentName}}</h4>
                                <span>{{apt.dong}} {{apt.roadName}} {{apt.floor}}층</span>
                                <p>
                                    면적: {{apt.area}}㎡ ({{Math.floor(apt.area/3.3)}}평)<br/>

                                </p>
                            </div>
                        </div>
                    </li>
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
            gugun: [],
            dong:[],
            apt:[{
                id:1,
            }],
        };
    },
    head: () => ({
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
                content: '싸방, 부동산 중개 플랫폼, 부동산, 매매, 시세, 부동산 시세, 경희궁, 마포동, 시세보기, 주변 편의시설, 역세권, 학교'
            }
        ],
    }),
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
        async selectSi(){
            const sido = document.querySelector(".sido");
            let value = sido.options[sido.selectedIndex].value;
            let responseData = value.slice(0,2);
            let response = await http.get(`/api/map/list/juso/gugun/${responseData}`);
            this.gugun = response.data;
        },
        async selectGugun(){
            const gugun = document.querySelector(".gugun");
            let value = gugun.options[gugun.selectedIndex].value;
            let responseData = value.slice(0,5);
            let response = await http.get(`/api/map/list/juso/dong/${responseData}`);
            this.dong = response.data;
        },
        async findApart(){
            const dong = document.querySelector(".dong");
            let dongCode = dong.options[dong.selectedIndex].value;
            const year = document.querySelector(".year");
            let yearValue = year.options[year.selectedIndex].value;
            const month = document.querySelector(".month");
            let monthValue = month.options[month.selectedIndex].value;

            if(dongCode=="동" || yearValue=="연도" || monthValue=="월"){
                alert("지역 또는 날짜를 반드시 입력해주세요.");
                return;
            }

            let response = await http.get(`/api/map/list/${dongCode}/${yearValue}/${monthValue}`);
            this.apt = response.data;

            const aptList = document.querySelector(".apt-info-list");
            aptList.style.display = "block";
        },
        async searchApt(){
            let apartmentName = document.querySelector("input[name='apartName']").value;
            if(apartmentName == ""){
                alert("검색명을 입력해주세요.");
                return;
            }
            let response = await http.get(`/api/map/list/searchbyname/${apartmentName}`);
            this.apt = response.data;

            const aptList = document.querySelector(".apt-info-list");
            aptList.style.display = "block";
        },
        aptDetail(lng, lat, aptName, aptDong, aptRoadName, aptFloor, aptArea, aptBuildYear){
            let mapContainer = document.querySelector('.main-right'), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(`${lat}`, `${lng}`), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

            let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

            // 마커가 표시될 위치입니다 
            let markerPosition  = new kakao.maps.LatLng(`${lat}`, `${lng}`); 

            // 마커를 생성합니다
            let marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            var iwContent = `
                <div class="apt-modal">
                    <h4>${aptName}</h4>
                    <p>
                        주소: ${aptDong} ${aptRoadName} ${aptFloor}층<br/>
                        면적: ${aptArea}㎡ (${Math.floor(aptArea/3.3)}평)
                    </p>
                    <button class="showDetailApt">매물정보 상세보기</button>
                </div>
            `, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(`${lat}`, `${lng}`); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });
            
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map,marker);
            
            const showDetailApt = document.querySelector('.showDetailApt');
            showDetailApt.addEventListener('click', () => {
                let apt = {
                    aptName,
                    aptDong,
                    aptRoadName,
                    aptFloor,
                    aptArea,
                    aptBuildYear,
                    lat,
                    lng,
                }
                this.$store.commit('aptDetail',apt);
                this.$router.push('/aptDetail');
            });
        },
        addCart(apt){
            console.log(apt);
            this.$store.commit('addCart', apt);
        }
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
        .no-search-img-wrap{
            width:100%;
            padding:40px;
            box-sizing: border-box;
            img{
                width:100%;
            }
        }
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
                cursor:pointer;
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
        .apt-modal{
            @include setSize(180px, 180px);
            border: 1px solid #E5E7EB;
            background-color:#fff;
            text-align:center;
            padding:12px;
            box-sizing: border-box;
            @include flex(flex, center, center);
            flex-direction: column;
            h4{
                @include font(14px, 600, #394150);
                line-height:18px;
            }
            p{
                margin-top:8px;
                @include font(12px, 400, #404856);
                line-height:16px;
                
            }
            button{
                margin-top:14px;
                @include setSize(140px, 30px);
                cursor:pointer;
                background-color:#F3F4F6;
                border:none;
                border-radius:8px;
                @include font(12px, 500, #4470EA);
            }
        }
        
    }
}
</style>