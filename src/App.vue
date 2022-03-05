<template>
  <div id="app">
    <n-loading-bar-provider>
      <LoadingBar />
    </n-loading-bar-provider>
    <n-message-provider>
      <MessageContent />
    </n-message-provider>
    <router-view />
  </div>
</template>

<script>
import MessageContent from "@/components/AppProvider/MessageContent.vue";
import LoadingBar from "@/components/AppProvider/LoadingBar.vue";
import { NMessageProvider, NLoadingBarProvider } from "naive-ui";
export default {
  components: {
    MessageContent,
    NMessageProvider,
    LoadingBar,
    NLoadingBarProvider,
  },
};
</script>

<style></style>
