import { useRef, useState } from "react";
import { WithTransLate } from "../helpers/translating";
import { useForm } from "react-hook-form";
import useTranslateString from "../helpers/translating/useTranslateString";
import s from "./Newsletter.module.scss";
import HiddenFormScript from "./HiddenFormScript";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function Newsletter() {
  const hiddenFormRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const firstNamePlaceholder = useTranslateString("First name");
  const lastNamePlaceholder = useTranslateString("Last name");
  const emailPlaceholder = useTranslateString("Contact email");
  const firstNameRequiredMessage = useTranslateString("First name is required");
  const lastNameRequiredMessage = useTranslateString("Last name is required");
  const emailRequiredMessage = useTranslateString("Email is required");
  const emailInvalidMessage = useTranslateString("Enter a valid email");
  const successMessage = useTranslateString("Thanks for signing up! Please, check your inbox soon.");
  const fallbackMessage = useTranslateString("We couldn't submit your signup. Please, try again later.");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (!hiddenFormRef.current) {
        throw new Error("Hidden form is not ready yet.");
      }

      setSubmitMessage("");
      setSubmitError("");

      const response = await hiddenFormRef.current.submitWithData({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      });

      reset();
      setSubmitMessage(successMessage);
    } catch (error) {
      // Surface the issue for debugging; consider surfacing a user-facing error.
      console.error("Failed to submit newsletter signup", error);
      setSubmitError(fallbackMessage);
    }
  };

  return (
    <>
      <HiddenFormScript ref={hiddenFormRef} />
      <form
        className={s.container}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className={s.title}>
          <WithTransLate text="Sign up to the BH newsletter to get our updates from Iceland" />
        </h2>

        <div className={s.inputWrapper}>
          <div className={s.field}>
            <label htmlFor="firstName" className="sr-only">
              First name
            </label>
            <input
              id="firstName"
              placeholder={firstNamePlaceholder}
              autoComplete="given-name"
              aria-invalid={!!errors.firstName || undefined}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
              {...register("firstName", { required: firstNameRequiredMessage })}
              className={
                errors.firstName ? `${s.input} ${s.inputError}` : s.input
              }
            />
            <p
              id="firstName-error"
              role={errors.firstName ? "alert" : undefined}
              className={errors.firstName ? s.errorMessage : s.errorSpace}
            >
               <HiOutlineExclamationCircle size={20}/> {errors.firstName ? errors.firstName.message : "\u00a0"}
            </p>
          </div>

          <div className={s.field}>
            <label htmlFor="lastName" className="sr-only">
              Last name
            </label>
            <input
              id="lastName"
              placeholder={lastNamePlaceholder}
              autoComplete="family-name"
              aria-invalid={!!errors.lastName || undefined}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              {...register("lastName", { required: lastNameRequiredMessage })}
              className={
                errors.lastName ? `${s.input} ${s.inputError}` : s.input
              }
            />
            <p
              id="lastName-error"
              role={errors.lastName ? "alert" : undefined}
              className={errors.lastName ? s.errorMessage : s.errorSpace}
            >
              <HiOutlineExclamationCircle size={20}/> {errors.lastName ? errors.lastName.message : "\u00a0"}
            </p>
          </div>

          <div className={s.field}>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder={emailPlaceholder}
              autoComplete="email"
              inputMode="email"
              aria-invalid={!!errors.email || undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: emailRequiredMessage,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: emailInvalidMessage,
                },
              })}
              className={errors.email ? `${s.input} ${s.inputError}` : s.input}
            />
            <p
              id="email-error"
              role={errors.email ? "alert" : undefined}
              className={errors.email ? s.errorMessage : s.errorSpace}
            >
              <HiOutlineExclamationCircle size={20} /> {errors.email ? errors.email.message : "\u00a0"}
            </p>
          </div>

          <div className={s.submitWrapper}>
            {!submitMessage ? (
              <>
            <button type="submit" disabled={isSubmitting} className={s.submit}>
              <WithTransLate text="Sign up" />
                </button>
            {submitError ? (
              <p className={`${s.feedback} ${s.feedbackError}`}>
                {submitError}
              </p>
            ) : null}
              </>
            ) : (
              <p className={s.feedback}>{submitMessage}</p>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default Newsletter;
