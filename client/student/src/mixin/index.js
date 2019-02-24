/* eslint-disable */
export default {
  data() {
    return {
      zhNameRules: [
        {
          validate: (val) => !!val, message: '请填写中文名',
        },
      ],
      enNameRules: [
        {
          validate: (val) => !!val, message: '请填写英文名',
        },
      ],
      class_idRules: [
        {
          validate: (val) => !!val,
           message: '请选择所在班级',
        },
      ],
      passwordRules: [
        {
          validate: (val) => !!val, message: '请填写密码',
        },
      ],
      repeatRules: [
        {
          validate: (val) => !!val,
          message: '请再次输入密码',
        },
        {
          validate: (val) => this.formData.password == val,
          message: '两次密码输入的不一致',
        },
      ],
    };
  },
};
