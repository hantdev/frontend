<script setup lang="ts">
import { watch } from 'vue';
import type { EChartsCoreOption } from 'echarts/core';
import { useTpECharts } from '@/hooks/tp-chart/use-tp-echarts';
defineOptions({
  name: 'ChartComponent'
});
// Props
const props = defineProps<{
  initialOptions: EChartsCoreOption;
}>();
const { domRef, updateOptions } = useTpECharts(() => props.initialOptions);
watch(
  () => props.initialOptions,
  newOptions => {
    if (newOptions) {
      updateOptions(currentOptions => {
        return { ...currentOptions, ...newOptions };
      });
    }
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div ref="domRef" class="chart-container"></div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
