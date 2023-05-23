<template>
    <div>
        <div class="main-banner">
			<div class="opacity-layer"></div>
			<div class="main-title">
				<h3>관리자페이지</h3>
				<p>사용자 행동 분석 및 사용자 관리</p>
			</div>
		</div>
        <div class="chart-wrap">
            <div class="chart-center">

                <div class="separate-wrap">
                    <div class="user-gender-wrap">
                        <div class="user-gender-title">
                            <h3>
                                <div class="black">SSABANG</div><br/>
                                사용자 성별 추이
                            </h3>
                            <ul>
                                <li>
                                    <div class="square"></div>
                                    <span>남성</span>
                                </li>
                                <li>
                                    <div class="square"></div>
                                    <span>여성</span>
                                </li>
                                <li>
                                    <div class="square"></div>
                                    <span>응답없음</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="graph"></div>

                    </div>
                    <div class="add-info-wrap">
                        <div class="add-info-title">
                            <h3>
                                <div class="black">SSABANG</div><br/>
                                추가정보 제공량
                            </h3>
                            <ul>
                                <li>
                                    <div class="square"></div>
                                    <span>무응답</span>
                                </li>
                                <li>
                                    <div class="square"></div>
                                    <span>정보제공</span>
                                </li>
                            </ul>
                        </div>

                        <div class="graph2"></div>
                    </div>
                </div>


                <div class="user-age-wrap">
                    <h3>사용자 연령별 추이</h3>
                    <svg ref="line"></svg>
                    <svg id="rectGraph"></svg>

                    
                
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import * as d3 from "d3";
import http from "@/assets/api/http.js";

export default{
    data(){
        return{
            dataSet : [120, 70, 175, 80, 220, 70, 65],
        }
    },
    created(){
        
    },
    mounted() {

        let svgHeight = 240;
        let barElements;

        barElements = d3.select("#rectGraph")
            .selectAll("rect")
            .data(this.dataSet)

        barElements.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("height", (d,i) => {
                return d;
            })
            .attr("width", 20)
            .attr("x", (d,i) => {
                return i*25;
            })
            .attr("y", (d,i) => {
                return svgHeight - d;
            })
            .selectAll("rect")
            .data(this.dataSet)
            .enter()
            .append("rect")

        var w = 400, h = 400;
        d3.select(".graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "graphWrap");
        var graphWrap = d3.select("#graphWrap");
        
        var graphData = [50, 30, 20];
        var pie = d3.pie();
        var arc = d3.arc().innerRadius(0).outerRadius(100);
        var colors = ["#FF414D", "#FC646E", "#FA888F"];
        
        var oneGraph = graphWrap.selectAll("path").data(pie(graphData));
        oneGraph.enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate("+(w/2)+","+(h/2)+")")
            .style("fill", function(d, i) {
                return colors[i];})
            .transition()
            .duration(1000)
            .delay(function(d, i) {
                return i * 1000;
            })
            .attrTween("d", function(d, i) {
                var interpolate = d3.interpolate(
                    {startAngle : d.startAngle, endAngle : d.startAngle},
                    {startAngle : d.startAngle, endAngle : d.endAngle}
                );
                return function(t){
                    return arc(interpolate(t));
                }
            });

        var w = 400, h = 400;
        d3.select(".graph2")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "graphWrap2");
        var graphWrap = d3.select("#graphWrap2");
        
        var graphData = [65, 35];
        var pie = d3.pie();
        var arc = d3.arc().innerRadius(0).outerRadius(100);
        var colors = ["#FF414D", "#FC646E", "#FA888F"];
        
        var oneGraph = graphWrap.selectAll("path").data(pie(graphData));
        oneGraph.enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate("+(w/2)+","+(h/2)+")")
            .style("fill", function(d, i) {
                return colors[i];})
            .transition()
            .duration(1000)
            .delay(function(d, i) {
                return i * 1000;
            })
            .attrTween("d", function(d, i) {
                var interpolate = d3.interpolate(
                    {startAngle : d.startAngle, endAngle : d.startAngle},
                    {startAngle : d.startAngle, endAngle : d.endAngle}
                );
                return function(t){
                    return arc(interpolate(t));
                }
            });

    },
    computed:{

    },
    methods:{

    },
    async fetch(){
        
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
        text-align: center;
        h3{
            @include font(42px, 700, #fff);
        }
        p{
            @include font(14px, 400, #fff);
            margin-top:9px;
        }
    }
}

.chart-wrap{
    width:100%;
    .chart-center{
        @include block-center(1200px);

        .separate-wrap{
            @include flex(flex, center, center);
            .user-gender-wrap{
                @include setSize(600px, 600px);
                @include flex(flex, center, center);
                .user-gender-title{
                    h3{
                        @include font(28px, 700, #FF414D);
                        line-height:17px;
                        .black{
                            @include font(28px, 700, #262626);
                        }
                    }
                    ul{
                        margin-top:48px;
                        li{
                            @include flex(flex, flex-start, center);
                            margin-top:8px;
                            .square{
                                @include setSize(30px, 30px);
                                border-radius:8px;
                            }
                            &:nth-child(1){
                                .square{
                                    background-color: #FF414D;
                                }
                            }
                            &:nth-child(2){
                                .square{background-color: #FC646E;}
                            }
                            &:nth-child(3){
                                .square{background-color: #FA888F;}
                            }
                            span{
                                margin-left:6px;
                            }
                        }
                    }
                }

               



            }
            .add-info-wrap{
                @include setSize(600px, 600px);
                @include setSize(600px, 600px);
                @include flex(flex, center, center);
                .add-info-title{
                    h3{
                        @include font(28px, 700, #FF414D);
                        line-height:17px;
                        .black{
                            @include font(28px, 700, #262626);
                        }
                    }
                    ul{
                        margin-top:48px;
                        li{
                            @include flex(flex, flex-start, center);
                            margin-top:8px;
                            .square{
                                @include setSize(30px, 30px);
                                border-radius:8px;
                            }
                            &:nth-child(1){
                                .square{
                                    background-color: #FF414D;
                                }
                            }
                            &:nth-child(2){
                                .square{background-color: #FC646E;}
                            }
                            &:nth-child(3){
                                .square{background-color: #FA888F;}
                            }
                            span{
                                margin-left:6px;
                            }
                        }
                    }
                }

            }
        }


        .user-age-wrap{
            @include setSize(1200px, 600px);
            @include flex(flex, center, center);
            flex-direction: column;
            h3{
                @include font(20px, 400, #666);
                text-align:center;
                margin-bottom:10px;
            }
            #rectGraph{
                @include setSize(1000px, 600px);
            }
        }
        
        
    }
}
</style>