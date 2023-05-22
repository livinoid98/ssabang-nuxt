<template>
    <div>
        <p>admin page</p>
    </div>
</template>

<script>
import * as d3 from "d3";
import axios from "axios";

export default{
    data(){
        return{
            data: []
        }
    },
    methods:{
        loadAnalytics(){
            
        },
    },
    async fetch(){
        let response = await axios.get('https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A290668149&dimensions=ga%3Asource%2Cga%3Akeyword&metrics=ga%3Ausers%2Cga%3Asessions%2Cga%3Aentrances&start-date=300daysAgo&end-date=yesterday');
        console.log(response);
    }
}
</script>

<style>

</style>