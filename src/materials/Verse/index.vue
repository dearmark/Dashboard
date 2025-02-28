<template>
  <div
    ref="verseElement"
    class="wrapper material-verse"
    :style="{
      fontSize: componentSetting.textFontSize + 'px',
      color: componentSetting.textColor,
      textShadow: componentSetting.textShadow,
      padding: componentSetting.padding + 'px',
      fontFamily: componentSetting.fontFamily,
      ...positionCSS,
    }"
  >
    {{ verse }}
    <div
      class="title"
      :style="{
        fontSize: componentSetting.textFontSize * 0.7 + 'px',
        color: componentSetting.textColor,
        textShadow: componentSetting.textShadow,
        padding: componentSetting.padding + 'px',
        fontFamily: componentSetting.fontFamily,
        ...positionCSS,
      }"
    >
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  computed,
  watch,
} from "vue";
import { mapPosition } from "@/plugins/position-selector";
import { execCopy } from "@/utils";
import { ElNotification } from "element-plus";
import { useStore } from "@/store";
import { useI18n } from "vue-i18n";
import request from "@/utils/request";
export default defineComponent({
  name: "Verse",
  props: {
    componentSetting: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const verse = ref("");
    const title = ref("");
    const verseElement = ref();
    const store = useStore();
    const { t } = useI18n();

    async function getVerse() {
      try {
        if (props.componentSetting.source === 2) {
          const { sentence } = await request({ url: `/api/sentence` });
          verse.value = sentence;
        } else {
          const res = await fetch("https://v1.jinrishici.com/all.json");
          const { content, origin, author } = await res.json();
          verse.value = content;
          title.value = `《${origin}》${author}`;
        }
      } catch {
        //
      }
    }

    let timer: number | null;
    const refreshTimer = () => {
      const refreshDuration =
        (props.componentSetting.duration || 5) * 60 * 1000;
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
      timer = window.setInterval(getVerse, refreshDuration);
    };
    watch(
      () => props.componentSetting.duration,
      () => refreshTimer(),
      { immediate: true }
    );

    watch(
      () => props.componentSetting.source,
      () => getVerse()
    );

    onMounted(() => getVerse());
    onUnmounted(() => timer && window.clearInterval(timer));

    const positionCSS = computed(() =>
      mapPosition(props.componentSetting.position)
    );

    watch(
      () => verse.value,
      () => {
        if (verseElement.value && verseElement.value.animate) {
          verseElement.value.animate({ opacity: [0, 1] }, 400);
        }
      }
    );

    const handleClickAction = () => {
      if (props.componentSetting.clickActionType === 1) {
        getVerse();
        refreshTimer();
      } else if (props.componentSetting.clickActionType === 2) {
        window.open(
          `https://hanyu.baidu.com/s?wd=${encodeURIComponent(verse.value)}`
        );
      } else if (props.componentSetting.clickActionType === 3) {
        if (execCopy(verse.value)) {
          ElNotification({
            title: t("提示"),
            type: "success",
            message: t("复制成功"),
          });
        }
      }
    };

    return {
      verse,
      title,
      positionCSS,
      verseElement,
      handleClickAction,
    };
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  // font-family: "Source Han Serif CN";
}

// .title {
//   position: relative;
//   display: flex;
//   width: 50%;
//   height: 50%;
// }
</style>
