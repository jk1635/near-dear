import { css } from '@emotion/react';

const global = css`
    :root {
        --min-width: 320px;
        --max-width: 768px;
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
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4;
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
