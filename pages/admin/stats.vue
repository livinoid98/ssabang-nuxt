<template>
    <div>
        <h1>Hello Analytics Reporting API V4</h1>

        <!-- The Sign-in button. This will run `queryReports()` on success. -->
        <p class="g-signin2" data-onsuccess="queryReports"></p>

        <!-- The API response will be printed here. -->
        <textarea cols="80" rows="20" id="query-output"></textarea>

    </div>
</template>

<script>
import * as d3 from "d3";
import axios from "axios";

export default{
    data(){
        return{

        }
    },
    methods:{

    },
    async fetch(){

    }
}
</script>
    
<style>

</style>