import { createI18n } from 'vue-i18n';
import de from '@/locales/de.json';
import gb from '@/locales/en.json';

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'de', // set locale
    fallbackLocale: 'de', // set fallback locale
    globalInjection: true,
    messages: {
        de,
        gb,
    }, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
});
export default i18n;
