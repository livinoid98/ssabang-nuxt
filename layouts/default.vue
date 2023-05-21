<template>
  <div>
    <client-only>
        <Header/>
        <nuxt/>
        <div class="cart">
			<div class="cart-title">
				<h3>최근 본 매물 : {{cart.length}} </h3>
			</div>
			<div class="cart-content">
				<ul>
					<li v-for="(cart,index) in cart" :key="index">
						<img src="@/assets/img/room1.png" alt=""/>
						<h4>{{cart.apartmentName}}</h4>
						<p>{{cart.dong}} {{cart.roadName}} {{cart.floor}}층</p>
					</li>
				</ul>
			</div>
			<div class="button-wrap">
				<ul>
					<li>
						<button><img src="@/assets/img/arrow-icon.png" alt=""></button>
					</li>
					<li>
						<button><img src="@/assets/img/arrow-icon.png" alt=""></button>
					</li>
				</ul>
			</div>
		</div>
        <Footer/>
    </client-only>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {mapState} from 'vuex';

export default {
    components: {Header, Footer},
    computed: {
        ...mapState(["cart"]),
    },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    font-family: 'Noto Sans KR', sans-serif !important;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
    text-decoration: none;
    color:inherit;
}

@mixin setSize($width:null, $height: null){
    width: $width;
    height: $height;
}

@mixin block-center($width: null){
    width: $width;
    margin:0 auto;
}

@mixin position-center{
    position:relative;
    left:50%;
    transform: translateX(-50%);
}

@mixin font($size:null, $weight:null, $color: null){
    font-size: $size;
    font-weight: $weight;
    color: $color;
}

@mixin flex($display:null, $content:null, $align:null){
    display: $display;
    justify-content: $content;
    align-items: $align;
}

header{
    @include setSize(1200px, 92px);
    margin:0 auto;
    @include flex(flex, null, center);
    border-bottom:2px solid #E7E7E7;
    .logo{
        width:120px;
        svg{
            width:100%;
        }
    }
    nav{
        @include setSize(100%, 92px);
        @include flex(flex, space-between, center);
        margin-left:22px;
        ul{
            @include flex(flex, null, center);
            li{
                margin-left:28px;
                @include font(16px, 400, #838383);
            }
        }
        .nav-right{
            margin-right: 28px;
        }
    }
}

footer{
    @include setSize(100%, 340px);
    @include flex(flex, null, center);
    border-top:2px solid #DDDDDD;
    .footer-wrap{
        @include block-center(1200px);
        @include font(12px, 400, #999C9F);
        ul{
            @include flex(flex, null, center);
            li{
                @include font(14px, 400, #585A58);
                margin-left:32px;
                &:first-child{
                    margin-left:0px;
                }
            }
        }
        .call{
            @include flex(flex, null, center);
            margin-top:36px;
            .phone-num{
                @include font(24px, 600, #999999);
                margin-left:12px;
            }
            p{
                margin-left:14px;
            }
        }
        .address-text{
            margin-top:6px;

        }
        .copyright-text{
            margin-top:32px;
        }
        .copyright-logo{
            margin-top:16px;
        }
    }
}

.cart{
    position:fixed;
    right:30px;
    top:50%;
    transform: translateY(-50%);
    z-index:999;
    .cart-title{
        @include setSize(130px, 40px);
        background-color:#444444;
        @include flex(flex, center, center);
        @include font(13px, 400, #fff);
    }
    .cart-content{
        @include setSize(130px);
        background-color:#fff;
        border:1px solid #ddd;
        padding:10px;
        box-sizing: border-box;
        ul{
            li{
                padding: 10px 0px;
                text-align: center;
                img{
                    @include setSize(100px, 100px);
                }
                h4{
                    @include font(12px, 400, #8F8F8F);
                    margin-top:6px;
                    line-height:14px;
                }
                p{
                    @include font(10px, 400, #ACADA8);
                    margin-top:2px;
                    line-height:14px;
                }
            }
        }
    }
    .button-wrap{
        @include setSize(130px, 26px);
        ul{
            height:100%;
            @include flex(flex, center, center);
            li{
                @include setSize(100%, 100%);
                button{
                    @include setSize(100%, 100%);
                    background-color: #fff;
                    border:1px solid #ddd;
                    border-top:none;
                    cursor:pointer;
                    img{
                        @include setSize(16px, 16px);
                    }
                }
                &:nth-child(1){
                    button{
                        img{
                            transform: rotate(180deg);
                        }
                    }
                }
            }
        }
    }
}
</style>

