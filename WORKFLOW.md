# AI Workflow Comparison

## Overview

This exercise compared two AI-assisted development workflows by building the same Settings form twice. The first version was created using a single vague prompt, while the second version used a detailed prompt with project requirements, constraints, accessibility expectations, and a verification step.

## Round One

The vague prompt produced a basic settings form with minimal styling and limited functionality. It lacked proper validation, accessibility improvements, and detailed user feedback. The generated code required significant manual review before it could be considered usable.

## Round Two

The detailed prompt produced a much more complete implementation. The generated form included required field validation, email format validation, inline error messages, responsive styling, semantic HTML, labels for every input, and improved JavaScript organization. The AI also included a self-review and suggested test cases, making verification much easier.

## Specific Differences

Using `git diff` showed several concrete improvements between the two branches. The CSS was reorganized into clearly labeled sections, making it easier to maintain. The user interface became cleaner and more responsive. Validation logic was expanded to prevent invalid submissions and provide immediate feedback. Accessibility features such as proper labels and validation attributes were added. Overall code organization and readability also improved.

## Review Effort

Although writing the detailed prompt required more time initially, the overall development process was faster because fewer manual corrections were needed. The vague version required additional review to identify missing requirements, while the precise version already addressed most project expectations.

## AI Mistake Caught

During testing, I found that the initial implementation needed adjustment to fully verify user input and ensure all validation rules worked correctly. This was corrected during manual review before finalizing the feature.

## Conclusion

This exercise demonstrated that precise prompts with clear requirements, constraints, and verification instructions produce higher-quality AI-generated code. Spending more time on the prompt reduced debugging, improved accessibility, and lowered the overall review effort.
