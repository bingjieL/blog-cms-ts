<template>
  <section class="add-wrap">
    <div class="main-header">
      <h3 class="title">{{$route.name}}</h3>
      <el-button type="primary" @click="goAdd">添加</el-button>
    </div>
    <el-table
      :data="sheetListData"
      stripe
      :default-sort="{prop: 'sheetId', order: 'descending'}"
      style="width: 100%"
    >
      <el-table-column prop="updatedTime" label="Date" sortable width="140">
        <template slot-scope="scope">
          <span>{{scope.row.updated_time.substring(0, 10)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="musicSheetId" prop="sheetId" sortable width="140"></el-table-column>
      <el-table-column label="musicSheetTitle" prop="sheetTitle" sortable></el-table-column>
      <el-table-column label="musicSheetDes" prop="sheetDes" sortable></el-table-column>
      <el-table-column prop="sheetUrl" label="musicSheetUrl" sortable></el-table-column>
      <el-table-column prop="sheetImg" label="图片地址">
        <template slot-scope="scope">
          <a
            style="color: #2593FC;"
            :href="scope.row.sheetPic"
            target="_blank"
            rel="noopener noreferrer"
          >{{scope.row.sheetImg}}</a>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i class="el-icon-edit action" @click="goEdit(scope.row)"></i>
          <i class="el-icon-delete action" @click="deleteBaner(scope.row)"></i>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { GetApi, DeleteApi } from "@/server/musicSheet";

@Component({})
export default class MusicSheetList extends Vue {
  sheetListData: any[] = [];
  count: number = 0;
  pageSize: number = 0;
  goAdd() {
    this.$router.push("/musicSheet/edit");
  }
  goEdit(rowDetail: any) {
    let _id = rowDetail.sheetId;
    this.$router.push({ path: "/musicSheet/edit", query: { _mid: _id } });
  }
  getList(params: any) {
    GetApi(params).then((res: any) => {
      if (res.code == 200) {
        this.sheetListData = res.data.rows;
        this.count = res.data.count;
      }
    });
  }
  deleteBaner(rowDetail: any) {
    let _id = rowDetail.sheetId;
    let params = {
      sheetId: _id
    };
    this.$confirm("点击确认将删除此条数据, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        DeleteApi(params).then((res: any) => {
          if (res.code == 200) {
            this.$message({
              message: res.message,
              type: "success"
            });
            this.getList({});
          }
        });
      })
      .catch(() => {});
  }
  mounted() {
    this.getList({});
  }
}
</script>

<style lang='scss'>
.add-wrap {
  .action {
    font-size: 18px;
    padding: 0 5px;
    cursor: pointer;
  }
  .el-icon-delete {
    color: #f56c6c;
  }
}
</style>
