<template>
  <div class="contain">
    <div class="login">
      <div class="logo">
        <div class="logo-img"></div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username" class="from">
          <el-input v-model="ruleForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input show-password v-model="ruleForm.password" prefix-icon="el-icon-unlock"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['getLogin']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.getLogin(this.ruleForm)
          console.log(1)
          // this.$nextTick(() => {
          //   if (this.isLogin) {
          //     console.log(1)
          //     this.$router.push('/index')
          //   }
          // })
        } else {
          console.log(valid)
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    isLogin() {
      if (this.isLogin) {
        console.log(1)
        this.$router.push('/index')
      }
    }
  },
  computed: {
    ...mapState(['isLogin'])
  }
}
</script>
<style lang="scss" scoped>
.contain {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
}
.login {
  width: 400px;
  height: 304px;
  background-color: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 5px;
  .from {
    margin-top: 30px;
  }
  .logo {
    width: 140px;
    height: 140px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 8px;
    margin-top: -20%;
    .logo-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: url('../../assets/images/logo.png') #eee center no-repeat;
      background-size: 60% 60%;
    }
  }
  .btn {
    float: right;
  }
}
</style>
