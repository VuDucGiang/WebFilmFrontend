<template>
    <div class="header">
        <div class="header-left">
            <div class="toggle"></div>
            <router-link to="/business/setting/user" class="logo"></router-link>
            <div class="menu-container">
                <div class="menu-item width-115">
                    <div class="menu-text">{{ResourceVN.Menu.Schedule}}</div>
                    <div class="border-line"></div>
                </div>
            </div>
        </div>
        <div class="header-right">
            <div class="icon-notification"></div>
            <div class="icon-helper"></div>
            <div class="avatar"></div>
        </div>
    </div>
</template>
<script>
import ResourceVN from '@/script/resources/ResourceVN';
export default {
    data() {
        return {
            ResourceVN
        }
    },
}
</script>

<style scoped>
.header {
    height: 56px;
    width: 100%;
    display: flex;
    box-shadow: 0 0 4px rgb(0 0 0 / 16%);
    padding-right: 16px;
    box-sizing: border-box;
    justify-content: space-between;
}

.header .header-left {
    display: flex;
    align-items: center;
}

.header-left .toggle {
    width: 36px;
    height: 36px;
    margin: 10px 16px;
    background-image: url(../../assets/icons/ic_toggle.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
}

.header-left .logo {
    width: 176px;
    height: 34px;
    background-image: url(../../assets/icons/ic_logo.svg);
    background-repeat: no-repeat;
    cursor: pointer;
    padding-right: 10px;
    margin-right: 34px;
    box-sizing: border-box;
}

.header-left .menu-container {
    height: 100%;
    display: flex;
    box-sizing: border-box;
}

.header-left .menu-container .menu-item {
    display: flex;
    text-align: center;
    flex-direction: column;
    cursor: pointer;
}

.header-left .menu-container .menu-item .menu-text {
    height: calc(100% - 4px);
    display: flex;
    align-items: center;
    justify-content: center;

}

.header-left .menu-container .menu-item .border-line {

    height: 4px;
    width: 100%;
    background-color: transparent;
}

.router-link-active {
    color: var(--primary);
}

.router-link-active .border-line {
    background-color: var(--primary) !important;
}

.header-left .menu-container .menu-item:hover .menu-text {
    color: var(--primary);
}

.header-left .menu-container .menu-item:hover .border-line {
    background-color: var(--primary);
}

.header .header-right {
    display: flex;
    height: 100%;
    align-items: center;
}

.header-right .icon-notification {
    background-image: url(../../assets/icons/ic_notification.svg);
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    padding-right: 28px;
}

.header-right .icon-helper {
    background: url('../../assets/icons/ic_sprites.svg') no-repeat -26px -50px;
    width: 20px;
    height: 20px;
    margin-right: 28px;
    background-repeat: no-repeat;
}

.header-right .avatar {
    background-image: url(../../assets/icons/ic_avatar.png);
    background-size: contain;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin-right: 4px;
    background-repeat: no-repeat;
}

.width-80 {
    width: 80px;
}

.width-100 {
    width: 100px;
}

.width-115 {
    width: 115px;
}
</style>

