import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import classes from "./FormFields.module.css";


type FieldGridProps = {
  single?: boolean;
  children: ReactNode;
};

export function FieldGrid({ single = false, children }: FieldGridProps) {
  return (
    <div className={`${classes.fields} ${single ? classes.single : ""}`}>
      {children}
    </div>
  );
}

type FieldShellProps = {
  id: string;
  label: string;
  required?: boolean;
  full?: boolean;
  children: ReactNode;
};

function FieldShell({ id, label, required, full, children }: FieldShellProps) {
  return (
    <div className={`${classes.field} ${full ? classes.full : ""}`}>
      <label className={classes.label} htmlFor={id}>
        {label} {required ? <span className={classes.required}>*</span> : null}
      </label>
      {children}
    </div>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  full?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ id, label, full, ...input }: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} required={input.required} full={full}>
      <input id={id} className={classes.input} {...input} />
    </FieldShell>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  full?: boolean;
  tall?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({
  id,
  label,
  full = true,
  tall = false,
  ...textarea
}: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} required={textarea.required} full={full}>
      <textarea
        id={id}
        className={`${classes.textarea} ${tall ? classes.textareaTall : ""}`}
        {...textarea}
      />
    </FieldShell>
  );
}

type SelectFieldProps = {
  id: string;
  label: string;
  full?: boolean;
  options: readonly string[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({
  id,
  label,
  full,
  options,
  ...select
}: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} required={select.required} full={full}>
      <select id={id} className={classes.select} {...select}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </FieldShell>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <button type="submit" className={classes.submit}>
      {children}
    </button>
  );
}

export function FormDisclaimer({ children }: { children: ReactNode }) {
  return <p className={classes.disclaimer}>{children}</p>;
}

export function FormStatus({ children }: { children: ReactNode }) {
  return <output className={classes.status}>{children}</output>;
}
