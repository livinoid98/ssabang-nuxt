<template>
    <div>
        <div class="modal-back">
            <div class="modal">
                <div class="modal-title">
                    <div class="icon-wrap">
                        <img src="@/assets/img/exclamanation-icon.png" alt="">
                    </div>
                    <div class="modal-title-bi">
                        <h3>내 집 마련의 시작, 싸방</h3>
                    </div>
                </div>
                <div class="modal-content">
                    <p></p>
                </div>
                <div class="modal-button-wrap">
                    <button class="close-modal">확인</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            message: '',
        };
    },
    created() {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/function.scss";
    .modal-back{
        width:100%;
        height:100%;
        position:fixed;
        top:0;
        left:0;
        background-color:rgba(00,00,00,0.6);
        @include flex(flex, center, center);
        .modal{
            @include setSize(800px, 400px);
            background-color:#fff;
            @include flex(flex, center, center);
            flex-direction: column;
            border-radius:12px;
            .modal-title{
                @include flex(flex, center, center);
                flex-direction: column;
                .icon-wrap{
                    @include setSize(40px, 40px);
                    
                    img{
                        @include setSize(100%, 100%);
                    }
                }
                .modal-title-bi{
                    margin-top:20px;
                    h3{
                        @include font(24px, 700, #3B3B41);
                    }
                }
            }
            .modal-content{
                margin-top:12px;
                p{
                    @include font(18px, 600, #1B1B22);
                    line-height:24px;
                }
            }
            .modal-button-wrap{
                margin-top:20px;
                button{
                    @include setSize(140px, 35px);
                    border:none;
                    border-radius: 6px;
                    cursor:pointer;
                    &:hover{
                        background-color:#326CF9;
                        @include font(14px, 400, #fff);
                    }
                }
            }
        }
    }
</style>