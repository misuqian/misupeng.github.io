<template>
    <div class="btnArea rowCenter">
        <button class="appCard" v-for="app in apps" v-bind:key="app.title" @click="linkTap(app)">
            <img class="appImg" :src="app.img" />
            <div class="column">
                <div class="appTitle">《{{ app.title }}》</div>
                <div class="appMessage">{{ app.message }}</div>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'AppList',
    data() {
        return {
            apps: [
                { title: '米汤姐的相馆', message: '极简的拼长图/瀑布图App', img: require('@/assets/img/apps/mitang.png'), url: 'https://apps.apple.com/cn/app/mi-tang-jie-xiang-guan-fa/id1117481189' },
                { title: '钱都哪去了', message: '能帮你自动算税的简洁记账App', img: require('@/assets/img/apps/jizhang.png'), url: 'https://apps.apple.com/cn/app/qian-dou-na-qu-le/id1241424341' },
                { title: '方块与爱（Block&Lover） ', message: '蓝牙互动小游戏App', img: require('@/assets/img/apps/fangkuai.png'), url: 'https://apps.apple.com/cn/app/blocks-lover/id1179446556' },
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
.appCard {
    height: 88px;
    background-color: #fff;
    border: #000 1px solid;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 10px;
    font-size: 18px;
    margin: 0 12px 8px 0;
}

.appCard .appTitle {
    font-weight: bold;
}

.appCard .appMessage {
    font-size: 14px;
}

.appCard .appImg {
    width: 48px;
    height: 48px;
    color: #333;
    margin: 0 8px 0 4px;
    border-radius: 8px;
}

.appCard:hover {
    background-color: #e5e5e5;
    color: #000;
}
</style>

