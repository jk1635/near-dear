import { Theme } from '@emotion/react';

const theme: Theme = {
    colors: {
        primary: '#fef3d3',
        black: '#141618',
        white: '#ffffff',
        gray: '#c2cfd9',
    },
    typography: {
        t1: { fontSize: '1.5rem', fontWeight: 500, lineHeight: '1.5' },
        t2: { fontSize: '1.25rem', fontWeight: 700, lineHeight: '1.4' },
        t3: { fontSize: '1.125rem', fontWeight: 700, lineHeight: '1.5' },
        t4: { fontSize: '1.125rem', fontWeight: 400, lineHeight: '1.5' },
        t5: { fontSize: '1rem', fontWeight: 500, lineHeight: '1.5' },
        t6: { fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.4' },
        t7: { fontSize: '0.75rem', fontWeight: 400, lineHeight: '1.4' },
        caption: { fontSize: '0.75rem', fontWeight: 700, lineHeight: '1.4' },
        button: { fontSize: '0.875rem', fontWeight: 700, lineHeight: '1.5' },
    },
};

export default theme;
