<template>
    <div class="follow grid middle">
        <div class="icon icon_logo col-0"></div>
        <div class="col-1">
            <a href="javascript:activeLayar('layer_qrcode');" class="follow_btn">点击关注
                <i class="icon icon_love"></i>
            </a>
        </div>
    </div>
</template>
<style scoped>
.grid.middle {
    -webkit-box-pack: center;
    -webkit-box-align: center;
    box-pack: center;
    box-align: center;
}
.follow {
    border: 0.1rem solid #dadada;
    background-color: #fff;
    margin: 0 1rem;
    padding: 1rem;
    border-radius: 0.3rem;
}
.grid {
    display: -webkit-box;
    display: box;
}
.icon_logo {
    height: 3rem;
    width: 14.4rem;
}
.icon_logo {
    background: url(https://sslstatic.xiaoyusan.com/h5/img/classroom/icon.png) no-repeat;
    background-size: 14.35rem 14rem;
     background-position: 0 -130px;
}
.col-0 {
    -webkit-box-flex: 0;
    box-flex: 0;
}
.follow>.col-1 {
    text-align: right;
}
.col-1 {
    -webkit-box-flex: 1;
    box-flex: 1;
}
.follow_btn {
    display: inline-block;
    color: #3bc7b0;
    font-size: 1.1rem;
    line-height: 2.4rem;
    border: 0.1rem solid #3bc7b0;
    text-align: center;
    border-radius: 0.3rem;
    padding: 0 0.8rem;
}

a {
    text-decoration: none;
    color: #333;
}
.icon_love {
    display: inline-block;
    height: 1.1rem;
    width: 1.2rem;
    background-position: 0 -6rem;
    vertical-align: -0.25rem;
    margin-left: 0.2rem;
}

.icon_love {
    background: url(https://sslstatic.xiaoyusan.com/h5/img/classroom/icon.png) no-repeat;
    background-size: 14.35rem 14rem;
    background-position: 0 -72px;
}
em, i {
    font-style: normal;
}
</style>
