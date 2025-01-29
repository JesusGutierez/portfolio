import React from 'react'
import PropTypes from 'prop-types'
import { Field as FieldModel } from '@/models/FIeld';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import styles from './index.module.scss'
import CustomButton from '../CustomButton';
import * as Yup from 'yup'
function ContactForm(props: { fields: FieldModel[] }) {
  const getInitialValues = () => {
    let initialObject: { [key: string]: string } = {};
    props.fields.forEach(field => {
      initialObject[field.name.toString()] = '';
    })
    return initialObject
  }

  const getYuoSchema = () => {
    let yupShape: Yup.ObjectShape = {};
    props.fields.forEach((field) => {
      if (field.isRequired === true) yupShape[field.name] = Yup.string().required('Dato requerido!');
    })
    return Yup.object().shape(yupShape)
  }

  return (
    <Formik
      initialValues={getInitialValues()}
      validationSchema={getYuoSchema()}
      onSubmit={(
        values: { [key: string]: string },
        { setSubmitting }: FormikHelpers<{ [key: string]: string }>
      ) => {
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='flex flex-col gap-[30px]'>
            {props.fields.map((field) => {
              return (
                <div key={field.name}>
                  <Field className={styles.field} id={field.name} name={field.name} placeholder={field.placeholder} type={field.type}></Field>
                  {errors[field.name] && touched[field.name] ? (
                    <div className='text-red-500'>{errors[field.name]}</div>
                  ) : null}
                </div>
              )
            })}

            <div>
              <CustomButton text='Enviar'></CustomButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

ContactForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.instanceOf(FieldModel))
}

export default ContactForm
