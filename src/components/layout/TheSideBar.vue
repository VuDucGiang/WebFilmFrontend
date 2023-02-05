<template>
    <div class="sidebar">
        <router-link to="/business/setting/user" class="menu-item">
            <div class="menu-icon">
                <div class="icon icon-user"></div>
            </div>
            <div class="menu-text">{{ResourceVN.SideBar.User}}</div>
        </router-link>
        <router-link to="/business/setting/user-group" class="menu-item">
            <div class="menu-icon">
                <div class="icon icon-user-group"></div>
            </div>
            <div class="menu-text">{{ResourceVN.SideBar.UserGroup}}</div>
        </router-link>
        <div class="menu-item">
            <div class="menu-icon">
                <div class="icon icon-authori"></div>
            </div>
            <div class="menu-text">{{ResourceVN.SideBar.Authori}}</div>
        </div>
        <div class="menu-item">
            <div class="menu-icon">
                <div class="icon icon-sign"></div>
            </div>
            <div class="menu-text">{{ResourceVN.SideBar.Sign}}</div>
        </div>
    </div>
</template>
<script>
import ResourceVN from '../../script/resources/ResourceVN'
export default {
    data() {
        return {
            ResourceVN
        }
    },
}
</script>

<style scoped>
.sidebar {
    width: 194px;
    height: 100%;
    background-color: #f1f5f9;
    padding: 16px 12px 0 12px;
    box-sizing: border-box;
}
.sidebar .menu-item {
    display: flex;
    height: 44px;
    width: 172px;
    border-radius: 8px;
    align-items: center;
    padding-left: 12px;
    box-sizing: border-box;
}

.sidebar .menu-item:hover {
    background-color: #e2e8f0;
}

.router-link-active{
    background-color: #e2e8f0;
    color: #000;
    font-weight: 500;
    box-sizing: border-box;
}

.router-link-active .menu-icon .icon{
    background-color: #000;
}

.sidebar .menu-item .menu-icon {
    margin: 0 8px 4px 0;
    box-sizing: border-box;
    width: 24px;
	height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-user {
    background-color: var(--icon-default-color);
    mask: url('../../assets/icons/ic_request.svg') no-repeat -340px -51px;
	width: 16px;
	height: 19px;
}

.icon-user-group {
    background-color: var(--icon-default-color);
    mask: url('../../assets/icons/ic_request.svg') no-repeat -74px -29px;
	width: 20px;
	height: 17px;
}

.icon-authori {
    background: url('../../assets/icons/ic_authori.svg') no-repeat;
    height: 24px;
    width: 24px;
}

.icon-sign {
    background: url('../../assets/icons/ic_sign.svg') no-repeat;
    height: 24px;
    width: 24px;
}
</style>

