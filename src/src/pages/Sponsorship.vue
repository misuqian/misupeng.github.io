<template>
  <div class="columnCenter">
    <img class="logo" :src="require('@/assets/img/misuqian.png')" @click="logoTap"/>
    <div class="title">欢迎使用我的作品{{appName}}</div>
    <div class="message">这些<span>软件/游戏🎮</span>都是我大学期间或工作业余时间开发的。</div>
    <div class="message"><span>软件基本都是免费工具</span>，主要为了方便我个人和更多人🍉。</div>
    <div class="message"><span>游戏为了好玩又赚钱😂</span>，如有独立游戏美术欢迎联系我🤩。</div>
    <div class="gap" />
    <WechatStar/>
    <div class="gap" />
    <Donate />
    <div class="gap" />
    <div class="message">下面是我目前所有公开作品，欢迎体验：</div>
    <AppList/>
  </div>
</template>

<script>
import Donate from '@/components/Donate';
import AppList from '@/components/AppList';
import WechatStar from '@/components/WechatStar';
import router from '@/router';

export default {
  components: {
    Donate,
    AppList,
    WechatStar
  },
  data() {
    return {
      appName: ''
    }
  },
  methods: {
    logoTap() {
      router.push('home')
    }
  },
  mounted() {
    if (this.$route && this.$route.query) {
      let appName = this.$route.query.app || ''
      if (appName) {
        appName = `《${appName}》`
      }
      this.$data.appName = appName;
    }
  }
}
</script>

<style scoped>
</style>
