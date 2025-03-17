import { Form, FormField } from '@/features/FormManagement/api/models/FormApiModel';
import { FORM_FIELD_VALIDATION_ERRORS, FORM_VALIDATION_ERRORS } from '@/resources/constants/form';

export const isNameEmpty = (name: string): boolean => !name.trim();
export const isNameCapitalized = (name: string): boolean => /^[A-Z]/.test(name);
export const isNameValidFormat = (name: string, item: string): boolean => {
  if (item === 'form') {
    return /^[A-Za-z0-9\s]+$/.test(name);
  } else if (item === 'field') {
    return /^[A-Za-z0-9]+$/.test(name);
  }
  return false;
};

export const isFieldNameUnique = (name: string, fields: FormField[]): boolean =>
  !fields.some(field => field.name === name);

export const isFormNameUnique = (name: string, forms: Form[], currentFormId?: string): boolean =>
  !forms.some(form => form.name === name && form._id !== currentFormId);

// Validate a field name all rules
export const validateFieldName = (
  name: string,
  existingFields: FormField[] = []
): { isValid: boolean; error?: string } => {
  if (isNameEmpty(name)) {
    return { isValid: false, error: FORM_FIELD_VALIDATION_ERRORS.NAME_REQUIRED };
  }

  if (!isNameCapitalized(name)) {
    return { isValid: false, error: FORM_FIELD_VALIDATION_ERRORS.NAME_CAPITALIZATION };
  }

  if (!isNameValidFormat(name, 'field')) {
    return { isValid: false, error: FORM_FIELD_VALIDATION_ERRORS.NAME_FORMAT };
  }

  if (!isFieldNameUnique(name, existingFields)) {
    return { isValid: false, error: FORM_FIELD_VALIDATION_ERRORS.NAME_UNIQUE };
  }

  return { isValid: true };
};

// Validate a form name all rules
export const validateFormName = (
  name: string,
  existingForms: Form[] = [],
  currentFormId?: string
): { isValid: boolean; error?: string } => {
  if (isNameEmpty(name)) {
    return { isValid: false, error: FORM_VALIDATION_ERRORS.NAME_REQUIRED };
  }

  if (!isNameCapitalized(name)) {
    return { isValid: false, error: FORM_VALIDATION_ERRORS.NAME_CAPITALIZATION };
  }

  if (!isNameValidFormat(name, 'form')) {
    return { isValid: false, error: FORM_VALIDATION_ERRORS.NAME_FORMAT };
  }

  if (!isFormNameUnique(name, existingForms, currentFormId)) {
    return { isValid: false, error: FORM_VALIDATION_ERRORS.NAME_UNIQUE };
  }

  return { isValid: true };
};
