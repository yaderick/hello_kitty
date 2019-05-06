<template>
  <div>
    欢迎👏 {{name}}

  </div>
</template>
<script>
export default {
  created() {
    console.log(this.userName,'this.$userName')
  },
  data(){
    return{
      name: this.$userName
    }
  }
}
</script>