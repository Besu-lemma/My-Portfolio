/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ADMIN_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
