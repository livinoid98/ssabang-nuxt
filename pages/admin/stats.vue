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
                        <h3>사용자 성별 추이</h3>
                        
                        <div class="graph"></div>

                    </div>
                    <div class="article-chart-wrap">
                        <h3>회원가입 추가정보 응답률</h3>

                        <div class="graph2"></div>
                    </div>
                </div>


                <div class="user-age-wrap">
                    <h3>사용자 연령별 추이</h3>
                    <svg ref="line"></svg>
                    <svg id="chart"></svg>

                    
                
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
            data: [10, 90, 72, 75, 25, 10, 92, 10],
        }
    },
    created(){
        
    },
    mounted() {
        const svg = d3
            .select(this.$refs.line)
            .attr("width", 1200)
            .attr("height", 400);

        svg
            .append("path")
            .datum(this.data)
            .attr("fill", "none")
            .attr("stroke", "#D2673F")
            .attr("stroke-width", 2)
            .attr("d", this.line);


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
        var colors = d3.scaleOrdinal(d3.schemeCategory10);
        
        var oneGraph = graphWrap.selectAll("path").data(pie(graphData));
        oneGraph.enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate("+(w/2)+","+(h/2)+")")
            .style("fill", function(d, i) {
                return colors(graphData[i]);})
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
        
        var graphData = [50, 30, 20];
        var pie = d3.pie();
        var arc = d3.arc().innerRadius(0).outerRadius(100);
        var colors = d3.scaleOrdinal(d3.schemeCategory10);
        
        var oneGraph = graphWrap.selectAll("path").data(pie(graphData));
        oneGraph.enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate("+(w/2)+","+(h/2)+")")
            .style("fill", function(d, i) {
                return colors(graphData[i]);})
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
        line() {
            return d3
                .line()
                .x((d, i) => this.xScale(i))
                .y((d) => this.ySclae(d));
        },
        xScale() {
            return d3
                .scaleLinear()
                .range([60, 1140])
                .domain(d3.extent(this.data, (d, i) => i));
        },
        ySclae() {
            return d3.scaleLinear().range([280, 20]).domain([0, 100]);
        },
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
                h3{
                    @include font(18px, 400, #666);
                    text-align:center;
                }

               



            }
            .article-chart-wrap{
                @include setSize(600px, 600px);
                h3{
                    @include font(18px, 400, #666);
                    text-align:center;
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
        }
        
        
    }
}
</style>