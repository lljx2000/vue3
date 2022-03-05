<template>
  <div class="pageinfo">
    <n-result
      status="info"
      description="这是由Fabric+Gin+Vue3建立的基于区块链技术的租房系统。"
    >
      <template #icon>
        <img src="../assets/logo.png" width="300" />
      </template>
      <template #footer>
        <n-button @click="replacetosy">返回首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script>
import { NButton, NResult } from "naive-ui";
import { useRouter } from "vue-router";

export default {
  components: {
    NButton,
    NResult,
  },
  setup() {
    const { replace } = useRouter();
    return {
      replacetosy() {
        replace("/");
      },
    };
  },
};
</script>

<style>
.pageinfo {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
