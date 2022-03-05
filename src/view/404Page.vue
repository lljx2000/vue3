<template>
  <div class="page404">
    <n-result status="404" description="抱歉，你访问的页面不存在。">
      <template #icon>
        <img src="../assets/404.png" width="500" />
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
.page404 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
