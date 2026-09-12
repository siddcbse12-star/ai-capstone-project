# AI-Assisted Development Workflow



## Overview



This feature was built twice to compare a vague AI-assisted workflow with a more structured and precise workflow. The feature is a settings form containing display name, email, and theme fields with validation and accessible error feedback.



## Round 1: Vague Prompt



For Round 1, a single broad prompt was used with minimal instructions. The AI was allowed to decide the implementation structure and details. The resulting settings form was reviewed manually and tested in the browser. The implementation worked correctly for the tested scenarios, but the workflow provided less control over the generated structure and verification process.



The main advantage of this approach was speed and simplicity. However, more responsibility was placed on the developer to inspect the generated code and determine whether important cases had been handled correctly.



## Round 2: Precise Prompt



For Round 2, a more detailed prompt was used with explicit requirements, constraints, file structure, validation behavior, accessibility requirements, and verification expectations. The implementation was then reviewed and tested rather than being accepted without verification.



Round 2 also added automated tests using Vitest and React Testing Library. This made the implementation easier to verify and provided repeatable checks for important form behavior.



## Correctness and Verification



Manual testing covered empty submissions, invalid email addresses, short display names, valid submissions, and keyboard navigation. All manual tests passed. Automated tests were also included in Round 2.



No blocking AI-generated mistake was discovered during the review. Instead of assuming that generated code was correct, the workflow required testing the expected behavior before considering the feature complete.



## Accessibility and Edge Cases



The form uses labels connected to their inputs, `aria-invalid` for invalid fields, `aria-describedby` for validation messages, and appropriate `role` attributes for error and success messages. Keyboard navigation was also checked manually.



Important edge cases included empty required fields, invalid email addresses, display names shorter than the minimum length, and an unselected or invalid theme.



## Review Effort and Lessons



Round 1 required less upfront prompting but relied more heavily on manual review. Round 2 required more planning and specification before implementation, but produced a more structured and testable workflow.



The main lesson is that precise instructions, explicit constraints, and verification make AI-assisted development more reliable. AI-generated code should be treated as a starting point that must be reviewed and tested before being considered complete.



