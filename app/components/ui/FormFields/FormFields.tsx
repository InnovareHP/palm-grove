import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import classes from "./FormFields.module.css";

/**
 * Form primitives shared by the referral and contact forms. Both forms used to
 * reach across folders for this stylesheet and hand-roll the same
 * label/input/required markup per field; the styling now travels with the
 * components that own it.
 */

type FieldGridProps = {
  /** Single-column layout, for the narrower contact form. */
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
  /** Spans both columns of the grid. */
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
  /** Taller variant, for the free-text "notes" field. */
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

/** Confirmation line shown after a submission hands off to the mail client. */
export function FormStatus({ children }: { children: ReactNode }) {
  // <output> carries an implicit role="status", so screen readers announce the
  // confirmation without an explicit ARIA role.
  return <output className={classes.status}>{children}</output>;
}
