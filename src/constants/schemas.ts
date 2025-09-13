import { z } from 'zod';

export const signInSchema = z.object({
  phoneNumber: z
    .string({ required_error: 'Phone number is required' })
    .min(1, 'Phone number is required')
    .regex(/^[0-9]+$/, 'Phone number must contain only digits')
    .length(11, 'Phone number must be exactly 11 digits'),

  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required'),
});
export const forgotPasswordSchema = z
  .object({
    phoneNumber: z
      .string({ required_error: 'Phone number is required' })
      .min(1, 'Phone number is required')
      .regex(/^[0-9]+$/, 'Phone number must contain only digits')
      .length(11, 'Phone number must be exactly 11 digits'),

    password: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is required'),
    confirmPassword: z
      .string({ required_error: 'Password is required' })
      .min(1, 'Password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // Set the error message for confirmPassword field
  });

export const bioDataSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' }) // for missing key
    .min(1, 'First name is required'), // for empty string

  lastName: z
    .string({ required_error: 'Last name is required' }) // for missing key
    .min(1, 'Last name is required'), // for empty string

  email: z.preprocess(
    (val) => {
      // If they typed an empty string, treat it as “no email provided”
      if (typeof val === 'string' && val.trim() === '') {
        return undefined;
      }
      return val;
    },
    // Now Zod knows: if there is a value, it must be a valid email string.
    z.string().email('Please enter a valid email').optional()
  ),
});

export const createNewEstateSchema = z.object({
  estateName: z
    .string({ required_error: 'Estate name is required' }) // for missing key
    .min(1, 'Estate name is required'), // for empty string
  description: z
    .string({ required_error: 'Description is required' }) // for missing key
    .min(1, 'Description is required'), // for empty string
  address: z
    .string({ required_error: 'Address is required' }) // for missing key
    .min(1, 'Address is required'), // for empty string
  city: z
    .string({ required_error: 'City is required' }) // for missing key
    .min(1, 'City is required'), // for empty string
  state: z
    .string({ required_error: 'State is required' }) // for missing key
    .min(1, 'State is required'), // for empty string
  image: z
    .string({ required_error: 'Cover image is required' })
    .min(1, 'Cover image is required'), // for missing key
  country: z
    .string({ required_error: 'Country is required' }) // for missing key
    .min(1, 'Country is required'), // for empty string
  postalCode: z.string().optional(),
});

export const estateCodeSchema = z.object({
  code: z
    .string({ required_error: 'Estate code is required' }) // for missing key
    .min(1, 'Estate code is required'), // for empty string
});

// extract the inferred type
export type signInSchemaType = z.infer<typeof signInSchema>;
export type bioDataSchemaType = z.infer<typeof bioDataSchema>;
export type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
export type estateCodeSchemaType = z.infer<typeof estateCodeSchema>;
export type createNewEstateSchemaType = z.infer<typeof createNewEstateSchema>;
