<template>
  <div class="registration_container">
    <div class="registration_box">
      <div class="title">欢迎注册链屋网账号</div>
      <n-form
        :model="model"
        ref="formRef"
        :rules="rules"
        class="registration_form"
      >
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
        <n-form-item class="repass" path="repassword"
          ><n-icon size="25px" class="icon"><Locked /></n-icon>
          <n-input
            type="password"
            show-password-on="mousedown"
            placeholder="请再次输入密码"
            class="input"
            :disabled="!model.password"
            v-model:value="model.repassword"
            autocomplete
        /></n-form-item>
        <n-form-item class="phone" path="phone"
          ><n-icon size="25px" class="icon"><Phone /> </n-icon
          ><n-input
            type="text"
            placeholder="请输入手机号"
            class="input"
            v-model:value="model.phone"
        /></n-form-item>
        <div class="btn">
          <n-button round class="registration" @click="RegistrationButtonClick">
            立即注册
          </n-button>
        </div>
        <div class="form_botton">
          <n-form-item class="readed_info" path="ticked">
            <n-checkbox-group v-model:value="ticked">
              <n-checkbox value="readed"> </n-checkbox
            ></n-checkbox-group>

            <a href="/info" class="a_info" target="_blank"
              >我已阅读并同意相关服务条款和隐私政策</a
            >
          </n-form-item>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NButton, NForm, NFormItem, NInput, NIcon, NCheckbox } from "naive-ui";
import { UserAvatarFilledAlt, Locked, Phone } from "@vicons/carbon";
export default defineComponent({
  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
    UserAvatarFilledAlt,
    NIcon,
    Locked,
    NCheckbox,
    Phone,
  },
  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const modelRef = ref({
      username: "",
      password: "",
      repassword: "",
      phone: "",
    });
    const loadingbardisabledRef = ref(true);
    function loadingbarStart() {
      window.$loadingBar.start();
      loadingbardisabledRef.value = false;
    }
    function loadingbarFinish() {
      window.$loadingBar.finish();
      loadingbardisabledRef.value = true;
    }
    function loadingbarError() {
      loadingbardisabledRef.value = true;
      window.$loadingBar.error();
    }
    function validatePasswordStartWith(rule, value) {
      return (
        !!modelRef.value.password &&
        modelRef.value.password.startsWith(value) &&
        modelRef.value.password.length >= value.length
      );
    }
    function validatePasswordSame(rule, value) {
      return value === modelRef.value.password;
    }
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      ticked: ref(null),
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
        repassword: [
          {
            required: true,
            message: "请再次输入密码",
            trigger: ["input", "blur"],
          },
          {
            validator: validatePasswordStartWith,
            message: "两次密码输入不一致",
            trigger: "input",
          },
          {
            validator: validatePasswordSame,
            message: "两次密码输入不一致",
            trigger: ["blur", "password-input"],
          },
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号",
            trigger: ["input", "blur"],
          },
        ],
        ticked: [
          {
            // validator: checkboxticked,
            type: "array",
            required: true,
            trigger: "change",
            message: "请先同意服务条款",
          },
        ],
      },
      RegistrationButtonClick(e) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            loadingbarStart();
            window.$message.success("验证成功");
            if (modelRef.value.username === "123") {
              loadingbarFinish();
            }
          } else {
            console.log(errors);
            loadingbarError();
            window.$message.error("验证失败");
          }
        });
      },
    };
  },
});
</script>

<style scoped lang="stylus">
.registration_container {
  height: 100%;
  background: url('../assets/background.jpg') no-repeat -50px -230px;
}

.registration_box {
  position: absolute;
  right: 100px;
  top: 50%;
  margin-top: -197.5px;
  z-index: 100;
  width: 350px;
  height: 450px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
}

.title {
  margin: 20px auto 0;
  font-size: 24px;
  text-align: center;
}

.registration_form {
  margin: 0 auto;
  width: 100%;
}

.btns {
  width: 100%;
}

.registration {
  display: block;
  margin: 0 auto;
}

.user, .pass, .repass, .phone {
  margin: 0 auto;
  width: 245px;
}

.pass, .repass, .phone {
  margin-top: -25px;
}

.icon {
  width: 40px;
}

.input {
  width: 200px;
}

.form_botton {
  margin-top: 20px;
}

.readed_info {
  float: left;
  height: 25px;
  line-height: 25px;
}

.readed_info {
  float: left;
  display: block;
  width: 100%;
  margin-left: 20px;
  height: 25px;
  line-height: 25px;
}

.a_info {
  margin-left: 5px;
}
</style>
