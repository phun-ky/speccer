import type { Theme } from 'vitepress';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';
import { h, onMounted, watchEffect } from 'vue';
import HomeBanner from './components/HomeBanner.vue';
import HeroBanner from './components/HeroBanner.vue';
import 'virtual:group-icons.css';
import './custom.css';

const GLOBAL_CLASS = 'ph';
const THEME_DARK = 'theme--dark';
const THEME_LIGHT = 'theme--light';

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomeBanner),
      'doc-top': () => {
        const { frontmatter } = useData();
        return frontmatter.value.showHero ? h(HeroBanner) : null;
      }
    });
  },
  enhanceApp() {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add(GLOBAL_CLASS);
    }
  },

  setup() {
    const { isDark } = useData();

    onMounted(() => {
      const root = document.documentElement;

      watchEffect(() => {
        root.classList.toggle(THEME_DARK, isDark.value);
        root.classList.toggle(THEME_LIGHT, !isDark.value);
      });
    });
  }
} satisfies Theme;
