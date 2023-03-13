import { render, fireEvent } from '@testing-library/vue';
import RactivityExample from '@/components/examples/ReactivityExample.vue';

describe('test the button and if the clicks are rendered correctly', () => {
    it('renders button', async () => {
        //arange
        const { findByTestId } = render(RactivityExample, {
            global: {
                //this mock would be better at a global level
                mocks: {
                    $t: (key: any) => key, // mocking i18n
                },
            },
        });

        //act
        const button = await findByTestId('action-button');

        //assert
        expect(button).toBeTruthy();
    });
    it('handles button click correctly', async () => {
        //arange
        const { findByTestId } = render(RactivityExample, {
            global: {
                mocks: {
                    $t: (key: any) => key, // mocking i18n
                },
            },
        });

        //act
        const button = await findByTestId('action-button');

        //assert
        expect(button);

        await fireEvent.click(button);

        //assert
        expect(button).toBeTruthy();
    });
});
