<template>
 <div id="app" class="bg">
    <router-view/>
    <div class="footer">
      <div class="beian" v-if="beian">备案号：<a href="https://beian.miit.gov.cn/">{{ beian }}</a></div>
      <div class="copyright">©2016-{{ now }} Peng Qian. All rights reserved.</div>
    </div>
 </div>
</template>

<script>

export default {
  data() {
      const beian = '粤ICP备2023150320号-2';
      return {
        now: new Date().getFullYear(),
        beian,
      };
    },
    methods: {
    }
}
</script>

<style>
.bg {
  height: 100%;
  min-height: 100vh;
  background-image:
    linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%), 
    linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%);
  background-position: 0 0, 32px 32px;
  background-size: 64px 64px;
  text-align: center;
}

#app {
  font-family: Helvetica Neue,PingFang SC,Microsoft YaHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

.footer .beian{
  font-size: 12px;
  color: #333;
  margin: 10px 0 4px 0;
}

.footer .copyright{
  font-size: 12px;
  color: #333;
}
</style>
