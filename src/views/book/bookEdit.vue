<template>
    <section class="edit-wrap">
        <div class="main-header">
            <h3 class="title"> {{isEdit? $route.name: 'Book Add'}}</h3>
        </div>
        <el-form class="edit-mian" :model="editForm" :rules="editRules" ref="editForm" label-width="140px" label-position="left">
            <el-form-item label="Book Title" prop="bookTitle">
                <el-input v-model="editForm.bookTitle" placeholder="请输入Book Title"></el-input>
            </el-form-item>
            <el-form-item label="Book Author" prop="bookAuthor">
                <el-input v-model="editForm.bookAuthor" placeholder="请输入Book Author"></el-input>
            </el-form-item>
            <el-form-item label="Book PDF Url" prop="bookpdfUrl">
                <el-input v-model="editForm.bookpdfUrl"  placeholder="请输入Book PDF Url"></el-input>
            </el-form-item>
            <el-form-item label="Book KDL Url" prop="bookdlUrl">
                <el-input v-model="editForm.bookdlUrl" placeholder="请输入Book KDL Url"></el-input>
            </el-form-item>
            <el-form-item label="Book Pic" prop="bookPic">
                 <el-upload
                    class="avatar-uploader"
                    :action="$uploadUrl"
                    nam="file"
                    :show-file-list="false"
                    :on-error="handleAvatarError"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                        <img v-if="editForm.bookPic" v-lazy="editForm.bookPic" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="Book Des" prop="bookDes">
                <el-input style="width: 60%;" type="textarea" :rows="3" v-model="editForm.bookDes" placeholder="请输入Book Des"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="saveLoading" @click="submitForm('editForm')">立即创建</el-button>
                <el-button @click="resetForm('editForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>
<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator'
import { AddApi, UpdateApi, FindByIdApi  } from '@/server/book'

interface EditFormType {
    bookTitle: string,
    bookAuthor: string,
    bookDes: string,
    bookpdfUrl: string,
    bookPic: string,
    bookdlUrl: string
}

@Component({})
export default class BookEdit extends Vue {
  editForm:EditFormType =  {
    bookTitle: '',
    bookAuthor: '',
    bookDes: '',
    bookpdfUrl: '',
    bookPic: '',
    bookdlUrl: ''
  }
  saveLoading: boolean = false
  isEdit: boolean =  false
  _mid: any = null
  editRules: any =  {
    bookTitle: [
      { required: true, message: '请输入Book Title', trigger: 'blur' }
    ],
    bookAuthor: [
      { required: true, message: '请输入Book Author', trigger: 'blur' }
    ],
    bookDes: [
      { required: true, message: '请输入Book Des', trigger: 'blur' }
    ],
    bookpdfUrl: [ 
      { required: true, message: '请输入Book PDF Url', trigger: 'blur' }
    ],
    bookPic: [
      { required: true, message: '请上传Book Pic', trigger: 'change' }
    ],
    bookdlUrl: [
      { required: true, message: '请填写Book KDL Url ', trigger: 'blur' }
    ]
  }
  submitForm(formName: string) {
    (this.$refs[formName] as any).validate((valid: boolean) => {
      if (valid) {
        this.save()
      } else {
        return false;
      } 
    });
  }
  resetForm(formName: string) {
    this.$confirm('点击确认将重置已填写数据, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      (this.$refs[formName] as any ).resetFields();
    }).catch(() => {
                
    });
  }
  handleAvatarError(err: any, file: any, fileList: any) {
      console.log('---> err', err)
  }
  handleAvatarSuccess(res: any, file: any) {
    if(res.code=== 200){
        this.editForm.bookPic = res.data.url
    }
  }
  beforeAvatarUpload(file: any) {
    const isJPG = file.type === 'image/jpeg' || 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJPG) {
      this.$message.error('上传头像图片只能是 JPG 格式!');
    }
    if (!isLt2M) {
      this.$message.error('上传图片大小不能超过 2MB!');
    }
    return isJPG && isLt2M;
  }
  save() {
    this.saveLoading = true
    if(this.isEdit) {
      UpdateApi(this.editForm).then((res: any) => {
        this.saveLoading = false
        if(res.code == 200){
          this.$message({
            message: res.message,
            type: 'success'
          });
          this.$router.push('/book/list')
        }
      })
    }else {
      AddApi(this.editForm).then((res: any) => {
        this.saveLoading = false
        if(res.code == 200){
          this.$message({
            message: res.message,
            type: 'success'
          });
          this.$router.push('/book/list')
        }
      })
    }
  }
  getDetail(id: any) {
    FindByIdApi({bookId: id}).then((res: any) => {
      if(res.code == 200) {
        this.editForm = res.data
      }
    })
  }
  mounted() {
    let {_mid} = this.$route.query
    if(_mid){
        this.isEdit = true
        this._mid = _mid
        this.getDetail(_mid)
    }else{
        this.isEdit = false
    }
  }
}

        
</script>
<style lang="scss">
.edit-wrap{
    .avatar-uploader{
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover{
                    border-color: #409EFF;
            }
            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 300px;
                height: 150px;
                line-height: 150px;
                text-align: center;
            }
            .avatar {
                width: 300px;
                height: 150px;
                display: block;
            }
        }
    }
}
@import '@/assets/style/banner/bannerEdit.scss';
</style>
