import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultValues, settingsSchema } from '../validation/settingsSchema.js';
import './SettingsForm.css';

const SUBMIT_DELAY_MS = 500;

function FieldError({ id, message }) {
  return (
    <p id={id} className="field-error" role="alert">
      {message}
    </p>
  );
}

export default function SettingsForm() {
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields, isSubmitted },
  } = useForm({
    defaultValues,
    resolver: zodResolver(settingsSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const showError = (fieldName) =>
    Boolean(errors[fieldName] && (touchedFields[fieldName] || isSubmitted));

  const onSubmit = async () => {
    setSuccessMessage('');
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY_MS));
    setSuccessMessage('Settings saved successfully');
  };

  const onReset = () => {
    reset(defaultValues);
    setSuccessMessage('');
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field">
        <label htmlFor="displayName">Display Name</label>
        <input
          id="displayName"
          type="text"
          autoComplete="name"
          aria-invalid={showError('displayName')}
          aria-describedby={showError('displayName') ? 'displayName-error' : undefined}
          {...register('displayName')}
        />
        {showError('displayName') && (
          <FieldError id="displayName-error" message={errors.displayName.message} />
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={showError('email')}
          aria-describedby={showError('email') ? 'email-error' : undefined}
          {...register('email')}
        />
        {showError('email') && (
          <FieldError id="email-error" message={errors.email.message} />
        )}
      </div>

      <div className="field">
        <label htmlFor="theme">Theme</label>
        <select
          id="theme"
          aria-invalid={showError('theme')}
          aria-describedby={showError('theme') ? 'theme-error' : undefined}
          {...register('theme')}
        >
          <option value="">Select a theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
        {showError('theme') && (
          <FieldError id="theme-error" message={errors.theme.message} />
        )}
      </div>

      <div className="actions">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save'}
        </button>
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>

      {successMessage && (
        <p className="success-message" role="status">
          {successMessage}
        </p>
      )}
    </form>
  );
}
