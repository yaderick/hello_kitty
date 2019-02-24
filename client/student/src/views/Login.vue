<style lang="less">
  .register-wraper{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    h3{
      margin: 20px;
    }
    .register-form{

    }
  }
</style>
<template>
  <mu-container class="register-wraper">
    <h3>欢迎来到花花老师的班级</h3>
    <mu-form :model="formData" class="register-form" :label-position="'right'"  ref="register" :label-width='"100px"'>
      <mu-form-item prop="username" label="用户名" help-text="请输入注册时的中文名_英文名" :rules="zhNameRules">
        <mu-text-field v-model="formData.username"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="password" label="密码:" :rules="passwordRules">
        <mu-text-field type="password" v-model="formData.password"></mu-text-field>
      </mu-form-item>
    </mu-form>
     <mu-button color="success" @click="submit">登录</mu-button>
  </mu-container>
</template>
<script>

import Vue from 'vue';
import rules from '@/mixin';
import Util from '@/libs/until'
export default {
  mixins:[rules],
  created() {
    this.interceptors()
  },
  data(){
    return {
      formData:{
        username: '',
        password: '',
      },
    }
  },
  methods: {
    interceptors(){
      Util.ajax.interceptors.request.use(config => {
        config.headers.common['Authorization'] = 'Bearer ' + Vue.ls.get("User-token");
        return config
      }, error => {
        return Promise.reject(error)
      });

      Util.ajax.interceptors.response.use(response => {
        // 如果后端有新的token则重新缓存

        let newToken = response.headers['new-token'];
        if (newToken) {
          Vue.ls.set("User-token", newToken);
        }
        return response;
      }, error => {
        return Promise.reject(error)
      });
    },

    submit(){
      this.$refs.register.validate().then(res => {
        if(!res) return
        Util.ajax({
          method: 'post',
          url: '/user/login',
          data: this.formData,
          timeout: 30000,
        }).then(res => {
          if(res.data.code == 200) {
            // this.userName = res.data.username;
            this.$alert('登录成功了', '登录');
            this.$router.push('./attend')
          }
        })
      })
    }
  },
}
</script>
