<template>
    <div>
        <form>
            아이디 : <input type="text" />
            비밀번호 : <input type="password" />
            <input type="submit" @click.prevent="loginAdmin">
        </form>
    </div>
</template>

<script>
import http from "@/assets/api/http.js";

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
        async loginAdmin(){
            const id = document.querySelector("input[type='text']").value;
            const password = document.querySelector("input[type='password']").value;

            let response = await http.post('/api/manager/login',{
                userId : id,
                userPw : password,
            });

            console.log(response.data.manager);

            try{
                this.$store.commit('saveLoginManager', response.data.manager);
                this.$router.push('/');
            }catch(e){
                this.$router.push('/admin/login');
            }


        }
    },
};
</script>

<style scoped lang="scss">

</style>