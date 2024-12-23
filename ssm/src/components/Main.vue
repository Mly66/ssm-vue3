<template>
  <div class="container">
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
        <el-button class="el-icon-delete" type="text" @click="handleDeleteList">
          批量辞退
        </el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <div class="table-container">
      <el-table ref="multipleTable" :data="tableData" border highlight-current-row style="width: 100%"
        @selection-change="handleSelectionDelete">
        <el-table-column type="selection" width="55" />
        <el-table-column label="用户编号">
          <template #default="scope">
            <span>{{ scope.row.userId }}</span>
          </template>
        </el-table-column>
        <el-table-column label="卡类型">
          <template #default="scope">
            <span>{{ scope.row.cardType }}</span>
          </template>
        </el-table-column>
        <el-table-column label="卡号">
          <template #default="scope">
            <span>{{ scope.row.cardNo }}</span>
          </template>
        </el-table-column>
        <el-table-column label="用户名">
          <template #default="scope">
            <span>{{ scope.row.userName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="性别">
          <template #default="scope">
            <span>{{ scope.row.userSex }}</span>
          </template>
        </el-table-column>
        <el-table-column label="年龄">
          <template #default="scope">
            <span>{{ scope.row.userAge }}</span>
          </template>
        </el-table-column>
        <el-table-column label="角色">
          <template #default="scope">
            <span>{{ scope.row.userRole }}</span>
          </template>
        </el-table-column>
        <el-table-column label="管理">
          <template #default="scope">
            <div class="action-buttons">
              <el-button type="primary" round @click="handleEdit(scope.$index, scope.row)">
                信息修改
              </el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="辞退">
          <template #default="scope">
            <div class="action-buttons">
              <el-button type="danger" round @click="handleDelete(scope.$index, scope.row)">
                确认辞退
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <el-pagination background :disabled="disablePage" :current-page="currentPage" :size="'small'"
      layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="handlePageChange" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessageBox, ElMessage } from "element-plus";
import { fetchUsers, fetchUserCount, deleteUserById, deleteUserByIdList } from '../api/index';
import { useRouter } from 'vue-router'; 

const router = useRouter();

const ruleForm = reactive({
  userId: null,
  cardType: null,
  cardNo: null,
  userName: null,
  userSex: null,
  userAge: 18,
  userRole: null,
});

const search1 = ref("");
const search2 = ref("");
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
  router.push({ name: 'EditUser', query: { userId: row.userId } });
};

const handleDelete = (index, row) => {
  ElMessageBox.confirm("《劳动合同法》第八十七条 用人单位违反本法规定解除或者终止劳动合同的，应当依照本法第四十七条规定的经济补偿标准的二倍向劳动者支付赔偿金", "《劳动法》提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      deleteUserById(row.userId)
        .then(() => {
          fetchData();
          ElMessage.success("辞退成功!");
        })
        .catch((error) => console.log(error));
    })
    .catch(() => {
      ElMessage.info("已取消辞退");
    });
};

const handleDeleteList = () => {
  if (multipleSelection.value.length === 0) {
    ElMessage.warning("请先选择要辞退的用户！");
    return;
  }

  const userIdList = multipleSelection.value.map((item) => item.userId);
  ElMessageBox.confirm("确认辞退选中的用户?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      deleteUserByIdList(userIdList)
        .then(() => {
          fetchData();
          ElMessage.success("辞退成功!");
        })
        .catch((error) => {
          console.error("辞退失败: ", error);
          ElMessage.error("辞退失败，请稍后重试！");
        });
    })
    .catch(() => {
      ElMessage.info("已取消辞退");
    });
};

const handleSelectionDelete = (val) => {
  multipleSelection.value = val;
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #dcdcdc;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.table-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}
</style>
