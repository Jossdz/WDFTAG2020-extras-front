import React from "react"
import { Formik, Field, Form } from "formik"
import { TextInput } from "grommet"

const FormikForm = () => {
  function submitForm(x) {
    console.log(x)
  }

  return (
    <div>
      <h1>Formik</h1>

      <Formik
        onSubmit={submitForm}
        initialValues={{ title: "", description: "", phone: "" }}
      >
        <Form>
          <Field name='title' type='text'>
            {({ field }) => <TextInput {...field} required />}
          </Field>
          <Field name='description' type='text'>
            {({ field }) => <TextInput {...field} />}
          </Field>
          <Field name='phone' type='text'>
            {({ field }) => <TextInput {...field} />}
          </Field>
          <Field
            name='lastName'
            render={({ field, form: { touched, errors } }) => (
              <div>
                <input {...field} type='text' placeholder='lastName' />
                {touched[field.name] && errors[field.name] && (
                  <div className='error'>{errors[field.name]}</div>
                )}
              </div>
            )}
          />

          <button type='submit'>submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormikForm
