import { NotificationsOptions, notify } from '@kyvg/vue3-notification';
import i18n from '@/i18n';

const { t } = i18n.global;

const notification = (args: NotificationsOptions) => {
    notify({
        ...{
            duration: 6000,
        },
        ...args,
        ...{
            title: t(args.title ? args.title : 'messages.title.error'),
            text: t(args.text ? args.text : 'messages.error.unknown'),
        },
    });
};

export { notification };
