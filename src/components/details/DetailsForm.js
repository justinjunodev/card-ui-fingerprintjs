/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import Slide from "react-reveal/Slide"
import { useFormik } from "formik"
import { useOvermind } from "../../overmind"
import {
  DetailsWrapper,
  DetailsContent,
  DetailsHeading,
  DetailsCardForm,
  DetailsCardFormLabel,
  DetailsCardFormInput,
  DetailsCardFormError,
  DetailsCardFormButton,
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

const DetailsCard = () => {
  const {
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

  return (
    <DetailsWrapper>
      <Slide bottom>
        <DetailsContent>
          <DetailsHeading>Card Details</DetailsHeading>
          <DetailsCardForm onSubmit={formik.handleSubmit}>
            <DetailsCardFormLabel htmlFor="firstName">
              First Name:
            </DetailsCardFormLabel>
            <DetailsCardFormInput
              type="text"
              id="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {errors.firstName && touched.firstName ? (
              <DetailsCardFormError>{errors.firstName}</DetailsCardFormError>
            ) : null}

            <DetailsCardFormLabel htmlFor="lastName">
              Last Name:
            </DetailsCardFormLabel>
            <DetailsCardFormInput
              type="text"
              id="lastName"
              {...formik.getFieldProps("lastName")}
            />
            {errors.lastName && touched.lastName ? (
              <DetailsCardFormError>{errors.lastName}</DetailsCardFormError>
            ) : null}

            <DetailsCardFormLabel htmlFor="cardNumber">
              Credit Card Number:
            </DetailsCardFormLabel>
            <DetailsCardFormInput
              type="number"
              id="cardNumber"
              {...formik.getFieldProps("cardNumber")}
            />
            {errors.cardNumber && touched.cardNumber ? (
              <DetailsCardFormError>{errors.cardNumber}</DetailsCardFormError>
            ) : null}

            <DetailsCardFormLabel htmlFor="expYear">
              Expiration Year:
            </DetailsCardFormLabel>
            <DetailsCardFormInput
              type="number"
              id="expYear"
              {...formik.getFieldProps("expYear")}
            />
            {errors.expYear && touched.expYear ? (
              <DetailsCardFormError>{errors.expYear}</DetailsCardFormError>
            ) : null}

            <DetailsCardFormButton type="submit">
              Add Card
            </DetailsCardFormButton>
          </DetailsCardForm>
        </DetailsContent>
      </Slide>
    </DetailsWrapper>
  )
}

export default DetailsCard
