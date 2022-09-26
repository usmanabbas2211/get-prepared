export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_QUERY_STRING: string
        }
    }
}
