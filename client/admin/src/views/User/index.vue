<template>
  <div class="user-list">
    <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            :cell-edit-done="cellEditDone"
    ></v-table>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';

export default {
  data(){
    return {
      tableData:[],
      columns:[{
        field: 'zhName', title: '中文名', width: 80, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true
      },{
        field: 'enName', title: '英文名', width: 80, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true
      },{
        field: 'createdAt', title: '注册时间', width: 80, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true
      },{
        field: 'className', title: '所属班级', width: 80, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true
      },{
        field: 'ana', title: '名言警句', width: 280, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true
      }]
    }
  },
   ...mapState({
      // userInfo: state => state.user.userInfo
    }),
  methods: {
    ...mapActions({
       userList: 'user/userList',
    }),
    async getUserList() {
      try {
        const ret = await this.userList();
        this.$Message.success('获取用户列表成功');
        
        this.tableData = ret.data.data.map(item => {
          return Object.assign(item, {className: item.class.className})
        });
      } catch (e) {
        this.$Message.error('获取用户列表失败');
      }
    },
     // 单元格编辑回调
    cellEditDone(newValue,oldValue,rowIndex,rowData,field){

        this.tableData[rowIndex][field] = newValue;

        // 接下来处理你的业务逻辑，数据持久化等...
    }
  },
  created() {
    this.getUserList()
  },
}
</script>