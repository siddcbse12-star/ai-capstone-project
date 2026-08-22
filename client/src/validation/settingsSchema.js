import { z } from "zod";

export const settingsSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, "Display name must be at least 2 characters")
    .max(50, "Display name must be at most 50 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  bio: z
    .string()
    .trim()
    .max(280, "Bio must be at most 280 characters")
    .optional()
    .or(z.literal("")),
  theme: z.enum(["light", "dark", "system"], {
    required_error: "Select a theme",
  }),
  language: z.enum(["en", "es", "fr", "de"], {
    required_error: "Select a language",
  }),
  emailNotifications: z.boolean(),
  pushNotifications: z.boolean(),
  aiSuggestions: z.boolean(),
});

export const defaultSettings = {
  displayName: "",
  email: "",
  bio: "",
  theme: "system",
  language: "en",
  emailNotifications: true,
  pushNotifications: false,
  aiSuggestions: true,
};
