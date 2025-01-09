import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import {
  WithTransLate,
  translateMyText,
} from "../../helpers/translating/index";
import TextField from "../../Shared/TextField/TextField";
import { fields } from "../../Shared/TextField/fields";
import Button from "../../Shared/Button/Button";
import { countries } from "./countries";

import s from "./UserPaymentDetails.module.scss";

const UserPaymentDetails = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailaddress: "",
      phoneNumber: "",
      address: "",
      city: "",
      postCode: "",
      password: "",
      country: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className={s.container}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className={s.partUser}>
        <div className={s.partWrapper}>
          <h3 className={s.titlePart}>
            <WithTransLate text="Enter Your Details" />
          </h3>

          <div className={s.nameFieldsWrapper}>
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: <WithTransLate text="First name is required" />,
                minLength: {
                  value: 2,
                  message: (
                    <WithTransLate text="First name must have at least 2 characters" />
                  ),
                },
                maxLength: {
                  value: 20,
                  message: (
                    <WithTransLate text="First name must have no more than 20 characters" />
                  ),
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  autoComplete="off"
                  {...fields.firstName}
                />
              )}
            />

            <Controller
              control={control}
              name="lastName"
              rules={{
                required: <WithTransLate text="Last name is required" />,
                minLength: {
                  value: 2,
                  message: (
                    <WithTransLate text="Last name must have at least 2 characters" />
                  ),
                },
                maxLength: {
                  value: 20,
                  message: (
                    <WithTransLate text="Last name must have no more than 20 characters" />
                  ),
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  autoComplete="off"
                  {...fields.lastName}
                />
              )}
            />
          </div>

          <Controller
            control={control}
            name="emailAddress"
            rules={{
              required: <WithTransLate text="Email address is required" />,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: <WithTransLate text="Invalid email address" />,
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <div>
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  autoComplete="off"
                  {...fields.emailAddress}
                />
                {!fieldState.error ? (
                  <p
                    style={{
                      marginTop: "-10px",
                      marginBottom: "-20px",
                      color: "gray",
                    }}
                  >
                    <WithTransLate text="The confirmation email goes to this address" />
                  </p>
                ) : null}
              </div>
            )}
          />

          <Controller
            control={control}
            name="phoneNumber"
            rules={{
              required: <WithTransLate text="Phone number is required" />,
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: <WithTransLate text="Invalid phone number format" />,
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                value={value}
                handleChange={onChange}
                error={fieldState.error}
                autoComplete="off"
                {...fields.phoneNumber}
              />
            )}
          />

          <Controller
            control={control}
            name="address"
            rules={{
              required: <WithTransLate text="Address is required" />,
              minLength: {
                value: 2,
                message: (
                  <WithTransLate text="Address must have at least 2 characters" />
                ),
              },
              maxLength: {
                value: 40,
                message: (
                  <WithTransLate text="Address must have no more than 40 characters" />
                ),
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                value={value}
                handleChange={onChange}
                error={fieldState.error}
                autoComplete="off"
                {...fields.address}
              />
            )}
          />

          <Controller
            control={control}
            name="city"
            rules={{
              required: <WithTransLate text="City is required" />,
              minLength: {
                value: 2,
                message: (
                  <WithTransLate text="City must have at least 2 characters" />
                ),
              },
              maxLength: {
                value: 40,
                message: (
                  <WithTransLate text="City must have no more than 40 characters" />
                ),
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                value={value}
                handleChange={onChange}
                error={fieldState.error}
                autoComplete="off"
                {...fields.city}
              />
            )}
          />

          <Controller
            control={control}
            name="postCode"
            rules={{
              required: <WithTransLate text="Post code is required" />,
              pattern: {
                value: /^[A-Z0-9\s-]{4,10}$/i,
                message: <WithTransLate text="Invalid post code format" />,
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                value={value}
                handleChange={onChange}
                error={fieldState.error}
                autoComplete="off"
                {...fields.postCode}
              />
            )}
          />

          <Controller
            control={control}
            name="country"
            rules={{
              required: "Country is required",
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <div style={{ position: "relative" }}>
                <Select
                  className={s.select}
                  options={countries}
                  onChange={(selectedOption) => onChange(selectedOption?.value)}
                  value={countries.find((country) => country.value === value)}
                  placeholder={<WithTransLate text="Select a country" />}
                  isSearchable
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: state.isFocused
                        ? fieldState.error
                          ? "red"
                          : "white"
                        : "white",
                      boxShadow: "none",
                      border: "1px solid white",
                      backgroundColor: "white",
                      height: "48px",
                      paddingLeft: "0px",
                      fontSize: "18px",
                      fontWeight: "400",
                      letterSpacing: "1px",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        borderColor: state.isFocused ? "white" : "white",
                      },
                    }),
                    input: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      marginTop: "0",
                      border: "1px solid white",
                      backgroundColor: "white",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused ? "lightgray" : "white",
                      color: "black",
                    }),
                  }}
                />
                {fieldState.error && (
                  <p className={s.error}>
                    <WithTransLate text={`*${fieldState.error.message}`} />
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className={s.requestPart}>
          <Controller
            control={control}
            name="additionalRequests"
            rules={{
              maxLength: {
                value: 500,
                message: "Maximum 500 characters allowed",
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <div className={s.textAreaPart}>
                <label htmlFor="additionalRequests" className={s.label}>
                  <WithTransLate text="Special Reguests" />
                </label>
                <p className={s.textAreaDescription}>
                  <WithTransLate text="Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!" />
                </p>
                <p className={s.textAreaWarning}>
                  <WithTransLate text="Please write your request in English." />
                </p>
                <div className={s.textAreaWrapper}>
                  <textarea
                    id="additionalRequests"
                    value={value}
                    onChange={onChange}
                    rows="5"
                    className={s.textarea}
                    style={{
                      borderColor: fieldState.error ? "white" : "white",
                    }}
                  />
                  {fieldState.error && (
                    <p className={s.errorTextArea}>
                      <WithTransLate text={`*${fieldState.error.message}`} />
                    </p>
                  )}
                </div>
              </div>
            )}
          />
        </div>

        <div className={s.wrapper}>
          <Button text="Proceed to payment" btnClass="btnDark" />
        </div>
      </div>
      <div className={s.partBooking}></div>
    </form>
  );
};

export default UserPaymentDetails;
