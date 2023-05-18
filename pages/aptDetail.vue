<template>
    <div>
        <div class="block-center">
        <div class="description">
            <div class="description-img-wrap">
                <img src="@/assets/img/room4.png"/>
            </div>
            <div class="description-info-wrap">
                <div class="descinfo-thumbnail">
                    <span>아파트</span>
                    <span>주상복합형 아파트</span>
                    <span>{{apt.aptDong}} 10분거리</span>
                </div>
                <div class="descinfo-title">
                    <h3>{{apt.aptName}}</h3>
                </div>
                <div class="descinfo-desc">
                    <p>평소에 갤러리에 다니는 취미가 있어 집도 갤러리 같으면 좋을 것 같다는 고객님의 요청을 반영해, 트렌디 화이트 리모델링 패키지 상품으로 갤러리 느낌의 공간을 완성했어요!</p>
                    <select>
                        <option>방을 선택하여 주세요.</option>
                    </select>
                    <button>매물 상담하기</button>
                </div>
                <div class="apt-share">
                    <ul>
                        <li>
                            <img src="@/assets/img/kakao-icon.png" alt="">
                            <span>카카오톡 공유하기</span>
                        </li>
                        <li>
                            <img src="@/assets/img/link-icon.png" alt="">
                            <span>URL 복사하기</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="info-nav">
                <ul>
                    <li>건물개요</li>
                    <li>시설정보</li>
                    <li>임대정보</li>
                    <li>위치정보</li>
                </ul>
            </div>
            <div class="info-content">
                <div class="info-content-title">
                    <h3>{{apt.aptName}}</h3>
                    <p>아파트 | {{apt.aptBuildYear}} 준공 | 대지면적 {{Math.floor(apt.aptArea/3.3)}}평 | 연면적 {{apt.aptArea}}㎡</p>
                    <div class="title-button-wrap">
                        <ul>
                            <li>신축</li>
                            <li>역세권</li>
                            <li>사옥용</li>
                            <li>통임대</li>
                            <li>첫입주</li>
                        </ul>
                    </div>
                </div>

                <div class="keypoint">
                    <div class="keypoint-title-wrap">
                        <h3>Key Point</h3>
                    </div>
                    <ul>
                        <li>강남역 도보 1분 거리의 뛰어난 접근성</li>
                        <li>통유리 외관 및 2.7M의 천정고로 개방감 있는 업무환경 제공</li>
                        <li>편심 코어 구조로 효율적인 레이아웃 구성 가능</li>
                        <li>시세 대비 저렴한 임대료</li>
                    </ul>
                </div>

                <div class="building-desc">
                    <div class="building-desc-title">
                        <h3>건물개요</h3>
                    </div>
                    <div class="building-desc-content">
                        <table>
                            <tr>
                                <td>주소</td>
                                <td>{{apt.aptDong}} {{apt.aptRoadName}}</td>
                            </tr>
                            <tr>
                                <td>위치</td>
                                <td>{{apt.aptDong}} 도보 10분</td>
                            </tr>
                            <tr>
                                <td>층수</td>
                                <td>지상 {{apt.aptFloor}}층</td>
                            </tr>
                            <tr>
                                <td>연면적</td>
                                <td>{{apt.aptArea}}㎡ ({{Math.floor(apt.aptArea/3.3)}}평)</td>
                            </tr>
                            <tr>
                                <td>사용승인일</td>
                                <td>{{apt.aptBuildYear}} 준공</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="map-info">
                    <div class="map-info-title">
                        <h3>주변 편의시설 알아보기</h3>
                    </div>
                    <div class="map-button-wrap">
                        <ul>
                            <li><button value="CS2" @click="searchConv($event)">편의점</button></li>
                            <li><button value="HP8" @click="searchConv($event)">병원</button></li>
                            <li><button value="PM9" @click="searchConv($event)">약국</button></li>
                            <li><button value="SC4" @click="searchConv($event)">학교</button></li>
                            <li><button value="SW8" @click="searchConv($event)">지하철</button></li>
                            <li><button value="MT1" @click="searchConv($event)">대형마트</button></li>
                            <li><button value="AG2" @click="searchConv($event)">중개업소</button></li>
                            <li><button value="PO3" @click="searchConv($event)">공공기관</button></li>
                        </ul>
                    </div>
                    <div class="map-main">

                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    name: 'aptDetail',
    components: {},
    data() {
        return {
            mapComp: null,
            mapDupl: null,
            message: '',
        };
    },
    created() {},
    mounted(){
        kakao.maps.load(this.initMap);
    },
    computed:{
        ...mapState(["apt"]),
    },
    methods: {
        ...mapMutations([
			'aptDetail',
		]),
        initMap(){
            const container = document.querySelector(".map-main");
            const options = {
                center: new kakao.maps.LatLng(this.$store.state.apt.lat, this.$store.state.apt.lng),
                level: 3,
            };
            let map = new kakao.maps.Map(container, options);
            this.mapComp = map;
            this.mapDupl = map;

            var markerPosition  = new kakao.maps.LatLng(this.$store.state.apt.lat, this.$store.state.apt.lng); 

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            
        },
        searchConv(e){
            const container = document.querySelector(".map-main");
            const options = {
                center: new kakao.maps.LatLng(this.$store.state.apt.lat, this.$store.state.apt.lng),
                level: 3,
            };
            let map = new kakao.maps.Map(container, options);
            this.mapComp = map;
            this.mapDupl = map;

            var markerPosition  = new kakao.maps.LatLng(this.$store.state.apt.lat, this.$store.state.apt.lng); 

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            
            let ps = new kakao.maps.services.Places(map); 
            let categoryCode = e.target.value;

            ps.categorySearch(categoryCode, placesSearchCB, {useMapBounds:true}); 

            // 키워드 검색 완료 시 호출되는 콜백함수 입니다
            function placesSearchCB (data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                    for (var i=0; i<data.length; i++) {
                        displayMarker(data[i]);    
                    }       
                }
            }


            // 지도에 마커를 표시하는 함수입니다
            function displayMarker(place) {
                // 마커를 생성하고 지도에 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(place.y, place.x) 
                });

                // 마커에 클릭이벤트를 등록합니다
                kakao.maps.event.addListener(marker, 'click', function() {
                    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                    infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                    infowindow.open(map, marker);
                });

            }
            this.mapComp = map;
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/function.scss";

.block-center{
    @include block-center(1200px);
    .description{
        margin-top:50px;
        @include flex(flex);
        .description-img-wrap{
            @include setSize(720px, 460px);
            img{
                width:100%;
            }
        }
        .description-info-wrap{
            @include setSize(480px, 460px);
            padding-left:60px;
            .descinfo-thumbnail{
                @include flex(flex, null, center);
                span{
                    &:nth-child(1){
                        @include setSize(100px, 26px);
                        background-color: #16BDC6;
                        @include font(14px, 500, #fff);
                        @include flex(flex, center, center);
                    }
                    &:nth-child(2), &:nth-child(3){
                        @include font(12px, 400, #B0B3A9);
                        margin-left:10px;
                    }
                }
            }
            .descinfo-title{
                margin-top:34px;
                padding-bottom:28px;
                border-bottom: 2px solid #E0E0E0;
                h3{
                    @include font(24px, 700, #323232);
                }
            }
            .descinfo-desc{
                margin-top:34px;
                p{
                    @include font(16px, 400, #595959);
                    line-height:24px;
                }
                select{
                    @include setSize(450px, 40px);
                    margin-top:54px;
                    padding:10px;
                    border: 1px solid #D9D9D9;
                    @include font(14px, 500, #D9D9D9);
                }
                button{
                    @include setSize(452px, 50px);
                    background-color:#4F4F4F;
                    @include font(14px, 700, #F4FFF4);
                    margin-top:16px;
                    border:none;
                    cursor:pointer;
                }
            }
            .apt-share{
                margin-top:18px;
                ul{
                    @include flex(flex, flex-start, center);
                    li{
                        @include setSize(180px, 50px);
                        border: 2px solid #D9D9D9;
                        border-radius: 30px;
                        @include flex(flex, center, center);
                        cursor:pointer;
                        margin-left:10px;
                        &:nth-child(1){
                            margin-left:0px;
                        }
                        img{
                            @include setSize(20px, 20px);
                        }
                        span{
                            @include font(14px, 700, #5A5D5A);
                            padding-left:6px;
                        }
                    }
                }
            }
        }
    }
    .info{
        @include setSize(1200px);
        .info-nav{
            border-bottom:2px solid #EEEEEE;
            ul{
                height:80px;
                @include flex(flex, flex-start, center);
                li{
                    @include setSize(80px);
                    @include font(16px, 400, #666666);
                    cursor:pointer;
                }
            }
        }
        .info-content{
            .info-content-title{
                margin-top:78px;
                h3{
                    @include font(32px, 700, #084895);
                }
                p{
                    @include font(16px, 400, #222222);
                    margin-top:16px;
                }
                .title-button-wrap{
                    margin-top: 28px;
                    ul{
                        @include flex(flex, null, center);
                        li{
                            @include setSize(100px, 40px);
                            border: 1px solid #E5E5E5;
                            border-radius: 30px;
                            margin-left:12px;
                            @include flex(flex, center, center);
                            &:nth-child(1){
                                margin-left:0px;
                            }
                        }
                    }
                }
            }
        }

        .keypoint{
            margin-top:78px;
            .keypoint-title-wrap{
                h3{
                    @include font(32px, 700, #084895);
                }
            }
            ul{
                margin-top:18px;
                li{
                    @include font(16px, 400, #222222);
                    line-height:28px;
                }
            }
        }

        .building-desc{
            margin-top:88px;
            .building-desc-title{
                padding-bottom:30px;
                border-bottom: 2px solid #084895;
                h3{
                    @include font(32px, 700, #084895);
                }
            }
            .building-desc-content{
                margin-top:32px;
                table{
                    tr{
                        td{
                            line-height:30px;
                            &:nth-child(1){
                                @include font(17px, 400, #666666);
                            }
                            &:nth-child(2){
                                padding-left:20px;
                                @include font(17px, 400, #222222);
                            }
                        }
                    }
                }
            }
        }

        .map-info{
            margin-top:78px;
            .map-info-title{
                h3{
                    @include font(32px, 700, #084895);
                }
            }
            .map-button-wrap{
                margin-top:20px;
                ul{
                    @include flex(flex, center, center);
                    li{
                        button{
                            @include setSize(126px, 40px);
                            background-color:#f5f5f5;
                            border:none;
                            border-radius:4px;
                            margin-left:16px;
                            box-sizing: border-box;
                            padding:10px;
                            cursor:pointer;
                            
                            &:focus{
                                background-color:#326CF9;
                                @include font(14px, 400, #fff);
                            }
                            option{
                                background-color:#f5f5f5;
                                @include font(14px, 400, #737373);
                            }
                        }
                        &:nth-child(1){
                            button{
                                margin-left:0px;
                            }
                        }
                    }
                }
            }
            .map-main{
                @include setSize(1000px, 700px);
                margin:0 auto;
                margin-top:20px;
                margin-bottom:180px;
            }
        }
    }
}

</style>