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
      <mu-form-item prop="zhName" label="姓名(zh):" help-text="请输入中文姓名" :rules="zhNameRules">
        <mu-text-field v-model="formData.zhName"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="enName" label="姓名(en):" help-text="请输入英文姓名" :rules="enNameRules">
        <mu-text-field v-model="formData.enName"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="class_id" label="班级:" :rules="class_idRules">
        <mu-select v-model="formData.class_id"  full-width>
          <mu-option v-for="(option,index) in classes" :key="index" :label="option.label" :value="option.value"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item prop="age" label="出生日期:">
        <mu-text-field v-model="formData.age"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="sex" label="性别:">
        <mu-radio v-model="formData.sex" value="0" label="Boy"></mu-radio>
        <mu-radio v-model="formData.sex" value="1" label="Girl"></mu-radio>
      </mu-form-item>
      <mu-form-item prop="telephone" label="电话:">
        <mu-text-field v-model="formData.telephone"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="password" label="设置密码:" :rules="passwordRules">
        <mu-text-field type="password" v-model="formData.password"></mu-text-field>
      </mu-form-item>
      <mu-form-item  prop="repeat" label="重复密码:" :rules="repeatRules">
        <mu-text-field type="password" v-model="formData.repeat"></mu-text-field>
      </mu-form-item>
    </mu-form>
     <mu-button color="success" @click="submit">注册</mu-button>
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
    this.queryClass()
  },
  data(){
    return {
      formData:{
        zhName: '',
        enName: '',
        class_id: '',
        age:'',
        sex: '',
        telephone: '',
        password: '',
        repeat: ''
      },
      classes:[],
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
    queryClass(){
      // let _this = this
      Util.ajax({
          method: 'get',
          url: '/class/list',
          timeout: 30000,
          headers:{'Content-Type' : "application/json" }
        }).then(res => {
          if(res.data.code == 200) {
            const list = res.data.data.classList;
            this.classes = list.map(classVal => {
              return {
                label: classVal.className,
                value: classVal.id
              }
            })
          }
        })
    },
    submit(){

      this.$refs.register.validate().then(res => {
        if(!res) return
        Util.ajax({
          method: 'post',
          url: '/user/register',
          data: this.formData,
          timeout: 30000,
          headers:{'Content-Type' : "application/json" }
        }).then(res => {
          if(res.data.code == 200) {
            const token = res.data.data
            Vue.ls.set("User-token", token);
            this.$alert('注册成功了,欢迎去登录', '注册');
          }
        })
      })
    } 
  },
}
</script>
