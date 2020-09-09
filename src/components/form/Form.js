/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import { useFormik } from "formik"
import { useOvermind } from "../../overmind"

const validate = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = "First name is required"
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required"
  }
  if (!values.cardNumber || values.cardNumber.toString().length !== 16) {
    errors.cardNumber = "Card number is required and must have 16 digits"
  }
  if (!values.expMonth || values.expMonth.toString().length !== 2) {
    errors.expMonth =
      "Expiration month is required and should be in two digit format"
  }
  if (!values.expYear || values.expYear.toString().length !== 2) {
    errors.expYear =
      "Expiration year is required and should be in two digit format"
  }
  return errors
}

const Form = () => {
  const {
    state,
    actions: { addCardDetails, createCard },
  } = useOvermind()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
    },
    validate,
    onSubmit: (values) => {
      addCardDetails(values)
      createCard()
    },
  })

  const { values, touched, errors } = formik

  if (state.cardCreated) {
    return <p>Purchased!</p>
  }

  return (
    <main className="App">
      <h2>Payment Details</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          {...formik.getFieldProps("firstName")}
        />
        {errors.firstName && touched.firstName ? (
          <span>{errors.firstName}</span>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {errors.lastName && touched.lastName ? (
          <span>{errors.lastName}</span>
        ) : null}

        <label htmlFor="cardNumber">Credit Card Number</label>
        <input
          type="number"
          id="cardNumber"
          {...formik.getFieldProps("cardNumber")}
        />
        {errors.cardNumber && touched.cardNumber ? (
          <span>{errors.cardNumber}</span>
        ) : null}

        <label htmlFor="expMonth">Expiration Month</label>
        <input
          type="number"
          id="expMonth"
          {...formik.getFieldProps("expMonth")}
        />
        {errors.expMonth && touched.expMonth ? (
          <span>{errors.expMonth}</span>
        ) : null}

        <label htmlFor="expYear">Expiration Year</label>
        <input
          type="number"
          id="expYear"
          {...formik.getFieldProps("expYear")}
        />
        {errors.expYear && touched.expYear ? (
          <span>{errors.expYear}</span>
        ) : null}

        <button type="submit">Pay</button>
      </form>

      <pre>
        <code>{JSON.stringify(values)}</code>
      </pre>
    </main>
  )
}

export default Form
