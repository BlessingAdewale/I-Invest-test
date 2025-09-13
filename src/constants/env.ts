import { z } from 'zod';
// const envBooleanSchema = z
//   .string()
//   .optional()
//   .pipe(
//     z.preprocess((val) => {
//       if (
//         typeof val === 'string' &&
//         ['1', 'true'].includes(val.toLowerCase())
//       ) {
//         return true;
//       }
//       return false;
//     }, z.coerce.boolean())
//   );

export const ENVIRONMENT_VARIABLES = z.object({
  EXPO_PUBLIC_BASE_URL: z.string(),
  // EXPO_PUBLIC_I18N_DEBUG: envBooleanSchema,
  TZ: z.string().optional(),
  NODE_ENV: z.string().optional(),
});

// This is needed because Expo hardcodes the process.env keys one by one, at runtime process.env is empty.
// but each property does contain the right value by separate.
// more in https://github.com/expo/expo/issues/24236.
export function getProcessEnv(): Record<
  keyof z.infer<typeof ENVIRONMENT_VARIABLES>,
  string | undefined
> {
  return {
    EXPO_PUBLIC_BASE_URL: process.env.EXPO_PUBLIC_BASE_URL,
    TZ: process.env.TZ,
    NODE_ENV: process.env.NODE_ENV,
  };
}
