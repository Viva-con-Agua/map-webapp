import { beforeEach, vi } from 'vitest';

beforeEach(() => {
    vi.stubGlobal('$t', (key: any) => key);
});
