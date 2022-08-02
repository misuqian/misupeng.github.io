<template>
  <div class="columnCenter">
    <img class="logo" :src="require('@/assets/img/apps/mitang.png')" />
    <div class="title">欢迎使用《米汤姐的相馆》</div>
    <div class="textArea cloumn">
      <div class="message">《米汤姐的相馆》<span>于2016年偶然开发</span></div>
      <div class="message">它志在帮助大家能够<b>免费且高效地完成长图拼接</b></div>
      <div class="message">多年过去，目前它除了<b>长图拼接</b>，还能<span>拼接瀑布图</span>，给<span>图片上马赛克/添加文字边框</span>，以及切割成宫格布局</div>
      <div class="message">希望这些功能，能够<b>真正帮助到你</b></div>
    </div>
    <div class="gap" />
    <WechatStar/>
    <div class="gap" />
    <div class="message">最后偷偷告诉你：<span>如果想拼横屏长图，把手机横置过来即可</span></div>
    <div class="message"><b>不用谢😄</b></div>
    <div class="gap" />
  </div>
</template>

<script>
import WechatStar from '@/components/WechatStar';

export default {
  components: {
    WechatStar,
  },
  data() {
    return {
     
    }
  },
}
</script>

<style scoped>
</style>
