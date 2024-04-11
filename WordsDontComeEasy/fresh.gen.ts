// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_pagesection_ from "./routes/[pagesection].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $hihihi from "./routes/hihihi.tsx";
import * as $index from "./routes/index.tsx";
import * as $CustomHeader from "./islands/CustomHeader.tsx";
import * as $Formulario from "./islands/Formulario.tsx";
import * as $HiButton from "./islands/HiButton.tsx";
import * as $StartComp from "./islands/StartComp.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[pagesection].tsx": $_pagesection_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/hihihi.tsx": $hihihi,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/CustomHeader.tsx": $CustomHeader,
    "./islands/Formulario.tsx": $Formulario,
    "./islands/HiButton.tsx": $HiButton,
    "./islands/StartComp.tsx": $StartComp,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
