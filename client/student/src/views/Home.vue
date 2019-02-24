<template>
  <section class="home">
    <img v-lazy="require('@/assets/backimg.png')" alt="logo">
    <div class="btn">
      <mu-button color="secondary" :to="'/register'">注册</mu-button>
      <mu-button color="secondary"  :to="'/login'">登录</mu-button>
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

