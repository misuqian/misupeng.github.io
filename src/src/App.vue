<template>
 <div id="app" class="bg">
    <router-view/>
 </div>
</template>

<script>

export default {
  data() {
      return {
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
  background-image: linear-gradient(45deg, #f5f5f5 25%, transparent 0, transparent 75%, #f5f5f5 0), linear-gradient(45deg, #f5f5f5 25%, transparent 0, transparent 75%, #f5f5f5 0);
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
</style>
