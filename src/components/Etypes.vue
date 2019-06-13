<template>
    <nav class="listnav row">
        <div href="javascript:;" data-index="1" class="navitem col active">成人</div>
        <div href="javascript:;" data-index="2" class="navitem col">少儿</div>
        <div href="javascript:;" data-index="3" class="navitem col">父母</div>
    </nav>
</template>

<style>
.navitem.active {
  border-color: #cfb97d;
  color: #cfb97d;
  font-weight: 400;
}

.navitem {
  white-space: nowrap;
  position: relative;
  height: 4rem;
  width: 1%;
  margin: 0 4.5rem;
  border-bottom: solid 2px #f9f9f9;
  line-height: 4rem;
  font-size: 1.5rem;
  color: #666;
  text-align: center;
}
.col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.navitem:not(:last-child):after {
  display: block;
  position: absolute;
  top: 50%;
  right: -4.5rem;
  width: 0;
  height: 2rem;
  margin-top: -0.8rem;
  border-left: solid 1px #e2e5e7;
  content: "";
}
</style>
