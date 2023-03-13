import { RouteRecordRaw, useRouter } from 'vue-router';

const router = useRouter();

const navigationList = (currentRoutes: readonly RouteRecordRaw[]) => {
    return currentRoutes.filter((route) => {
        // Check for correct meta
        if (route.meta == undefined) {
            route.meta = { title: 'Missing identifier' };
            return true;
        }

        // Check visibility
        if (route.meta.visible != undefined && !route.meta.visible) {
            return false;
        }
        /**
        Check permissions if needed
        if (route.meta.permissions != undefined
        ) {
            if (!session) {
                return false;
            }

            if (hasPermission()) {
                var roles = userRoles.find((el) =>
                    route.meta.permissions.includes(el.name)
                );
                return roles != undefined;
            }
            return false;
        }

        // Check session
        if (route.meta.session != undefined) {
            return !((session && route.meta.session == false) ||
                (!session && route.meta.session == true))
        }
        */
        return true;
    });
};

export { navigationList };
