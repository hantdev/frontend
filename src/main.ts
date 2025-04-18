import { createApp, watch } from 'vue';
import './plugins/assets';
import { useSysSettingStore } from '@/store/modules/sys-setting';
import { setupDayjs, setupIconifyOffline, setupLoading, setupNProgress } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import { i18n, setupI18n } from './locales';
import App from './App.vue';

async function setupApp() {
  const app = createApp(App);
  setupStore(app);
  setupI18n(app);
  const sysSettingStore = useSysSettingStore();
  await sysSettingStore.initSysSetting();
  watch(
    () => sysSettingStore.system_name,
    newSystemName => {
      const locales = i18n.global.availableLocales;
      locales.forEach(locale => {
        i18n.global.mergeLocaleMessage(locale, {
          system: {
            title: newSystemName
          }
        });
      });
    },
    { immediate: true }
  );
  setupLoading();
  setupNProgress();
  setupIconifyOffline();
  setupDayjs();
  await setupRouter(app);
  app.config.globalProperties.getPlatform = () => {
    const { appVersion }: any = window.navigator;
    if (['iPhone', 'Android', 'iPad'].includes(appVersion) || window.innerWidth < 680) {
      return true;
    }
    return false;
  };
  app.mount('#app');
}

setupApp();
