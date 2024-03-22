type ThemeColor = 'primary' | 'black' | 'white' | 'gray';

type TypographyKey = 't1' | 't2' | 't3' | 't4' | 't5' | 't6' | 't7' | 'caption' | 'button';

interface TypographyStyle {
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
}

declare module '@emotion/react' {
    export interface Theme {
        colors: Record<ThemeColor, string>;
        typography: Record<TypographyKey, TypographyStyle>;
    }
}
