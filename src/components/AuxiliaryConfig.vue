<template>
  <easy-dialog
    v-model="dialogVisible"
    :title="$t('辅助功能')"
    width="min(540px, 98vw)"
    height="min(620px, 90vh)"
    custom-class="auxiliary-config-dialog"
    @close="close"
  >
    <el-tabs v-model="activeName" tab-position="left" class="auxiliary-tab" style="height: 100%">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.label"
        style="height: 100%;overflow-y: auto;"
        :label="$t(item.label)"
        :name="item.cName"
        :lazy="true"
      >
        <component :is="item.cName" />
      </el-tab-pane>
    </el-tabs>
  </easy-dialog>
</template>

<script lang="ts">
import { defineComponent, watch, ref, defineAsyncComponent } from 'vue'
import Loading from '@/components/Tools/Loading.vue'
export default defineComponent({
  name: 'AuxiliaryConfig',
  components: {
    FAQ: defineAsyncComponent({
      loader: () => import('@/components/Axuiliary/FAQ.vue'),
      loadingComponent: Loading
    }),
    ImportExport: defineAsyncComponent({
      loader: () => import('@/components/Axuiliary/ImportExport.vue'),
      loadingComponent: Loading,
    }),
    About: defineAsyncComponent({
      loader: () => import('@/components/Axuiliary/About.vue'),
      loadingComponent: Loading,
    }),
    ChangeLog: defineAsyncComponent({
      loader: () => import('@/components/Axuiliary/ChangeLog.vue'),
      loadingComponent: Loading
    }),
    TabControl: defineAsyncComponent({
      loader: () => import('@/components/Axuiliary/TabControl.vue'),
      loadingComponent: Loading
    }),
    CleanCache: defineAsyncComponent(() => import('@/components/Axuiliary/CleanCache.vue')),
    EffectSelector: defineAsyncComponent(() => import('@/components/Axuiliary/EffectSelector.vue'))
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const dialogVisible = ref(false)
    watch(() => props.visible, (val) => {
      if (val) {
        dialogVisible.value = true
      } else {
        dialogVisible.value = false
      }
    })
    const close = () => {
      emit('update:visible', false)
    }

    const isPreviewMode = location.href.includes('preview=')

    const activeName = ref('TabControl')
    const tabList = ref([
      {
        label: '多页设置',
        cName: 'TabControl'
      },
      {
        label: '动画滤镜',
        cName: 'EffectSelector'
      },
      {
        label: '常见问题',
        cName: 'FAQ'
      },
      {
        label: '导入导出',
        cName: 'ImportExport'
      },
      {
        label: '关于项目',
        cName: 'About'
      },
      {
        label: '更新日志',
        cName: 'ChangeLog'
      },
      ...(isPreviewMode ? [] : [{
        label: '清除数据',
        cName: 'CleanCache'
      }])
    ])
    return {
      dialogVisible,
      close,
      tabList,
      activeName
    }
  }
})
</script>
<style>
.auxiliary-config-dialog .easy-dialog-body{
  padding: 5px 5px 20px!important;
}
.auxiliary-config-dialog .easy-dialog-body .el-tabs__content{
  height: 100%;
}
@media screen and (max-width: 500px) {
  .auxiliary-config-dialog .easy-dialog-body .el-tabs--left .el-tabs__header.is-left{
    margin-right: 0;
  }
  .auxiliary-config-dialog .easy-dialog-body .el-tabs__item {
    padding: 0 8px;
  }
}
</style>
