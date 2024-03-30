import '@emotion/react';
import theme from '@common/styles/theme.ts';

type NDTheme = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends NDTheme {}
}
