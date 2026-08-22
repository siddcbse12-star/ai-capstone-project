import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  settingsSchema,
  defaultSettings,
} from "../validation/settingsSchema";
import "./SettingsForm.css";

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="field-error" role="alert">
      {message}
    </p>
  );
}

export default function SettingsForm({ initialValues = defaultSettings, onSave }) {
  const [savedMessage, setSavedMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialValues,
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setSavedMessage("");
    try {
      if (onSave) {
        await onSave(data);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      reset(data);
      setSavedMessage("Settings saved successfully.");
    } catch {
      setSavedMessage("Could not save settings. Please try again.");
    }
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <header className="settings-form__header">
        <h1>Settings</h1>
        <p>Manage your profile and application preferences.</p>
      </header>

      <section className="settings-form__section">
        <h2>Profile</h2>

        <div className="form-field">
          <label htmlFor="displayName">Display name</label>
          <input
            id="displayName"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.displayName)}
            {...register("displayName")}
          />
          <FieldError message={errors.displayName?.message} />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div className="form-field">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            rows={4}
            placeholder="Tell us a little about yourself (optional)"
            aria-invalid={Boolean(errors.bio)}
            {...register("bio")}
          />
          <FieldError message={errors.bio?.message} />
        </div>
      </section>

      <section className="settings-form__section">
        <h2>Preferences</h2>

        <div className="form-field">
          <label htmlFor="theme">Theme</label>
          <select
            id="theme"
            aria-invalid={Boolean(errors.theme)}
            {...register("theme")}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
          <FieldError message={errors.theme?.message} />
        </div>

        <div className="form-field">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            aria-invalid={Boolean(errors.language)}
            {...register("language")}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
          <FieldError message={errors.language?.message} />
        </div>
      </section>

      <section className="settings-form__section">
        <h2>Notifications</h2>

        <label className="checkbox-field">
          <input type="checkbox" {...register("emailNotifications")} />
          <span>Email notifications</span>
        </label>

        <label className="checkbox-field">
          <input type="checkbox" {...register("pushNotifications")} />
          <span>Push notifications</span>
        </label>

        <label className="checkbox-field">
          <input type="checkbox" {...register("aiSuggestions")} />
          <span>AI suggestions</span>
        </label>
      </section>

      <footer className="settings-form__footer">
        {savedMessage && (
          <p
            className={`form-message ${savedMessage.includes("success") ? "form-message--success" : "form-message--error"}`}
            role="status"
          >
            {savedMessage}
          </p>
        )}

        <div className="settings-form__actions">
          <button
            type="button"
            className="btn btn--secondary"
            disabled={!isDirty || isSubmitting}
            onClick={() => {
              reset(initialValues);
              setSavedMessage("");
            }}
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn btn--primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save settings"}
          </button>
        </div>
      </footer>
    </form>
  );
}
