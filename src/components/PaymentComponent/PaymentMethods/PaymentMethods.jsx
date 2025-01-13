import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import TextField from "../../Shared/TextField/TextField";
import Button from "../../Shared/Button/Button";
import { WithTransLate } from "../../helpers/translating";
import { setBookingConfirmed } from "../../../redux/technitial/technical-slice";
import card from "../../../images/payment/credit-card.svg";
import paypal from "../../../images/payment/paypal.svg";
import bank from "../../../images/payment/landmark.svg";
import s from "./PaymentMethods.module.scss";

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      nameOnCard: "",
      emailAddress: "",
      accountName: "",
      iban: "",
      swift: "",
      paymentReference: "",
      dateils: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
    reset();
    setSelectedMethod(null);
    dispatch(setBookingConfirmed(true));
  };

  const renderFields = (method) => {
    switch (method) {
      case "Credit / Debit Card*":
        return (
          <div className={s.cardFields}>
            <Controller
              control={control}
              name="cardNumber"
              rules={{
                required: "Card number is required",
                pattern: {
                  value: /^\d{4} \d{4} \d{4} \d{4}$/,
                  message: "Invalid card number",
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  formatCardNumber={true}
                  placeholder="Card number"
                />
              )}
            />
            <div className={s.cardFieldsWrapper}>
              <Controller
                control={control}
                name="expiryDate"
                rules={{
                  required: "Expiry date is required",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: "Invalid expiry date (MM/YY)",
                  },
                }}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    value={value}
                    handleChange={onChange}
                    error={fieldState.error}
                    formatExpiryDate={true}
                    placeholder="Expiry date (MM/YY)"
                  />
                )}
              />
              <Controller
                control={control}
                name="cvc"
                rules={{
                  required: "CVC/CVV is required",
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                    message: "Invalid CVC/CVV",
                  },
                }}
                render={({ field: { onChange, value }, fieldState }) => (
                  <TextField
                    value={value}
                    handleChange={onChange}
                    error={fieldState.error}
                    placeholder="CVC / CVV"
                  />
                )}
              />
            </div>
            <Controller
              control={control}
              name="nameOnCard"
              rules={{ required: "Name on the card is required" }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  placeholder="Name on the card"
                />
              )}
            />
          </div>
        );
      case "PayPal Express*":
        return (
          <Controller
            control={control}
            name="emailAddress"
            rules={{
              required: "Email address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field: { onChange, value }, fieldState }) => (
              <TextField
                value={value}
                handleChange={onChange}
                error={fieldState.error}
                placeholder="Email Address"
              />
            )}
          />
        );
      case "Bank Transfer*":
        return (
          <div className={s.cardFields}>
            <Controller
              control={control}
              name="accountName"
              rules={{ required: "Account name is required" }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  placeholder="Account Name"
                />
              )}
            />
            <Controller
              control={control}
              name="iban"
              rules={{
                required: "IBAN is required",
                pattern: {
                  value:
                    /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}([A-Z0-9]?){0,16}$/,
                  message: "Invalid IBAN",
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  placeholder="IBAN"
                />
              )}
            />
            <Controller
              control={control}
              name="swift"
              rules={{
                required: "SWIFT/BIC is required",
                pattern: {
                  value: /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
                  message: "Invalid SWIFT/BIC",
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  placeholder="SWIFT/BIC"
                />
              )}
            />
            <Controller
              control={control}
              name="paymentReference"
              rules={{ required: "Payment reference is required" }}
              render={({ field: { onChange, value }, fieldState }) => (
                <TextField
                  value={value}
                  handleChange={onChange}
                  error={fieldState.error}
                  placeholder="Payment Reference"
                />
              )}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={s.container}>
      <div className={s.partMethods}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          {["Credit / Debit Card*", "PayPal Express*", "Bank Transfer*"].map(
            (method) => (
              <div key={method} className={s.methodContainer}>
                <button
                  type="button"
                  style={{
                    marginBottom: selectedMethod === method ? "30px" : "0px",
                  }}
                  className={`${s.methodButton} ${
                    selectedMethod === method ? s.active : ""
                  }`}
                  onClick={() =>
                    setSelectedMethod((prev) =>
                      prev === method ? null : method
                    )
                  }
                >
                  <div className={s.methodSelection}>
                    <div
                      className={s.selectionCenter}
                      style={{
                        backgroundColor:
                          selectedMethod === method ? "#073762" : "white",
                      }}
                    ></div>
                  </div>
                  <div className={s.methodTitle}>
                    <WithTransLate text={method} />
                  </div>
                  <img
                    src={
                      method === "Credit / Debit Card*"
                        ? card
                        : method === "PayPal Express*"
                        ? paypal
                        : bank
                    }
                    alt={method}
                    width={28}
                    height={28}
                  />
                </button>
                {selectedMethod === method && renderFields(method)}
              </div>
            )
          )}

          <div className={s.dateilsPart}>
            <Controller
              control={control}
              name="dateils"
              rules={{
                maxLength: {
                  value: 300,
                  message: "Maximum 300 characters allowed",
                },
              }}
              render={({ field: { onChange, value }, fieldState }) => (
                <div className={s.textAreaPart}>
                  <label htmlFor="dateils" className={s.label}>
                    <WithTransLate text="You can provide a comment for the payment." />
                  </label>
                  <div className={s.textAreaWrapper}>
                    <textarea
                      id="details"
                      value={value}
                      onChange={onChange}
                      rows="3"
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

          <p className={s.termsWrapper}>
            <span className={s.textTerms} style={{ marginRight: "5px" }}>
              <WithTransLate text="Your booking is with Blue House B&B directly and by completing this booking you agree to the" />
            </span>
            <button
              className={s.btn}
              style={{ marginRight: "5px" }}
              onClick={() => history.push("/privacy-and-policy")}
            >
              <WithTransLate text="general terms" />
            </button>
            <span className={s.textTerms} style={{ marginRight: "5px" }}>
              <WithTransLate text="and" />
            </span>
            <button
              className={s.btn}
              onClick={() => history.push("/privacy-and-policy")}
            >
              <WithTransLate text="Privacy Policy." />
            </button>
          </p>

          <div className={s.buttonWrapper}>
            <Button text="Proceed to Payment" btnClass="btnDark" />
          </div>
        </form>
      </div>

      <div className={s.partPrint}>
        <h3 className={s.titlePart}>
          <WithTransLate text="The fine print" />
        </h3>
        <div className={s.textWrapper}>
          <p className={s.text}>
            <WithTransLate text="Please note that there is self-service check-in at this property. Details are posted on site." />
          </p>
          <p className={s.text}>
            <WithTransLate text="This property operates a strict no-smoking policy and if violated a fine of EUR 650 will apply." />
          </p>
          <p className={s.text}>
            <WithTransLate text="Please note that rooms in the blue-coloured house cannot be guaranteed. Rooms are allocated over 3 possible houses, all within 200 metres of each other. You will receive further information about which house your room is in after booking." />
          </p>
          <p className={s.text}>
            <WithTransLate text="Guests are required to show a photo identification and credit card upon check-in." />
          </p>
          <p className={s.text}>
            <WithTransLate text="Please note that all Special Requests are subject to availability and additional charges may apply." />
          </p>
          <p className={s.text}>
            <WithTransLate text="Please inform Blue House B&B in advance of your expected arrival time. You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation." />
          </p>
          <p className={s.text}>
            <WithTransLate text="This property will not accommodate hen, stag or similar parties." />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
