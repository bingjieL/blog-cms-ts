import { hostUrl } from '@/server/apiConfig';
import { Vue, Component } from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface Vue {
    $uploadUrl: string;
    uploadMp3Url: string;
  }
}

@Component
export default class CommonMixins extends Vue {
  get $uploadUrl() {
    return `${hostUrl}/api/upFiles`;
  }
  get $uploadMp3Url() {
    return `${hostUrl}/api/upFilesMP3`;
  }
}
