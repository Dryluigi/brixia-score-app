/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_BRIXIA_SERVICE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}