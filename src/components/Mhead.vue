<template>
    <div class="user-info row justify-between items-center">
        <div class="user-hd items-center row"><a href="/UserProfile?chn=my#/home/main" data-track="my_profile_new"><img
                    src="//sslstatic.xiaoyusan.com/usercenter/img/avatar-default.d636c10bef655be3.png" alt=""
                    class="avatar" id="my-avatar"></a>
            <router-link to="Login" class="user-bd" id="userinfo"><a href="" class="btn-login row"><span v-text="aa"></span><i
                        class="icon-arrow-right-wt"></i></a></router-link>
        </div><a href="/score?chn=my" class="user-ft row items-center" data-track="my_points_new">
                <i class="icon-star"></i>
            <div class="jifen" id="jifen"><span>积分商城</span></div>
        </a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      aa: "点击登录"
    };
  },

  methods: {},

  created() {
    //钩子
    if (localStorage.getItem("username")) {
      //判断是否有
      this.aa = localStorage.getItem("username"); //获取并赋值
      // console.log(this.aa);
    } else {
      //如果没有
      this.aa = "点击登录";
      // console.log(this.aa);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
  color: inherit !important;
}
.row.justify-between,
.column.justify-between {
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.row.items-center,
.column.items-center {
  -webkit-align-items: center;
  align-items: center;
}
.user-info {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAC0CAMAAAD8SVlAAAAAVFBMVEWmnf////+spP+zq/++uP/19P/t6//h3v/KxP/Fv//V0f/o5v/c2f/Qy//5+P+2r//a1v/CvP+7tP/Mx/+4sf/x7//l4v+wqP+qof/9/P/Szf/X0//aEke3AAACWUlEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVaX9es1VEAbCMExLuZVSrnLd/z7PTKeYnB8YiUYQ59mAMXm/jjLGGGOMMcYYY4yYpWgz1ZTDGDB2SeNQNipri8UE4m6ytzhPXP4158++F+Zdu7yTPL7ZSdwFYpuN4rxPKl2k2H8oA8ZOSIZYd1roKunzOLJiWyB2sBG9/zMOQHUhXwD2aeMQdgrjnunt3qh7Z+47FkAnYG7TTOEN4AmwNxnx3VZZ2s74cFPbrwnE203+CFQa/wXABPgKsCdebUwbf3Hryj/bk3i7QHzG5M+AoTtAK+B/Az9IUtf0Zpuk92V/RiCOhCuI4nUGBe2gCwf+RfTtRqi6o6qLNes4wq4PdHjum3AIdA9gCYuGJbgpwE0IJR+FU5AyhHfaJQ1N6wWadm/18VFvOXHuj9EYYA1wF3AOs9+DakoYxCD5PLxmlHKAmMtG+ZpnzBneaOj53EE/8rW5P8PaiDZBJ8JUWsMsYBc4DJyG6rrOjeMH1jFKChi+ssKEIWKsGDLWujL0MFPJkbXisi6c+17W7wPkoE8QlGBwKKhAbYoyVCungYZoOKtB/jM+X+SK4lz5D2iUU2coRW2BtFMZg9kCLBfb9fVeOd+9/gB6FimtEQyiuwAAAABJRU5ErkJggg==);
  background-size: 100% 100%;
  color: #fff;
  padding: 1.5rem 0.8rem 1.8rem 1.2rem;
  position: relative;
  overflow: hidden;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.row.items-center,
.column.items-center {
  -webkit-align-items: center;
  align-items: center;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  color: inherit;
}
a {
  text-decoration: none;
  color: #333;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.user-info .avatar {
  display: block;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 100%;
  background-color: #edebff;
}
img {
  border: 0 none;
  vertical-align: top;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.user-info .user-bd {
  padding-left: 0.9rem;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.user-info .user-bd .btn-login {
  font-size: 1.8rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
a {
  color: inherit;
}
a {
  text-decoration: none;
  color: #333;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.user-info .user-bd .btn-login .icon-arrow-right-wt {
  display: block;
  width: 0.6rem;
  height: 0.9rem;
  background: url(//sslstatic.xiaoyusan.com/usercenter/img/icon-arrow-right-wt.a39d97f7e70a4d7c.png)
    no-repeat;
  background-size: 100% 100%;
  margin-left: 0.6rem;
}
em,
i {
  font-style: normal;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.user-info .user-ft {
  padding: 0 0.5rem;
  height: 3.6rem;
  border-radius: 3.6rem;
  background-color: hsla(0, 0%, 100%, 0.22);
}
.row.items-center,
.column.items-center {
  -webkit-align-items: center;
  align-items: center;
}
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
a {
  color: inherit;
}
a {
  text-decoration: none;
  color: #333;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.user-info .user-ft .icon-star {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 2.8rem;
  background: #fff
    url(//sslstatic.xiaoyusan.com/usercenter/img/icon-jifen.7b1e06d3c54effa7.png)
    no-repeat 50%;
  background-size: 1.8rem 1.8rem;
}
em,
i {
  font-style: normal;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.user-info .user-ft .jifen {
  line-height: 1.4rem;
  padding: 0 1rem 0 0.5rem;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.user-info .user-ft .jifen span {
  font-size: 1.2rem;
}
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>


