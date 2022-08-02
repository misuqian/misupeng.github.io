<template>
    <div class="columnCenter">
        <div class="message">如果你❤️我的软件或游戏，或想联系我们，欢迎<span>关注我和米汤姐的微信公众号</span></div>
        
        <div class="rowCenter">
            <div class="column startCard">
                <div class="message">我的公众号：<b>@HelloMicoder</b></div>
                <img class="startImg" :src="require('@/assets/img/wechat_misu.jpg')" />
            </div>
            <div class="column startCard">
                <div class="message">米汤姐的公众号：<b>@Mitangjie44</b></div>
                <img class="startImg" :src="require('@/assets/img/wechat_mitang.jpg')" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Donate',
}
</script>

<style scoped>
.startCard {
    width: 300px;
    height: 180px;
}

.startCard .message {
    height: 24px;
    line-height: 24px;
}

.startImg {
    margin: 8px 0 0 0;
    width: 230px;
}
</style>