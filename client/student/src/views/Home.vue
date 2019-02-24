<template>
  <section class="home">
    <img v-lazy="require('@/assets/backimg.png')" alt="logo">
    <div class="btn">
      <mu-button color="secondary" event="handleRegister">注册</mu-button>
      <mu-button color="secondary">登录</mu-button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
    }
  },
  methods: {
    handleRegister(){
    debugger
  }
  },
};
</script>

<style lang="less">
  .home{
    display: flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
    }
    .btn{
      position: absolute;
      bottom:100px;
      .mu-button{
        margin: 10px;
      }
    }
  }
</style>

