# AI-Assisted React Application – Submission

## 1. Project Overview

This project is a React-based Settings Form application developed with AI as a development assistant. The application allows users to manage their profile and application preferences through a simple and accessible settings interface.

The form includes fields such as display name, email, bio, theme, language, and notification preferences. It provides validation, error messages, reset functionality, loading feedback, and save status messages.

The application was developed independently while using AI to assist with planning, implementation, debugging, code review, and improvements.

## 2. Technology Used

- React
- Vite
- JavaScript
- CSS
- React Hook Form
- Zod
- Git
- GitHub
- Cursor / AI development assistant

## 3. Prompts Used During Development

The following prompts were used to guide the AI development assistant during the implementation of the application.

### Prompt 1 – Project Planning

I am building a small React application as part of an AI-assisted development assignment. I want to create a Settings Form that allows users to update profile and application preferences. First, analyze the requirements and provide a simple implementation plan. Keep the project beginner-friendly, use clear file structure, and explain the steps before making major changes.

### Prompt 2 – React Implementation

Build a React Settings Form application using Vite and JavaScript. Create a form with fields for display name, email, bio, theme, language, and notification preferences. Keep the code modular and readable. Use clear variable names, small functions, and avoid unnecessary dependencies.

### Prompt 3 – Form Validation

Add form validation using React Hook Form and Zod. The display name should be required and contain between 2 and 50 characters. Email should be required and valid. Bio should be optional with a maximum of 280 characters. Theme should support light, dark, and system. Language should support English, Spanish, French, and German. Show validation errors clearly.

### Prompt 4 – Accessibility and UX

Review the Settings Form for accessibility and user experience. Add appropriate aria attributes for invalid fields and make validation errors accessible. Improve the form feedback so users can understand validation, loading, success, and error states. Also ensure that the Reset button is disabled when no changes have been made.

### Prompt 5 – Code Review and Debugging

Review the implementation before considering it complete. Check the code for correctness, edge cases, readability, maintainability, and unnecessary complexity. Keep validation logic separate from the main form component where appropriate. Identify any issues and suggest improvements, but do not modify unrelated files. Explain significant changes before applying them.

## 4. How AI Assisted During Development

AI was used as a development assistant throughout the project rather than as a replacement for the development process.

AI helped with:

- Planning the structure of the React application.
- Creating the initial React components and project structure.
- Implementing form fields and validation.
- Integrating React Hook Form and Zod.
- Suggesting accessible form practices such as `aria-invalid` and error messages.
- Identifying possible edge cases.
- Debugging implementation issues.
- Reviewing the code for readability and maintainability.
- Suggesting improvements to the user experience.
- Explaining errors and helping determine appropriate fixes.

The generated code was reviewed and tested manually before being accepted. I made changes whenever the AI-generated implementation did not fully match the project requirements or could be improved.

## 5. Manual Improvements, Corrections, and Refactoring

After reviewing the AI-generated implementation, I manually checked the code and made improvements to ensure that the application was reliable, accessible, and easy to maintain.

### 5.1 Form Validation

I reviewed the validation rules and ensured that:

- Display name must contain between 2 and 50 characters.
- Email is required and must have a valid format.
- Bio is optional but cannot exceed 280 characters.
- Theme selection supports Light, Dark, and System.
- Language selection supports English, Spanish, French, and German.

### 5.2 Accessibility Improvements

I reviewed the form for accessibility and improved the handling of validation errors.

For invalid fields, `aria-invalid` is used so that assistive technologies can identify fields containing errors. Error messages are also presented using appropriate alert behaviour.

### 5.3 Reset Button Behaviour

I improved the reset functionality so that the Reset button is disabled when the form has not been changed. This prevents unnecessary reset actions.

### 5.4 Save Feedback

I reviewed the save behaviour and added clear feedback for different states:

- Loading state while saving.
- Success message after a successful save.
- Error feedback when saving fails.

### 5.5 Code Structure

I reviewed the generated implementation and kept validation logic separate from the form component by using:

```text
client/src/validation/settingsSchema.js

## 6. Testing and Verification

The application was tested manually after implementation to verify that the expected behaviour works correctly.

The following cases were tested:

| Test Case | Expected Result |
|---|---|
| Valid display name | Accepted |
| Display name shorter than 2 characters | Validation error |
| Valid email | Accepted |
| Invalid email | Validation error |
| Empty required field | Validation error |
| Bio within 280 characters | Accepted |
| Bio exceeding 280 characters | Validation error |
| Theme selection | Works correctly |
| Language selection | Works correctly |
| Notification toggles | Work correctly |
| Reset without changes | Reset button remains disabled |
| Reset after changes | Form returns to previous/default values |
| Save action | Loading and success feedback displayed |
| Validation errors | Clearly displayed to the user |

The application was also run locally using Vite to verify that the React application builds and runs successfully.

## 7. Conclusion

This project demonstrated how AI can be used as a development assistant while keeping the developer responsible for the final implementation.

AI helped me with planning, implementation, validation, debugging, accessibility, and code review. I did not rely on AI-generated code without verification. I manually tested the application, reviewed the generated code, corrected issues, and made improvements to the final implementation.

This workflow helped me understand how to use AI effectively while still applying my own programming knowledge, testing, and decision-making.