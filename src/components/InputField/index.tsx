import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import {
  field,
  fieldControl,
  fieldInput,
  fieldInputWithTrailing,
  fieldLabel,
  compactField,
  compactInput,
  compactLabel,
  requiredMark,
} from './InputField.css'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode
  trailingElement?: ReactNode
  footer?: ReactNode
  containerClassName?: string
  variant?: 'default' | 'compact'
}

export function InputField({
  id,
  label,
  required,
  trailingElement,
  footer,
  className,
  containerClassName,
  variant = 'default',
  ...inputProps
}: InputFieldProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const inputClassName = [
    fieldInput,
    variant === 'compact' ? compactInput : '',
    trailingElement ? fieldInputWithTrailing : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={[field, variant === 'compact' ? compactField : '', containerClassName ?? '']
        .filter(Boolean)
        .join(' ')}
    >
      <label
        className={[fieldLabel, variant === 'compact' ? compactLabel : ''].filter(Boolean).join(' ')}
        htmlFor={inputId}
      >
        {label} {required && <span className={requiredMark}>*</span>}
      </label>
      <div className={fieldControl}>
        <input
          {...inputProps}
          className={inputClassName}
          id={inputId}
          required={required}
        />
        {trailingElement}
      </div>
      {footer}
    </div>
  )
}
