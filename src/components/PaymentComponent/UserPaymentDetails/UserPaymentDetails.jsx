import React from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { WithTransLate } from "../../helpers/translating/index";
import { setPaymentStage } from "../../../redux/technitial/technical-slice";
import { fields } from "../../Shared/TextField/fields";
import { countries } from "./countries";
import { arrivalTimes } from "./arrivalTimes";
import BookingDetailsPart2 from "../BookingDetailsPart2/BookingDetailsPart2";
import TextField from "../../Shared/TextField/TextField";
import Button from "../../Shared/Button/Button";

import s from "./UserPaymentDetails.module.scss";

const UserPaymentDetails = () => {
  const dispatch = useDispatch();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
      city: "",
      postCode: "",
      country: "",
      additionalRequests: "",
      arrivalTime: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(setPaymentStage(3));
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
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must have at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "First name must have no more than 20 characters",
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
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must have at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Last name must have no more than 20 characters",
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
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
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
              required: "Phone number is required",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Invalid phone number format",
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
              required: "Address is required",
              minLength: {
                value: 2,
                message: "Address must have at least 2 characters",
              },
              maxLength: {
                value: 40,
                message: "Address must have no more than 40 characters",
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
              required: "City is required",
              minLength: {
                value: 2,
                message: "City must have at least 2 characters",
              },
              maxLength: {
                value: 40,
                message: "City must have no more than 40 characters",
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
              required: "Post code is required",
              pattern: {
                value: /^[A-Z0-9\s-]{4,10}$/i,
                message: "Invalid post code format",
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
                  onChange={(selectedOption) => onChange(selectedOption?.label)}
                  value={countries.find((country) => country.label === value)}
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
                <p className={s.textDescription}>
                  <WithTransLate text="Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!" />
                </p>
                <p className={s.textWarning}>
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
      </div>
      <div className={s.partBooking}>
        <BookingDetailsPart2 />

        <div className={s.requestPart}>
          <Controller
            control={control}
            name="arrivalTime"
            rules={{
              required: "Time is required",
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <div className={s.textSelectPart}>
                <h3 className={s.titlePart}>
                  <WithTransLate text="Your Arrival Time" />
                </h3>
                <p className={s.textDescription}>
                  <WithTransLate text="Your room will be ready for check-in at 16:00" />
                </p>
                <p className={s.textWarning}>
                  <WithTransLate text="Add your estimated arrival time*" />
                </p>
                <div className={s.textSelectWrapper}>
                  <Select
                    className={s.select}
                    options={arrivalTimes}
                    onChange={(selectedOption) =>
                      onChange(selectedOption?.value)
                    }
                    value={
                      arrivalTimes.find((time) => time.value === value) || null
                    }
                    placeholder={<WithTransLate text="Select a time" />}
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
                        backgroundColor: state.isFocused
                          ? "lightgray"
                          : "white",
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
              </div>
            )}
          />
        </div>
        <div className={s.wrapper}>
          <Button text="Proceed to payment" btnClass="btnDark" />
        </div>
      </div>
    </form>
  );
};

export default UserPaymentDetails;
