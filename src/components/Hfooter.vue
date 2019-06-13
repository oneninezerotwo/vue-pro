<template>
  <!-- v-if判断仓库的状态是否出现底部组件 -->
  <nav class="fixed-nav iphonex_padding iphonex_white" v-if="isshowfooter" style="display: block;">
    <div class="nav-content row">
      <a v-for="(item,index) in foot" :key="index" class="col" :class="{active:tab==index}" @click="heightlight(index)">
        <i :class="item.ico"></i>
        <p v-text="item.descript"></p>
      </a>
      <!-- <a href="/discovery" class="col">
                <i class="icon icon-dicovery"></i>
                <p>发现</p>
            </a>
            <a href="/my" class="col">
                <i class="icon icon-my"></i>
                <p>我的</p>
            </a> -->
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      foot: [{
        "ico": "icon icon-home",
        "descript": "首页",
        name: "home"   //名字跟router.ts里一致
      }, {
        "ico": "icon icon-dicovery",
        "descript": "发现",
        name: "found"
      }, {
        "ico": "icon icon-my",
        "descript": "我的",
        name: "mine"
      }],
      tab: 0
    }
  },
  methods: {
    heightlight(index) {
      //高亮
      this.tab = index
      //声明式导航
      this.$router.push({
        name: this.foot[index].name
      })
    }
  },
  //哪个组件要隐藏或出现，就在哪个组件监听当前组件的仓库状态
  computed: {
    isshowfooter() {
      return this.$store.state.isfooter
    }
  }
}
</script>

<style>
.fixed-nav {
  background-color: #fff;
  border-top: 1px solid #f5f5f5;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
}
.fixed-nav .nav-content {
  display: -webkit-flex;
  display: flex;
  padding: 0.6rem 0 0.5rem;
}
.fixed-nav a {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  font-size: 1.1rem;
  color: #333;
}
.fixed-nav a.active .icon-home {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAflBMVEUAAAC2rfuXi/W2rfuWivS2rfu2rfuVifS2rfu2rfu2rfu2rfu2rfuVifS2rfu2rfu2rfu2rfu2rfu2rfu2rfu2rfu2rfuXi/Wsovmzqfqekvalmvivpfqonvj///+hlvf08/7Nx/vIwfv5+P7x7/66svnj4Pzj3/zW0fvBufpwF2GoAAAAFnRSTlMABvjwtZIwKtnRfToU8cmjcmLptoVEGGYXLQAAAO5JREFUOMvNztkOgjAURVEmxXm2Yq2VMvP/Pygh0Fuk0hseCBtCIF05wZpv9sZ1TzbO3lek6rBE0N2RNG1M4/bJJbL18Ph2DRTGDX9gHj+7RNNNN748EH2rbe8PFuR/i+74+UIgwzjMIsaJuStgROPwE9EEmCEahwNEE+A3onH41VSGcfRSiuKwbN97OOScp2DT6jMcxDySu1yLP031MU9Eylgqkvojas8AtxX8p+LTw1QmulbACWCI5UBzRvUYCkSWxHGSiYBCCn4gUjBVLnmrF2BHnaDwVHIk9h7GPIn9vcnufQu05wxRx/OtGfUFIUNyhJ/qHJoAAAAASUVORK5CYII=);
}

.fixed-nav .icon-home {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAflBMVEUAAAAjGBVmZmZmZmYjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBVmZmYjGBUjGBUjGBVmZmYjGBVmZmZmZmZmZmZmZmZmZmZmZmYjGBUjGBUjGBVmZmaafbqRAAAAKHRSTlMAEMBQ+fEELQjMwrmsfm0m6NWTdWM2HNy0oJmJV0g4Ihzz48uQgD8Xdjtq3wAAANRJREFUOMvt0VcSgjAUBVDAhA6hgyjFHve/QctDEDIpn4zj/ePlzCVFW2/sAONQ0TYlfcYlCrTwKQSlpoSaKaJjHEtorzEw34HygF9+2wItG/iDoNwM8VBnvz6JKyjPHaj1us8khPI4X1I9ARrtv4bdUL6zZzaLmDGUY7Z8OJjLnqbwYCmZWqYdsMmg3J/hROc9afXe4Qxr/GSwrob1P/5N3G4Wafn4fGdy4eIDi49cfGKxwcV9bSxS96u/ZxWMqDR4xJ4c+yO2kLSYaJP2hBxVRFtRHoAOUBJdIzQPAAAAAElFTkSuQmCC);
}
.fixed-nav .icon {
  display: block;
  width: 2.1rem;
  height: 2.1rem;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.fixed-nav p {
  line-height: 1.7rem;
  height: 1.7rem;
}
.fixed-nav a.active .icon-dicovery {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAA0lBMVEUAAAC2rfu1rPuZjfannPiqoPmVifS2rfu2rfuWivSVifSjmPeYjPWto/mmnPi2rfu2rfuek/a2rfuwpvqpn/iVifSVifSbkPWVifS2rfuil/eonvixqPqVifS2rfu2rfuVifS2rfu2rfu0q/uVifS2rfumnPimnPi2rfu2rfu2rfv///+WivWto/monvikmfeckfayqfqflPaajvWwpvq0q/vv7P729f/e2v37+//z8f7Kw/y+tvvk4P7V0PzSzfzOyPvCu/u6svvn5P7a1v3X0vzrDVLjAAAAKnRSTlMAfqN+EAv4592kiW47Jx069fHw6+vp5t3b1dPOzbSzlJOIcWtLQ6Shh07vVfTtAAABuElEQVQ4y72V15KCMBSGwwL23nt3S1QQ3UXs/f1faU0xCULgYmf244ITzjfMTxIm4E9klU4sB2Eu1lGywWamH4UC0c+MVNW60ENX83fHUehD9MvPVaCEvtd9g1Le5G64rcBAFNfkwhDG3NVjYXJMDwlxvtkbxxNEL3jNrbOaIPZ0XNCoPPCYe2QSLpAwoHLdZZ6u64nADhLqxE2L6mUzcbFinTSWhz8CztPa3M7Xx81hnSFZPEuAhLUPO8uCKM6WdcgytgR3h9TjBdfbR7nmrRaWi9+cA3otrVGiPW8VsTwTsB/CndYrlELovcoWnixS40RWgIxirmiNE81e5ZLB2KPJojVKdDQ4JSw3DQaarDOurBNKAQW5ieV3NkYx19i0ycIYAh9YTppP7nibHZCJOZgCSbI32PhlX9iGKKcBpkGHhmiunbMp0gCE5IJg8r12v5gLN0kq63n64EY+62gtPOQ1QFHnhMXRvp5mcz9U/ndX5yFUdcBILUNIAQF1GogKXMSn06X0ijON2TK4y0nI3ATwYVTxU8sjyZnSi7yqkZ4mP60SZVGtJDIgkJTarkUer6y11RT4N34BPnrjXrASUk4AAAAASUVORK5CYII=);
}

.fixed-nav .icon-dicovery {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAq1BMVEUAAABiYWEjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBVmZmZmZmYjGBVmZmYjGBUjGBVmZmZmZmYjGBVmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYjGBUjGBUjGBVmZmZmZmZmZmYjGBVmZmYjGBUjGBUjGBUjGBVmZmYjGBVmZmZmZmZmZmZmZmZmZmZmZmYjGBVmZmZ0USAkAAAAN3RSTlMABvTppH7SQic5k4gr3B2MEw/XxbOGa2U1Fc6X8ubgzql+d3FcUk9GKyAPCbevmYxO9rKfa18lFATzsAAAAeBJREFUOMu9VdeygkAMBRUV7CCKvffe/f8vu8m2wILOqDM3L2SSw+7ZnGzW+MVM26qXUo9HqlS3bPMttFxIP0KWLpRfQmvOI2ZONRmbo1XDqx+TsAWRzVamdj5vTytZESjED5ZhiZSTp1jRSbFgRj8ox27L2oF3HB2NWizYjJNrsoQVDtmMQi7x2IxKKLUpUSCOxlxpEyXR0FHLkef6JmdCRGq40zaKDA7uE+0Cfh051kRigr+uCGguOr2ntLVhrDA/EUms/l4h58PuM2QtiO1RK57O449Si/XgGbE+U4cQDfDacmFfolw/OMPnoPZuSPFI/z5DeuM7EDqBt2DRipKxDd5Mlguh1xbz5+B2eVvM1ObYmUUBHgNgIPwO+EN0OOk085C9bHEPACPhY/lu3K0iRoFFyVvIIhCyyMKhbASmlW+Q74mFR3hQI7SyznkIgI4AYMHHhs6ZqmGidnNO6IoslgJM1aA6LyB/gmLdxx7JR3WWCmZVsc6B70oVfYiRgtQbRSUf2WANMeoN+s/hhSPrDudcPdl1Wj+vFbLXWSik7Gf9plx4vx0Cg4xuinYHTd/1RsvEaWB9dLs/mRvfTSSadbsXs+6bKUroytv5rNvxg8kPLZ78pvz+WsXfQePf7A/vX4tSGacr3AAAAABJRU5ErkJggg==);
}
.fixed-nav .icon {
  display: block;
  width: 2.1rem;
  height: 2.1rem;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.fixed-nav a.active .icon-my {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAABEVBMVEUAAAChlveckfeVifSWivWWivWajvWVifSVifSdkfennPiWifSglfeVifS1rPuWivSWivWWivSZjfWek/a1rPuVifSVifShlveVifSbkPakmfi2rfuupPq2rfunnPiVifS2rPuekvakmviyqfu1rPu2rfuwpvqbkPWil/erofm2rfuxp/qVifSjmPeVifSzqvu0q/uqn/iglPaXjPWWi/S2rfuvpfqonviajvWsovmVifSckfaVifSbkPWckfawpvq2rfuzqvqVifS1rPukmfeflPaxp/qckPazqvqmnPivpPmhlvepnviso/n///+qoPn08/7d2f3DvPvAuPrt6/7V0Pz6+v/l4v3KxPvn5P3Uz/zn6584AAAAQnRSTlMACQL0WlEw7NBAOCQS/Oyyk2Aa7eHc1dC9urmkoZt/fHVkKSIU+vn5+PDVs5ePjHxvaVJKRfb04+DXxrGngHNaUUGAqQ4hAAAB40lEQVQ4y8XQZ1/qMBSA8SQdtIAMkS0y5Lq33r0tloq0guC49/t/EJMm2HqS6s9XPq9O6f+0JSi59U5zJ/fBcZyVVi9ZkWwfo37TifqYVkL8p7UTPi3nxGupaEcYWEe2f1c8tW1iyR55Uc/sEZI6dF2XS7B0KNvf7iKwtEvkU/00EhAs5fpIane0CCxtrEs27dO4hUurEl714zHqzVy+s5EFlmxfh938m3rcO5NgLl51DL+CW+8uCO7Z4LuTIAh8HvyO7jjshooJw6M5nf7TJdZXgNdimA0PdJhei7YB3r8Me8IzOsxHbGIaPpnjGcNsGN/S6X4sAvh4QKOG/q1bvjelekx/oX0G2B7w/IcZXeL6jq2xGgDjrYHcpWgNgRpXrIEyE+KTK5G8VEUwUr1gMQmXTpCUfbEIbDWQon3BwFJpWYVJfUiDeCuNlOHvwyhhSzZKiPzcHD6v2kPJmfU4Lf0iEABe+MLlZr2L0est24Z+2iPoXcuaZ0axqBvpDH75Y/XCt9R5VDnfPlNvZNrWuSItr0NPjFoMQL+XiVujEru3lKpYllXW4v5HxAvRO9unGYJ42NQL1tMTugu8FF6n9mwin02xxu9qSFSmF5UiTjqjA409ConMfE0nLx39gZYy0Ft7BF0l8pv1XL4PAAAAAElFTkSuQmCC);
}

.fixed-nav .icon-my {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAnFBMVEUAAAAjGBUlGhcjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBUjGBVmZmYjGBUjGBUjGBUjGBUjGBUjGBVmZmYjGBUjGBUjGBUjGBUjGBUjGBUjGBVmZmZmZmZmZmYjGBVmZmZmZmYjGBVmZmZmZmZmZmZmZmZmZmZmZmYjGBVmZmbBvr4/AAAAMnRSTlMA9QiJmCqhfxTs5dMk78pwXVYedTsw3t7YuLCrkExDDr5iUEs3zMCqaWAtGPaHOuebJitr/bYAAAHTSURBVDjLxZXtUqswEIY3BMJ3KVBaSrHfHnusnqNw//dmEmoi2aDjjDO+f9IsD9nsmw2FH1JSbuqw44qYN005ReFA0XQftLCCu8MmEk9T0n2Ua0GDVjJYF8zO0xGx8k9JKX9RzLrvFCEytQPgyV9HzLIBdE8Br3FxOYtSYxGaY9YfKuGkFhWhFrMLuayRsBYuOxiWCbdGcGP3OBfh0owWor49gtc8WvNR5tRj1nF55sHdqn7u///j08dl/zC8I5rDN+CtgHfw2Pf9PZ8+8PFOea/3odPNAO44tOTTP3z8q2qJLCZvDFg7qjDtPrPBlYTxymvAe5bFELPfblt7floKN17vn150MbEBeyJbBWD1n5nByH4dEmvXUXVUqDkI6qQrEU6b4bm+JnjpZkyfRCwMDFJdilkCWsP9y8EiL5TtT4vby3ms7yrWmdNyddfPaJMaHwzkU9yZKmFSjk9G6KyCzxT4K4U2W/hS3oG6rM22DvyugsKrksL5ervuPlJfx7ihx+uEbTkLO6yYnhFaMdJNqS6D0UGvR0/TaDX+lyBU474+svawuA6lOckpYyuFq94jw5wdd7hdstkt23tEvF9fdlMWuWKxUFW33s8/Nb5Nwxy+qzcQeWeeTnn7fQAAAABJRU5ErkJggg==);
}
.fixed-nav .icon {
  display: block;
  width: 2.1rem;
  height: 2.1rem;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.col p {
  margin: 0;
}
</style>
