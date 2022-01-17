import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Electrolize&display=swap');
    body {
      font-family: AppleSDGothicNeo-SemiBold, "Apple SD Gothic Neo", sans-serif;
    }
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: "";
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    
    button {
      border: none;
      outline: none;
      background-color: transparent;
    }

    @font-face {
      font-family: 'icomoon';
      src:  url('https://d1azc1qln24ryf.cloudfront.net/78252/wantedicon/icomoon.eot?8et930');
      src:  url('https://d1azc1qln24ryf.cloudfront.net/78252/wantedicon/icomoon.eot?8et930#iefix') format('embedded-opentype'),
        url('https://d1azc1qln24ryf.cloudfront.net/78252/wantedicon/icomoon.woff2?8et930') format('woff2'),
        url('https://d1azc1qln24ryf.cloudfront.net/78252/wantedicon/icomoon.ttf?8et930') format('truetype'),
        url('https://d1azc1qln24ryf.cloudfront.net/78252/wantedicon/icomoon.woff?8et930') format('woff'),
        url('https://d1azc1qln24ryf.cloudfront.net/78252/wantedicon/icomoon.svg?8et930#icomoon') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }
    
    [class^="icon-"], [class*=" icon-"] {
      /* use !important to prevent issues with browser extensions that change fonts */
      font-family: 'icomoon' !important;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
    
      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .icon-logo_new:before {
      content: "\e992";
    }

    .icon-logo:before {
      content: "\e928";
    }
`;

export default GlobalStyles;
