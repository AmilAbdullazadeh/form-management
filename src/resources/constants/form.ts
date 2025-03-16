import { FormModalMode, FormValues, FieldFormValues } from '@/features/FormManagement/api/models/FormManagementModel';

export const FORM_VALIDATION_ERRORS = {
  NAME_REQUIRED: 'Form name is required',
  NAME_UNIQUE: 'Form name must be unique',
  NAME_FORMAT: 'Form name must contain only English letters and numbers',
  NAME_CAPITALIZATION: 'Form name must start with an uppercase letter',
  SUBMIT_ERROR: (isUpdateMode: boolean) => isUpdateMode ? 'Failed to update form. Please try again.' : 'Failed to create form. Please try again.'
};

export const FORM_MODAL_TEXT = {
  [FormModalMode.CREATE]: {
    TITLE: 'Create form',
    SUBMIT_BUTTON: 'Create'
  },
  [FormModalMode.UPDATE]: {
    TITLE: 'Update form',
    SUBMIT_BUTTON: 'Save changes'
  },
  [FormModalMode.VIEW]: {
    TITLE: 'Form details',
    SUBMIT_BUTTON: 'Close'
  },
  [FormModalMode.DELETE]: {
    TITLE: 'Delete form',
    SUBMIT_BUTTON: 'Delete'
  }
};

export const FIELD_TYPE_OPTIONS = [
  { value: 'text', label: 'Text Input' },
  { value: 'number', label: 'Number' },
  { value: 'email', label: 'Email' },
  { value: 'date', label: 'Date' },
  { value: 'checkbox', label: 'Checkbox' },
  { value: 'select', label: 'Select' }
];

export const FORM_DEFAULT_VALUES: FormValues = {
  name: '',
  isVisible: true,
  isReadOnly: false
};

export const DEFAULT_FIELD_VALUES: FieldFormValues = {
  name: '',
  type: 'text',
  isRequired: false
};

export const FORM_SUBMIT_ERRORS = {
  CREATE_FAILED: 'Failed to create form. Please try again.',
  UPDATE_FAILED: 'Failed to update form. Please try again.',
};

export const FORM_EMPTY_STATES = {
  NO_FORMS_FOUND: 'No forms found. Click "Create Form" to add one.',
  NO_FIELDS_FOUND: 'This form doesn\'t have any fields yet.',
  NO_FIELDS_ADDED: 'No fields added yet. Click "Add Field" to add form fields.'
}; 

export const FORM_PROPERTIES = {
  NAME: 'name',
  IS_VISIBLE: 'isVisible',
  IS_READ_ONLY: 'isReadOnly'
};

export const FORM_FIELD_VALIDATION_ERRORS = {
  LABEL_REQUIRED: 'Field label is required',
  OPTIONS_REQUIRED: 'Options are required for dropdown and radio fields',
  NAME_REQUIRED: 'Field name is required',
  NAME_FORMAT: 'Field name must contain only English letters and numbers (no spaces)',
  NAME_UNIQUE: 'Field name must be unique',
  NAME_CAPITALIZATION: 'Field name must start with an uppercase letter'
};

export const FORM_BUTTON_TEXT = {
  CREATE_FORM: 'Create form'
};

export const FORM_CONFIRMATION_MESSAGES = {
  DELETE_CONFIRMATION: 'Are you sure you want to delete this form?'
}; 