<template>
    <div class="lds-ellipsis font-body" v-bind:class="{ hideLoading: isHide }">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="lds-text">{{constants.Loading}}</div>
    </div>
</template>

<script>
import constants from '@/script/constants/Constants'
export default {
    props: ["isHide"],
    data() {
        return {
            constants,
        }
    },
}
</script>

<style scoped>
.hideLoading {
    display: none;
}

.lds-ellipsis {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    background-color: #eaecef;
    border-radius: 4px;
    width: 108px;
    height: 60px;
}

.lds-ellipsis div {
    position: absolute;
    top: 12px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
    left: 24px;
    animation: lds-ellipsis1 0.6s infinite;
    background: red;
}

.lds-ellipsis div:nth-child(2) {
    left: 24px;
    animation: lds-ellipsis2 0.6s infinite;
    background: orange;
}

.lds-ellipsis div:nth-child(3) {
    left: 44px;
    animation: lds-ellipsis2 0.6s infinite;
    background: yellow;
}

.lds-ellipsis div:nth-child(4) {
    left: 68px;
    animation: lds-ellipsis3 0.6s infinite;
    background: greenyellow;
}

.lds-ellipsis div.lds-text {
    width: 100%;
    position: absolute;
    top: 28px;
    left: 24px;
}

@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(24px, 0);
    }
}
</style>