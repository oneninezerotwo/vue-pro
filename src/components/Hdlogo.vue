<template>
    <div data-v-4a7de7dd="" data-ass="drop" class="fixed-drop iphonex_margin">
        <div data-v-4a7de7dd="" class="drop drop-top main_drop"><a data-v-4a7de7dd=""
                href="//www.xiaoyusan.com?chn=h5index_h5index" data-ass-drop="trigger" class="drop-btn">
                <i data-v-4a7de7dd=""></i></a></div>
        <!---->
        <!---->
    </div>
</template>

<style lang="scss" scoped>
.fixed-drop[data-v-4a7de7dd] {
  position: fixed;
  right: 1.2rem;
  bottom: 11.8rem;
  z-index: 340;
}
* {
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

.drop[data-v-4a7de7dd] {
  position: relative;
}

.deallist_drop .drop-btn[data-v-4a7de7dd],
.drop:last-child > .drop-btn[data-v-4a7de7dd] {
  border-radius: 50%;
}
.main_drop > .drop-btn[data-v-4a7de7dd] {
  border-radius: 50%;
  margin-bottom: 0.7rem;
}
.drop-btn[data-v-4a7de7dd] {
  display: -webkit-box;
  display: box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  box-pack: center;
  box-align: center;
  height: 4.7rem;
  width: 4.7rem;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}
a {
  text-decoration: none;
  color: #333;
}

.main_drop > .drop-btn > i[data-v-4a7de7dd] {
  display: block;
  height: 3.8rem;
  width: 2.4rem;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAABBCAYAAABMx43BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQ1QjhFQzZGQzY1MTFFNUEwMzc4NUFBMjc2MDk5RUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQ1QjhFQzdGQzY1MTFFNUEwMzc4NUFBMjc2MDk5RUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDVCOEVDNEZDNjUxMUU1QTAzNzg1QUEyNzYwOTlFQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDVCOEVDNUZDNjUxMUU1QTAzNzg1QUEyNzYwOTlFQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuZms1IAAANSSURBVHja7JlNaxNBGMcnL0axVVNfLioYRRFEaKR47kY9+/IJuj151HyCbMSDnnqoUrzY9iB4EKJ+ABMPioJiQBCEYhWUihdTwSoIrs+UZ2GyzExmdmZ3E9wH/sxmdvbZ37w+sxPi+z6xpKOgd6A/oFuggi3fNgE/+/12zxaoDcAjIcA126CmgAdBKwzUddA+0FuboDYBbzD3rILGAWgdNC5AFvSNKagu4H4NwEC7QC9NQHUAw913W+NZI9CogAugnGYvRAZNCtAINEnAyKAyZ7tjAIwEquMkZ3EzogUay5JhGzRNQOV3pg0oevdjUCkMOZYi4EBQenM76Eno5paEAaWghANYSglQCEqYH8+GAJAFfRWA0bWvSwiZBK2DOqTfVkF1Er9dA50P5R0A7QV9odQXfLF1E2q5JQmDVwTSR1iLy6BxrMVJ0B6FFqBlzoDGJGU2sIe+Kfj7CXqA139Bz0F3RTV7qNCSU6Dvvpqtg04rtOR73v28wTiaB5UVy+4E3VQo94uXaQI5hekCaEKiO1juVNQXFQ0gS5jSsdaTlPuKaS7qi/JkBGxYIAujALkj624NGx8FyEI2uzNIA8jfmG5NaKwek8VuUVhcwfQ4bgzWLAFd5eTVQCfw+j73Kclh/YbiNswbsKH1FP28Bm3T2ap9AJ0FvcDNZ5z2Y3NjS8g5Zpj12eb5Tja7M8gM8j+DrIDaoKrgfgvkJgEp+xD7iCkFPRz62KKR4yKoyXmOVmrOkKvLHu+wkGVOqy1jnosPBuUaoCW8dpjyPVRHAuCgPEmZT6Kw6Pjm1lY496H/Nbbi+tuOmmt4MFWJ4ocXFnndHoyzS4KDgB4zHNhubUcYjzmViVOVOG8J8ju45eJZnVMBns2IVouiTo0E1ghNHt5MZSeSi0DhSk0P02J+aECltFpSZw/XSWsxryn6mMHopGplm5CqrTOtCenotnx+QHeryNMErDLXqXd3F32w4XSOWWfb2KLLGGJp+lT1azEIj6oRoaEQDl3mTwCXeU8L81ZlUYgXcRymlipWwR1TjRMUqK8rTJlZjt8KrrUulmliy1qdOI4gYpWZLV8dX9wTbAlnsbsp7CKupU1Zd1ewC1W72+F01SL6qEbYhFB/ZTbvnwADAGv0uvyYF6unAAAAAElFTkSuQmCC);
  background-size: contain;
}
em,
i {
  font-style: normal;
}
</style>
