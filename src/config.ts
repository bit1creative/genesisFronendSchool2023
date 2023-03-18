import { z } from 'zod';

const envSchema = z.object({
    MODE: z.enum(['development', 'production']),
    VITE_COURSES_API_URL: z.string().url()
});

type Config = z.infer<typeof envSchema>;
const config = envSchema.parse(import.meta.env);

export default config as Config;
