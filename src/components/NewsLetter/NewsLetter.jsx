import { useRef } from "react";
import { WithTransLate } from "../helpers/translating";
import { useForm } from "react-hook-form";
import useTranslateString from "../helpers/translating/useTranslateString";
import s from "./NewsLetter.module.scss";
import HiddenFormScript from "./HiddenFormScript";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function Newsletter() {
  const hiddenFormRef = useRef(null);
  const firstNamePlaceholder = useTranslateString("First name");
  const lastNamePlaceholder = useTranslateString("Last name");
  const emailPlaceholder = useTranslateString("Contact email");
  const firstNameRequiredMessage = useTranslateString("First name is required");
  const lastNameRequiredMessage = useTranslateString("Last name is required");
  const emailRequiredMessage = useTranslateString("Email is required");
  const emailInvalidMessage = useTranslateString("Enter a valid email");
  const firstNameTooShortMessage = useTranslateString(
    "First name: min 2 characters"
  );
  const lastNameTooShortMessage = useTranslateString(
    "Last name: min 2 characters"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (!hiddenFormRef.current) {
      console.error("Hidden form is not ready yet.");
      return;
    }

    await hiddenFormRef.current.submitWithData({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    // Reset form after submission - response will be shown in new tab
    reset();
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
              {...register("firstName", {
                required: firstNameRequiredMessage,
                validate: {
                  notBlank: (value) =>
                    value.trim() !== "" || firstNameRequiredMessage,
                  minLength: (value) =>
                    value.trim().length >= 2 || firstNameTooShortMessage,
                },
              })}
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
              {...register("lastName", {
                required: lastNameRequiredMessage,
                validate: {
                  notBlank: (value) =>
                    value.trim() !== "" || lastNameRequiredMessage,
                  minLength: (value) =>
                    value.trim().length >= 2 || lastNameTooShortMessage,
                },
              })}
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
            <button type="submit" disabled={isSubmitting} className={s.submit}>
              <WithTransLate text="Sign up" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Newsletter;
