<template>
  <easy-dialog
    v-model="dialogVisible"
    :title="$t('组件交互配置')"
    width="min(800px, 98vw)"
    height="min(600px, 90vh)"
  >
    <div class="main-config">
      <div class="base-config-wrapper">
        <div class="config-title">
          {{ $t('基础配置') }}
        </div>
        <div class="form-wrapper scrollbar1">
          <el-form label-width="100px">
            <el-form-item :label="$t('交互行为')">
              <el-select v-model="state.formData.actionType">
                <el-option :label="$t('无')" :value="0" />
                <el-option :label="$t('鼠标点击')" :value="1" />
              </el-select>
            </el-form-item>
            <el-form-item v-if="state.formData.actionType === 1" :label="$t('鼠标点击')">
              <el-select v-model="state.formData.actionClickType">
                <el-option :label="$t('显示新组件(Toggle)')" :value="1" />
                <el-option :label="$t('跳转链接')" :value="2" />
                <el-option :label="$t('运行Javascript脚本')" :value="3" disabled />
              </el-select>
            </el-form-item>
            <el-form-item
              v-if="state.formData.actionType === 1 && state.formData.actionClickType === 2"
            >
              <el-input
                v-model="state.formData.actionClickValue.url"
                :placeholder="$t('请输入一个可用的跳转链接')"
              />
            </el-form-item>
          </el-form>
          <div
            v-if="state.formData.actionType === 1 && state.formData.actionClickType === 1"
            class="action-component-setting"
          >
            <div class="title">
              {{ $t('Toggle组件配置') }}
            </div>
            <el-form ref="componentSettingForm" class="setting-form1" label-position="top">
              <el-form-item :label="$t('物料组件')">
                <div class="flex-center-y">
                  <component
                    :is="MaterialSelector"
                    v-model="state.formData.actionClickValue.material"
                  />
                  <Tips :content="$t('actionMaterialTips')" />
                </div>
              </el-form-item>
              <el-form-item :label="$t('尺寸')">
                <div class="form-row-control">
                  <div class="label">
                    Width
                  </div>
                  <div class="content">
                    <el-input-number
                      v-model="state.formData.actionClickValue.w"
                      controls-position="right"
                      :min="40"
                      :max="1920"
                      style="width: 100px"
                    />
                    <span class="font-control">px</span>
                  </div>
                </div>
                <div class="form-row-control">
                  <div class="label">
                    Height
                  </div>
                  <div class="content">
                    <el-input-number
                      v-model="state.formData.actionClickValue.h"
                      controls-position="right"
                      :min="40"
                      :max="1920"
                      style="width: 100px"
                    />
                    <span class="font-control">px</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item :label="$t('Popover配置')">
                <div class="form-row-control">
                  <div class="label">
                    {{ $t('方向') }}
                  </div>
                  <div class="content">
                    <el-select v-model="state.formData.actionClickValue.direction" style="width: 200px;">
                      <el-option
                        v-for="item in directionList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </div>
                </div>
                <div class="form-row-control">
                  <div class="label">
                    {{ $t('阴影') }}
                  </div>
                  <div class="content">
                    <el-input
                      v-model="state.formData.actionClickValue.boxShadow"
                      style="width: 200px;"
                      clearable
                      :placeholder="$t('shadowPlaceholder')"
                    />
                  </div>
                </div>
                <div class="form-row-control">
                  <div class="label">
                    {{ $t('圆角') }}
                  </div>
                  <div class="content">
                    <el-input-number
                      v-model="state.formData.actionClickValue.borderRadius"
                      controls-position="right"
                      :min="0"
                      :max="100"
                      style="width: 100px"
                    />
                    <span class="font-control">px</span>
                  </div>
                </div>
              </el-form-item>
              <el-form-item :label="$t('背景')">
                <BackgroundSelector
                  v-model:background="state.formData.actionClickValue.background"
                  v-model:backdropFilter="state.formData.actionClickValue.backdropFilter"
                  :w="state.formData.actionClickValue.w"
                  :h="state.formData.actionClickValue.h"
                  :position-mode="2"
                  show-glass-option
                />
                <BackgroundFilterSelector
                  v-if="state.formData.actionClickValue.background.includes('url')"
                  v-model:filter="state.formData.actionClickValue.backgroundFilter"
                />
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div v-if="state.formData.actionType === 1 && state.formData.actionClickType === 1" class="component-config-wrapper">
        <div class="config-title">
          {{ $t('组件配置') }}
        </div>
        <div class="form-wrapper scrollbar1">
          <component
            :is="StandardForm"
            ref="componentDetailForm"
            :form-data="state.formData.actionClickValue.componentSetting"
            :form-conf="state.actionClickFormConf"
            label-width="120px"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="footer" style="text-align: right; padding: 12px">
        <button type="button" class="btn" @click="close">
          {{ $t('取消') }}
        </button>
        <button type="button" class="btn btn-primary" @click="submit">
          {{ $t('确认') }}
        </button>
      </div>
    </template>
  </easy-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, toRaw, defineAsyncComponent } from 'vue'
import { useStore } from '@/store'
import MaterialSelector from '@/components/FormControl/MaterialSelector.vue'
import StandardForm from '@/plugins/standard-form'
import Tips from '@/components/Tools/Tips.vue'
import TextLoading from '@/components/Tools/TextLoading.vue'
import Setting from '@/materials/setting'
import { clone } from '@/utils'
import { directionList } from '@/utils/direction'
const BackgroundSelector = defineAsyncComponent({
  loader: () => import('@/components/FormControl/BackgroundSelector.vue'),
  loadingComponent: TextLoading
})
const BackgroundFilterSelector = defineAsyncComponent({
  loader: () => import('@/components/FormControl/BackgroundFilterSelector.vue'),
  // loadingComponent: TextLoading
})
const DEFAULT_SETTING: ActionSetting = {
  actionType: 0,
  actionClickType: 1,
  actionClickValue: {
    url: '',
    material: 'Empty',
    w: 375,
    h: 400,
    background: 'rgba(255, 255, 255, 0.95)',
    backgroundFilter: 'brightness(0.8)',
    backdropFilter: '',
    direction: 0,
    boxShadow: '0 0 4px #89909c',
    borderRadius: 4,
    componentSetting: JSON.parse(JSON.stringify(Setting.Empty.formData))
  }
}

const store = useStore()
const dialogVisible = ref(false)
const componentDetailForm = ref()
const state = reactive({
  formData: JSON.parse(JSON.stringify(DEFAULT_SETTING)) as ActionSetting,
  actionClickFormConf: {}
})

let componentOptions: ComponentOptions

let needWatch = false
const open = (params: ComponentOptions) => {
  componentOptions = params
  if (params.actionSetting && params.actionSetting.actionType) {
    state.formData = JSON.parse(JSON.stringify(params.actionSetting))
  } else {
    state.formData = JSON.parse(JSON.stringify(DEFAULT_SETTING))
  }
  const material = state.formData.actionClickValue.material
  state.actionClickFormConf = clone(
    typeof Setting[material].formConf === 'function'
      ? (Setting[material].formConf as any)(state.formData.actionClickValue.componentSetting)
      : Setting[material].formConf
  )
  dialogVisible.value = true
  setTimeout(() => {
    needWatch = true
  })
}
const close = () => {
  dialogVisible.value = false
  needWatch = false
}

watch(
  () => state.formData.actionClickValue.material,
  () => {
    if (needWatch) {
      if (
        componentOptions?.actionSetting?.actionClickValue?.material ===
        state.formData.actionClickValue.material
      ) {
        return
      }
      const material = state.formData.actionClickValue.material
      state.formData.actionClickValue.componentSetting = JSON.parse(
        JSON.stringify(Setting[material].formData)
      )
      state.actionClickFormConf = clone(
        typeof Setting[material].formConf === 'function'
          ? (Setting[material].formConf as any)(state.formData.actionClickValue.componentSetting)
          : Setting[material].formConf
      )
    }
  }
)

const submit = () => {
  if (state.formData.actionType) {
    if (state.formData.actionClickType === 1) {
      componentDetailForm.value.validate((valid: boolean) => {
        if (valid) {
          const result = {
            ...componentOptions,
            actionSetting: toRaw(state.formData)
          }
          store.editComponent(result)
          close()
        } else {
          return false
        }
      })
    } else if (state.formData.actionClickType === 2) {
      if (
        /[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(
          state.formData.actionClickValue.url
        )
      ) {
        if (
          !/https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(
            state.formData.actionClickValue.url
          )
        ) {
          state.formData.actionClickValue.url = 'https://' + state.formData.actionClickValue.url
        }
        const result = {
          ...componentOptions,
          actionSetting: toRaw(state.formData)
        }
        store.editComponent(result)
        close()
      } else {
        alert('跳转目标URL不合法')
      }
    }
  } else {
    const result: ComponentOptions = {
      ...componentOptions,
      actionSetting: null
    }
    store.editComponent(result)
    close()
  }
}

defineExpose({
  open,
  close
})
</script>

<style lang="scss" scoped>
@mixin label-formatter {
  display: inline-flex !important;
  color: rgb(43, 43, 43);
  font-weight: bold;
  line-height: 1 !important;
  font-size: 16px;
  position: relative;
}
@mixin label-formatter-after {
  position: absolute;
  content: '';
  left: 0;
  width: 100%;
  bottom: 0;
  height: 8px;
  background: rgba($color-warning, 0.2);
}
.main-config {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  .base-config-wrapper,
  .component-config-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    padding-left: 10px;
    padding-right: 4px;
    .config-title {
      font-size: 20px;
      font-weight: bold;
      color: #3c2554;
      margin-bottom: 10px;
    }
    .form-wrapper {
      height: 100%;
      flex: 1;
      overflow-y: auto;
      padding-top: 5px;
      padding-right: 8px;
    }
  }
  .base-config-wrapper {
    border-right: 2px solid #eee;
  }
}
.action-component-setting {
  margin-top: 10px;
  padding-top: 10px;
  .title {
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #a9a9a9;
    position: relative;
    margin-bottom: 16px;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      border-top: 1px solid #eee;
      width: calc(50% - 60px);
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  .form-row-control {
    @include flex-center-y;
    margin-bottom: 8px;
    .label {
      width: 84px;
      text-align: right;
      color: rgb(43, 43, 43);
      font-weight: bold;
      font-size: 14px;
      margin-right: 8px;
    }
  }

  .font-control {
    font-size: 14px;
    font-weight: bold;
    margin-left: 4px;
  }
  .unit {
    margin-left: 6px;
    font-size: 14px;
    color: #787885;
  }
  .setting-form1 {
    :deep(.el-form-item__label) {
      @include label-formatter;
      &:after {
        @include label-formatter-after;
      }
    }
  }
  .component-detail-setting {
    .label {
      @include label-formatter;
      &:after {
        @include label-formatter-after;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .main-config {
    overflow: auto;
    height: auto;
    .base-config-wrapper,
    .component-config-wrapper {
      width: 100%;
      padding: 0 10px;
      border-right: none;
      margin-bottom: 20px;
    }
  }
}
</style>
