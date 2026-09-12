import { z } from 'zod';

export const defaultValues = {
  displayName: '',
  email: '',
  theme: '',
};

export const settingsSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(1, 'Display name is required')
    .min(2, 'Display name must be at least 2 characters')
    .max(50, 'Display name must be at most 50 characters'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Enter a valid email address'),
  theme: z.string().refine((value) => ['light', 'dark', 'system'].includes(value), {
    message: 'Please select a theme',
  }),
});
