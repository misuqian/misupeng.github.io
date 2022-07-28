<template>
  <div class="columnCenter">
    <img class="logo" :src="require('@/assets/img/misuqian.png')" @click="logoTap"/>
    <div class="title">欢迎使用我的作品</div>
    <div class="textArea cloumn">
      <div class="message">这些都是我大学期间和工作后业余时间开发的<span>软件/游戏🎮。</span></div>
      <div class="message"><span>软件基本都是免费工具类</span>，开发目的是为了满足我个人需求，公开后希望也能方便更多人🤩。</div>
      <div class="message"><span>游戏为了好玩又赚钱😂</span>，如有独立游戏美术欢迎联系我🤩</div>
      <div class="message"><b>联系方式：</b><span>微信公众号@HelloMicoder</span>，<span>misuqian@gmail.com</span></div>
    </div>
    <div class="gap" />
    <Donate />
    <div class="gap" />
    <div class="message">以下是我目前所有公开作品，欢迎体验：</div>
    <AppList/>
  </div>
</template>

<script>
import Donate from '@/components/Donate';
import AppList from '@/components/AppList';
import router from '@/router';

export default {
  components: {
    Donate,
    AppList
  },
  data() {
    return {
    }
  },
  methods: {
    logoTap() {
      router.push('home')
    }
  }
}
</script>

<style scoped>
</style>
