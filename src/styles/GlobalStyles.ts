import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }
    html {
        min-height: 100%;
        background: var(--primary);
    }
    :root {
      --primary: #d8dae3;
    }
    `;