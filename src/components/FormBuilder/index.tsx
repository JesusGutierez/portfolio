import React from 'react'
import PropTypes from 'prop-types'
import { Field as FieldModel } from '@/models/FIeld';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import styles from './index.module.scss'
import CustomButton from '../CustomButton';
import * as Yup from 'yup'

function FormBuilder(props: { fields: FieldModel[], submit: Function }) {
  const { initialValues, validationSchema } = props.fields.reduce(
    (acc, field) => {
      acc.initialValues[field.name] = '';
      if (field.isRequired) {
        acc.validationSchema[field.name] = Yup.string().required('Dato requerido!');
      }
      return acc;
    },
    { initialValues: {} as { [key: string]: string }, validationSchema: {} as Yup.ObjectShape }
  );

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={Yup.object().shape(validationSchema)}
      onSubmit={(
        values: { [key: string]: string },
        { setSubmitting }: FormikHelpers<{ [key: string]: string }>
      ) => {
        props.submit(values);
        setSubmitting(false)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='flex flex-col gap-[30px]'>
            {props.fields.map((field) => {
              return (
                <div key={field.name}>
                  <Field
                    className={`${styles.field}`}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    component={field.type}
                    rows={field.nroLines}
                  ></Field>
                  {errors[field.name] && touched[field.name] && (
                    <div className='text-red-500'>{errors[field.name]}</div>
                  )}
                </div>
              )
            })}

            <div>
              <CustomButton type='submit' text='Enviar'></CustomButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

FormBuilder.defaultProps = {
  submit: () => { }
}

FormBuilder.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.instanceOf(FieldModel)),
  submit: PropTypes.func.isRequired
}

export default FormBuilder
