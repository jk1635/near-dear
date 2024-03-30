import '@emotion/react';
import theme from '@styles/theme';

type NDTheme = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends NDTheme {}
}
