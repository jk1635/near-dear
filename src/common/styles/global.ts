import { css } from '@emotion/react';

const global = css`
    :root {
        --min-width: 320px;
        --max-width: 768px;
        line-height: 1.5;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
    }

    html {
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-family: Arial, sans-serif;
        overflow-x: hidden;
    }

    html,
    body {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: 0;
    }
`;

export default global;
