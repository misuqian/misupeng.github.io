<template>
  <div class="columnCenter">
    <img class="logo" :src="require('@/assets/img/misuqian.png')" />
    <div class="title">Peng Qian</div>
    <div class="textArea cloumn">
      <div class="detail"><span>南方科技大学</span>13级本科生，<span>曾经立志做独立开发者</span>，如今在某厂搬砖🧱，女朋友叫米汤姐。</div>
      <div class="message"><b>最喜欢的语言：</b>JavaScript，C++。</div>
      <div class="message"><b>最擅长的技能：</b><span>iOS</span>，<span>桌面客户端（QT）</span>，Web（Vue，微信小程序)。</div>
      <div class="message"><b>其他业余爱好：</b>UE4，Unity，Sketch，PS，《炉石传说》，《流放之路》，《Dota2》，《暗黑破坏神3》...</div>
    </div>
    <div class="btnArea rowCenter">
      <button class="linkCard" v-for="link in links" v-bind:key="link.title" @click="linkTap(link)">
        <img class="linkImg" :src="link.img" />
        <div class="linkTitle">{{ link.title }}</div>
      </button>
    </div>
    <div class="gap" />
    <div class="textArea cloumn">
      <div class="message">大学期间和工作后业余时间开发了一些<span>软件/游戏🎮。</span></div>
      <div class="message"><span>软件基本都是免费工具类</span>，开发目的是为了满足我个人需求，公开后希望也能方便更多人🤩。</div>
      <div class="message">游戏一直是我的心结，我一定要好好靠它赚大钱😂</div>
    </div>
    <AppList/>
    <div class="gap" />
    <Donate />
  </div>
</template>

<script>
import Donate from '@/components/Donate';
import AppList from '@/components/AppList';

export default {
  components: {
    Donate,
    AppList
  },
  data() {
    return {
      links: [
        { title: 'Github', img: require('@/assets/img/github.png'), url: 'https://github.com/misuqian' },
        { title: '我的公众号', img: require('@/assets/img/wechat.png'), url: 'https://mp.weixin.qq.com/s/B5_tqAJo_0_C5s8SMTG9Pg' },
        { title: '米汤姐的公众号', img: require('@/assets/img/wechat.png'), url: 'https://mp.weixin.qq.com/s/CtTwZbxvj3RBbwgZo2qztQ' },
      ],
    }
  },
  methods: {
    linkTap(link) {
      if (!link || !link.url) return;
      let url = link.url;
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.linkCard {
  height: 32px;
  background-color: #fff;
  border: #000 1px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 10px;
  font-size: 16px;
  margin: 0 8px 4px 0;
}

.linkCard .linkImg {
  width: 24px;
  height: 24px;
  color: #333;
  margin: 0 4px 0 4px;
}

.linkCard:hover {
  background-color: #e5e5e5;
  color: #000;
}
</style>
