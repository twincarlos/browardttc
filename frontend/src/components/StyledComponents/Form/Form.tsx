import './Form.css';

interface FormField {
  label: string;
  type: string;
  name: string;
  value: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: { label: string; value: string }[];
  checked?: boolean;
  legend?: string;
  min?: number;
  max?: number;
  fields?: FormField[];
}

function FormField({ field }: { field: FormField }) {
  switch (field.type) {
    case 'select':
      return (
        <select
          name={field.name}
          value={field.value}
          required={field.required}
          disabled={field.disabled}
        >
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    case 'checkbox':
      return (
        <input
          type="checkbox"
          name={field.name}
          value={field.value}
          checked={field.checked}
          required={field.required}
          disabled={field.disabled}
        />
      );
    case 'fieldset':
      return (
        <fieldset>
          <legend>{field.legend}</legend>
          {field.fields?.map((field) => (
            <FormField key={field.name} field={field} />
          ))}
        </fieldset>
      );
    case 'radio':
      return (
        <input
          type="radio"
          name={field.name}
          value={field.value}
          checked={field.checked}
          required={field.required}
          disabled={field.disabled}
        />
      );
    case 'number':
      return (
        <input
          type="number"
          name={field.name}
          value={field.value}
          required={field.required}
          disabled={field.disabled}
          min={field.min}
          max={field.max}
        />
      );
    default:
      return (
        <input
          type={field.type}
          name={field.name}
          value={field.value}
          required={field.required}
          disabled={field.disabled}
          placeholder={field.placeholder}
        />
      );
  }
}

export default function Form({ formFields, onSubmit, onChange }: { formFields: FormField[], onSubmit: () => void, onChange: () => void }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {formFields.map((field) => (
        <div key={field.name} className="form-field">
          <label htmlFor={field.name}>{field.label}</label>
          <FormField field={field} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
