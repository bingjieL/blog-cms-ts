<template>
  <section class="add-wrap">
    <div class="main-header">
      <h3 class="title">{{$route.name}}</h3>
      <el-button type="primary" @click="goAdd">添加</el-button>
    </div>
    <el-table
      :data="blogListData"
      stripe
      :default-sort="{prop: 'blogId', order: 'descending'}"
      style="width: 100%"
    >
      <el-table-column prop="updatedTime" label="Date" sortable width="140">
        <template slot-scope="scope">
          <span>{{scope.row.updated_time.substring(0, 10)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="blogId" label="blogId" sortable width="120"></el-table-column>
      <el-table-column prop="blogTitle" label="blogTitle" sortable></el-table-column>
      <el-table-column label="blogType" sortable>
        <template slot-scope="scope">
          <span
            style="color: #2593FC;"
          >{{scope.row.blog_type?scope.row.blog_type.blogTypeTitle:'No Select'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="blogHot" label="blogHot" sortable></el-table-column>
      <el-table-column prop="blogLikes" label="blogLikes" sortable></el-table-column>
      <el-table-column prop="blogDes" label="blogDes" sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i class="el-icon-edit action" @click="goEdit(scope.row)"></i>
          <i class="el-icon-delete action" @click="deleteBaner(scope.row)"></i>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagenation">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="form.pageNumber"
        :page-size="form.pageSize"
        layout="prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { GetApi, DeleteApi } from "@/server/blog";

interface FormType {
  pageNumber: number;
  pageSize: number;
}

@Component({})
export default class BlogList extends Vue {
  blogListData: any[] = [];
  count: number = 0;
  form: FormType = {
    pageNumber: 0,
    pageSize: 5
  };
  handleSizeChange(val: number) {}
  handleCurrentChange(val: number) {
    this.form.pageNumber = val;
    this.getList(this.form);
  }
  goAdd() {
    this.$router.push("/blog/edit");
  }
  goEdit(rowDetail: any) {
    let _id = rowDetail.blogId;
    this.$router.push({ path: "/blog/edit", query: { _mid: _id } });
  }
  getList(params: object) {
    GetApi(params).then((res: any) => {
      // console.log('---> res blog list', res)
      if (res.code == 200) {
        this.blogListData = res.data.rows;
        this.count = res.data.count;
      }
    });
  }
  deleteBaner(rowDetail: any) {
    let _id = rowDetail.blogId;
    let params = {
      blogId: _id
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
            this.getList(this.form);
          }
        });
      })
      .catch(() => {});
  }
  mounted() {
    this.getList(this.form);
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
  .pagenation {
    text-align: right;
    padding: 40px 10px;
  }
}
</style>
