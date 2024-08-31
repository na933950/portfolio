import styles from "./ContactForm.module.css";

import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvwbpd");
  return (
    <div className={styles.container}>
      <h3>Contact Me!</h3>
      {state.succeeded ? (
        <h5>I got your message, thank you!</h5>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.name}>
            <input type="text" name="First Name" placeholder="First Name" required></input>
            <input type="text" name="Last Name" placeholder="Last Name" required></input>
        </div>
        <input type="email" name="email" placeholder="Email" required/>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea name="message" placeholder="Message" required/>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      )}
    </div>
  );
};

export default ContactForm;
