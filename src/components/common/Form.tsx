'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormProps } from '../../shared/types';

interface IForm {
  form: FormProps
  btnPosition: string
  className?: string
}

const Form = ({form, btnPosition, className}: IForm) => {

  const [inputValues, setInputValues] = useState([]);
  const [radioBtnValue, setRadioBtnValue] = useState('');
  const [textareaValues, setTextareaValues] = useState('');
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(form.checkboxes && form.checkboxes.length).fill(false));

  // Update the value of the entry fields
  const changeInputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Update checked radio buttons
  const changeRadioBtnsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtnValue(event.target.value);
  };

  // Update the textarea value
  const changeTextareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValues(event.target.value);
  };

  // Update checkbox radio buttons
  const changeCheckboxHandler = (index: number) => {
    setCheckedState((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.map(() => {
        newValues[index] = !checkedState[index];
      });
      return newValues;
    });
  };

  return (
    <form id="contactForm" className={twMerge('', className)}>
      {form.title && <h2 className={`${form.description ? 'mb-2' : 'mb-4'} text-2xl font-bold`}>{form.title}</h2>}
      {form.description && <p className="mb-4">{form.description}</p>}
      <div className="mb-6">
        {/* Inputs */}
        <div className="mx-0 mb-1 sm:mb-4">
          {form.inputs &&
            form.inputs.map(({ type, label, name, autocomplete, placeholder }, index) => (
              <div key={`item-input-${index}`} className="mx-0 mb-1 sm:mb-4">
                <label htmlFor={name} className="pb-1 text-xs uppercase tracking-wider">
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  autoComplete={autocomplete}
                  value={inputValues[index]}
                  onChange={changeInputValueHandler}
                  placeholder={placeholder}
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                />
              </div>
            ))}
        </div>
        {/* Radio buttons */}
        {form.radioBtns && (
          <div className="mx-0 mb-1 sm:mb-3">
            <span className="pb-1 text-xs uppercase tracking-wider">{form.radioBtns?.label}</span>
            <div className="flex flex-wrap">
              {form.radioBtns.radios.map(({ label }, index) => (
                <div key={`radio-btn-${index}`} className="mr-4 items-baseline">
                  <input
                    id={label}
                    type="radio"
                    name={label}
                    value={`value${index}`}
                    checked={radioBtnValue === `value${index}`}
                    onChange={changeRadioBtnsHandler}
                    className="cursor-pointer"
                  />
                  <label htmlFor={label} className="ml-2">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Textarea */}
        {form.textarea && (
          <div className={`mx-0 mb-1 sm:mb-4`}>
            <label htmlFor={form.textarea.name} className="pb-1 text-xs uppercase tracking-wider">
              {form.textarea.label}
            </label>
            <textarea
              id={form.textarea.name}
              name={form.textarea.name}
              cols={form.textarea.cols}
              rows={form.textarea.rows}
              value={textareaValues}
              onChange={(e) => changeTextareaHandler(e)}
              placeholder={form.textarea.placeholder}
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            />
          </div>
        )}
        {/* Checkboxes */}
        {form.checkboxes && (
          <div className="mx-0 mb-1 sm:mb-4">
            {form.checkboxes.map(({ label }, index) => (
              <div key={`checkbox-${index}`} className="mx-0 my-1 flex items-baseline">
                <input
                  id={label}
                  type="checkbox"
                  name={label}
                  checked={checkedState[index]}
                  onChange={() => changeCheckboxHandler(index)}
                  className="cursor-pointer"
                />
                <label htmlFor={label} className="ml-2">
                  {label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
        <div
          className={`${btnPosition === 'left' ? 'text-left' : btnPosition === 'right' ? 'text-right' : 'text-center'}`}
        >
          <button type='button' className="btn btn-primary sm:mb-0">
            Enviar
          </button>
        </div>
    </form>
  );
};

export default Form;
