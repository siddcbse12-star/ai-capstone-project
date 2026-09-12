import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import SettingsForm from './SettingsForm.jsx';

describe('SettingsForm', () => {
  it('shows validation errors on empty submission', async () => {
    const user = userEvent.setup();
    render(<SettingsForm />);

    await user.click(screen.getByRole('button', { name: /^save$/i }));

    expect(await screen.findByText('Display name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Please select a theme')).toBeInTheDocument();
  });

  it('shows an error for an invalid email', async () => {
    const user = userEvent.setup();
    render(<SettingsForm />);

    await user.type(screen.getByLabelText(/display name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/^email$/i), 'hello');
    await user.tab();
    await user.click(screen.getByRole('button', { name: /^save$/i }));

    expect(await screen.findByText('Enter a valid email address')).toBeInTheDocument();
  });

  it('shows a success message after valid submission', async () => {
    const user = userEvent.setup();
    render(<SettingsForm />);

    await user.type(screen.getByLabelText(/display name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/^email$/i), 'jane@example.com');
    await user.selectOptions(screen.getByLabelText(/^theme$/i), 'dark');
    await user.click(screen.getByRole('button', { name: /^save$/i }));

    await waitFor(
      () => {
        expect(screen.getByRole('status')).toHaveTextContent('Settings saved successfully');
      },
      { timeout: 2000 },
    );
  });

  it('clears validation errors and restores initial values on reset', async () => {
    const user = userEvent.setup();
    render(<SettingsForm />);

    await user.type(screen.getByLabelText(/display name/i), 'Jane Doe');
    await user.click(screen.getByRole('button', { name: /^save$/i }));

    expect(await screen.findByText('Email is required')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^reset$/i }));

    expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Display name is required')).not.toBeInTheDocument();
    expect(screen.getByLabelText(/display name/i)).toHaveValue('');
    expect(screen.getByLabelText(/^email$/i)).toHaveValue('');
    expect(screen.getByLabelText(/^theme$/i)).toHaveValue('');
  });
});
