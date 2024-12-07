<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="search1" size="small" placeholder="输入姓名查询" @input="handleSearch" />
      </el-form-item>
      <el-form-item>
        <el-select size="small" v-model="search2" @change="handleSearch">
          <el-option label="请选择性别" value="" />
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class="el-icon-circle-plus-outline" type="text" @click="dialogAdd = true">
          添加
        </el-button>
        <el-button class="el-icon-delete" type="text" @click="handleDeleteList">
          删除
        </el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table ref="multipleTable" :data="tableData" border highlight-current-row style="width: 100%" @selection-change="handleSelectionDelete">
      <el-table-column type="selection" width="55" />
      <el-table-column label="用户编号">
        <template #default="scope">
          <span>{{ scope.row.userId }}</span>
        </template>
      </el-table-column>
      <!-- 更多列定义省略 -->
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button type="text" icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination background :disabled="disablePage" :current-page="currentPage" :size="'small'" layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="handlePageChange" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { fetchUsers, fetchUserCount, deleteUserById } from '../api/index'; // 导入 API 函数

const ruleForm = reactive({
  userId: null,
  cardType: null,
  cardNo: null,
  userName: null,
  userSex: null,
  userAge: 25,
  userRole: null,
});

const search1 = ref("");
const search2 = ref("");
const dialogAdd = ref(false);
const dialogUpdate = ref(false);
const pageSize = ref(5);
const currentPage = ref(1);
const total = ref(0);
const disablePage = ref(false);
const tableData = ref([]);
const multipleSelection = ref([]);

const fetchData = () => {
  fetchUsers(currentPage.value, search1.value, search2.value)
    .then((response) => {
      tableData.value = response.data;
    })
    .catch((error) => console.log(error));

  fetchUserCount(search1.value, search2.value)
    .then((response) => {
      total.value = response.data;
    })
    .catch((error) => console.log(error));
};

const handleSearch = () => {
  fetchData();
};

const handlePageChange = (page) => {
  currentPage.value = page;
  fetchData();
};

const handleEdit = (index, row) => {
  dialogUpdate.value = true;
  Object.assign(ruleForm, row);
};

const handleDelete = (index, row) => {
  ElMessageBox.confirm("确认删除?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      deleteUserById(row.userId)
        .then(() => {
          fetchData();
          ElMessage.success("删除成功!");
        })
        .catch((error) => console.log(error));
    })
    .catch(() => {
      ElMessage.info("已取消删除");
    });
};

const handleDeleteList = () => {
  // 处理删除列表的逻辑
  console.log("删除列表");
};

const handleSelectionDelete = (val) => {
  multipleSelection.value = val;
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>


</style>
