<template>
    <div class="columnCenter">
        <div class="message">如果你❤️我的软件或游戏，你可以通过下面赞赏码给我<span>打赏/鼓励🎁</span>，谢谢😘</div>
        <img id="donate" :src="require('@/assets/img/donate.jpg')" />
    </div>
</template>

<script>
export default {
    name: 'Donate',
}
</script>

<style scoped>
#donate {
    margin: 8px 0 16px 0;
    width: 300px;
    height: 300px;
}
</style>