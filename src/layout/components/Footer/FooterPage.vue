<template>
  <div class="page-footer">
    <a href="/">返回首页</a>
    <div class="copyright">
      租房系统是基于fabric、gin、vue3建立的（Made by Ljx）。
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
  components: {},
};
</script>

<style scoped lang="stylus">
.page-footer {
  padding: 0 16px;
  text-align: center;

  a {
    font-size: 14px;
    color: #808695;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #515a6e;
    }
  }

  &-link {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;

    a:not(:last-child) {
      margin-right: 40px;
    }
  }

  .copyright {
    color: #808695;
    font-size: 14px;
  }
}
</style>
