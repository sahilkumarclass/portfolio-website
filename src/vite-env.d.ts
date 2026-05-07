/// <reference types="vite/client" />

declare module "*.pdf" {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_GITHUB_USER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
