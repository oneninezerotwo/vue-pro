<template>
    <section class="g-section contact row">
        <a href="javascript:;" class="btn-item online-service row" data-track="index_webCustomerSevice_new">
            <i class="icon icon-service"></i>
            <span>在线客服</span>
        </a>
        <a href="tel:400-919-7788" class="btn-item tel-service col row" data-track="index_phone">
            <i class="icon icon-tel"></i>
            <span>电话咨询:</span>
            <em>400-919-7788</em>
            <span>(7*24小时)</span>
        </a>
    </section>
</template>

<style>
.contact .btn-item:first-child {
  margin-left: 0;
  width: 26%;
}
.contact {
  padding: 2.4rem 0 8rem;
}
.contact .btn-item {
  text-align: center;
  line-height: 2.6rem;
  border-radius: 12.6rem;
  white-space: nowrap;
  background-color: #fcfcfc;
  border: 1px solid #f5f5f5;
  position: relative;
  font-size: 1.2rem;
  margin: 0 1.2rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.contact .btn-item:before {
  content: "";
  width: 1px;
  height: 1.8rem;
  background-color: #f5f5f5;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translate(1.2rem, -50%);
  transform: translate(1.2rem, -50%);
}
.contact .btn-item .icon-service {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAMAAADn2eWTAAAAk1BMV…kJsJY+52EWpNBtxmfn08Qq6uEfW2c04Vs61x9oBuMBSf4A4mM4AH8YnNUAAAAASUVORK5CYII=);
}

.contact .btn-item .icon {
  width: 1.3rem;
  height: 1.3rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 0.3rem;
}
.contact .btn-item:last-child {
  margin-right: 0;
}
.contact .btn-item {
  text-align: center;
  line-height: 2.6rem;
  border-radius: 12.6rem;
  white-space: nowrap;
  background-color: #fcfcfc;
  border: 1px solid #f5f5f5;
  position: relative;
  font-size: 1.2rem;
  margin: 0 1.2rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.contact .btn-item .icon {
  width: 1.3rem;
  height: 1.3rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-right: 0.3rem;
}

em,
i {
  font-style: normal;
  font-size: inherit;
}
.contact .btn-item {
  text-align: center;
  line-height: 2.6rem;
  border-radius: 12.6rem;
  white-space: nowrap;
  background-color: #fcfcfc;
  border: 1px solid #f5f5f5;
  position: relative;
  font-size: 1.2rem;
  margin: 0 1.2rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.contact .btn-item em {
  color: #8c7fee;
}
</style>
