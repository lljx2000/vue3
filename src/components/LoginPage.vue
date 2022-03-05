<template>
  <div class="login_container">
    <div class="login_box">
      <div class="title">链屋网账号登录</div>
      <n-form :model="model" ref="formRef" :rules="rules" class="login_form">
        <n-form-item class="user" path="username"
          ><n-icon size="25px" class="icon"><UserAvatarFilledAlt /> </n-icon
          ><n-input
            type="text"
            placeholder="请输入用户名"
            class="input"
            v-model:value="model.username"
        /></n-form-item>
        <n-form-item class="pass" path="password"
          ><n-icon size="25px" class="icon"><Locked /></n-icon>
          <n-input
            type="password"
            show-password-on="mousedown"
            placeholder="请输入密码"
            class="input"
            v-model:value="model.password"
            autocomplete
        /></n-form-item>
        <div class="btn">
          <n-button round class="login" @click="LoginButtonClick">
            登录
          </n-button>
          <n-button round class="register"> 注册 </n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script>
// import qs from "qs";
import { defineComponent, ref } from "vue";
import { NButton, NForm, NFormItem, NInput, NIcon } from "naive-ui";
import { UserAvatarFilledAlt, Locked } from "@vicons/carbon";
// import { response } from "express";
export default defineComponent({
  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
    UserAvatarFilledAlt,
    NIcon,
    Locked,
  },
  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const modelRef = ref({
      username: "",
      password: "",
      role: "",
    });
    // const loadingbardisabledRef = ref(true);
    // function loadingbarStart() {
    //   window.$loadingBar.start();
    //   loadingbardisabledRef.value = false;
    // }
    // function loadingbarFinish() {
    //   window.$loadingBar.finish();
    //   loadingbardisabledRef.value = true;
    // }
    // function loadingbarError() {
    //   loadingbardisabledRef.value = true;
    //   window.$loadingBar.error();
    // }
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: ["input", "blur"],
          },
        ],
      },
      LoginButtonClick() {
        // loadingbarStart();
        // this.$axios.post(
        //   "/login",
        //   qs
        //     .stringify({
        //       username: this.modelRef.username,
        //       password: this.modelRef.password,
        //     })
        //     .then(function (response) {
        //       console.log(response);
        //       console.log(response.data.code);
        //       if (response.data.code == 200) {
        //         loadingbarFinish();
        //         // 根据role执行router
        //         // if (response.data.role == 4) {
        //         //   window.location.href = "/police";
        //         // }
        //       } else {
        //         loadingbarError();
        //       }
        //     })
        // );
      },
    };
  },
});
</script>

<style scoped lang="stylus">
.login_container {
  height: 100%;
  background: url('../assets/background.jpg') no-repeat -50px -230px;
}

.login_box {
  position: absolute;
  right: 100px;
  top: 50%;
  margin-top: -197.5px;
  z-index: 100;
  width: 300px;
  height: 250px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
}

.title {
  margin: 20px auto 0;
  font-size: 24px;
  text-align: center;
}

.login_form {
  margin: 0 auto;
  width: 100%;
}

.btns {
  width: 100%;
  margin: 0 auto;
}

.login {
  margin-left: 60px;
  margin-right: 40px;
}

.user, .pass {
  margin: 0 auto;
  width: 245px;
}

.pass {
  margin-top: -25px;
}

.icon {
  width: 40px;
}

.input {
  width: 200px;
}
</style>
