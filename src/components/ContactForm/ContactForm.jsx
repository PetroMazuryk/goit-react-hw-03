import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.number().positive('!!! > 0 !!!').required('Required'),
});

const initialValues = {
  username: '',
  number: '',
};

export const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={ContactSchema} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.labelWrapper}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.labelWrapper}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field className={css.field} type="number" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
