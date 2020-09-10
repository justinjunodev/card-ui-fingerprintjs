/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import { useFormik } from "formik"
import { useOvermind } from "../../overmind"
import {
  CardDetailWrapper,
  CardDetailContent,
  CardDetailHeading,
  CardDetailForm,
  CardDetailFormLabel,
  CardDetailFormInput,
  CardDetailFormError,
  CardDetailFormButton,
} from "./styles"

const validate = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = "First name is required."
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required."
  }
  if (!values.cardNumber || values.cardNumber.toString().length !== 16) {
    errors.cardNumber = "Card number is required and must have 16 digits."
  }
  if (
    !values.expYear ||
    values.expYear.toString().length !== 4 ||
    values.expYear < 2020
  ) {
    errors.expYear =
      "Expiration year is required in four digit format and should be current."
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
      expYear: "",
    },
    validate,
    onSubmit: (values) => {
      addCardDetails(values)
      createCard()
    },
  })

  const { touched, errors } = formik

  if (state.cardCreated) {
    return <p>Purchased!</p>
  }

  return (
    <CardDetailWrapper>
      <CardDetailContent>
        <CardDetailHeading>Card Details</CardDetailHeading>
        <CardDetailForm onSubmit={formik.handleSubmit}>
          <CardDetailFormLabel htmlFor="firstName">
            First Name:
          </CardDetailFormLabel>
          <CardDetailFormInput
            type="text"
            id="firstName"
            {...formik.getFieldProps("firstName")}
          />
          {errors.firstName && touched.firstName ? (
            <CardDetailFormError>{errors.firstName}</CardDetailFormError>
          ) : null}

          <CardDetailFormLabel htmlFor="lastName">
            Last Name:
          </CardDetailFormLabel>
          <CardDetailFormInput
            type="text"
            id="lastName"
            {...formik.getFieldProps("lastName")}
          />
          {errors.lastName && touched.lastName ? (
            <CardDetailFormError>{errors.lastName}</CardDetailFormError>
          ) : null}

          <CardDetailFormLabel htmlFor="cardNumber">
            Credit Card Number:
          </CardDetailFormLabel>
          <CardDetailFormInput
            type="number"
            id="cardNumber"
            {...formik.getFieldProps("cardNumber")}
          />
          {errors.cardNumber && touched.cardNumber ? (
            <CardDetailFormError>{errors.cardNumber}</CardDetailFormError>
          ) : null}

          <CardDetailFormLabel htmlFor="expYear">
            Expiration Year:
          </CardDetailFormLabel>
          <CardDetailFormInput
            type="number"
            id="expYear"
            {...formik.getFieldProps("expYear")}
          />
          {errors.expYear && touched.expYear ? (
            <CardDetailFormError>{errors.expYear}</CardDetailFormError>
          ) : null}

          <CardDetailFormButton type="submit">Add Card</CardDetailFormButton>
        </CardDetailForm>
      </CardDetailContent>
    </CardDetailWrapper>
  )
}

export default Form
