import React, { MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";
import { HiHome, HiPhone, HiMail } from "react-icons/hi";

interface Props {
  text: string;
}

const AnyReactComponent = ({ text }: Props) => <div>{text}</div>;

const Contact = () => {
  // @ts-ignore
  const form = React.useRef<HTMLFormElement>("");
  const userName = React.useRef() as MutableRefObject<HTMLInputElement>;
  const message = React.useRef() as MutableRefObject<HTMLTextAreaElement>;
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [validateName, setValidateName] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const sendEmail = (e: any) => {
    e.preventDefault();
    const name = userName?.current.value;
    if (name.length < 5) {
      setValidateName("Name must be more than 5 characters");
      return;
    } else {
      setValidateName("");
    }
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_c3usqp5",
        "template_7af5ie9",
        form?.current,
        "RK6z4LNTb1MLYa2Ep"
      )
      .then(
        (result) => {
          setSuccess("Thank you to your contact");
          setIsLoading(false);
          setTimeout(() => {
            setSuccess("");
          }, 5000);
        },
        (error) => {
          setError("Oops!! Something went wrong");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="contact__section">
      <div className="grid wide">
        <div className="row">
          <div className="section__title">
            <p>Contact</p>
          </div>
          <div className="col c-6 m-12 t-12 contact__left">
            <div className="contact__lists">
              <div className="contact__item">
                <div className="icon__wrapper">
                  <HiHome size={25} color="#ffff" />
                </div>
                <p>Go Vap Ward, HCM City</p>
              </div>
              <div className="contact__item">
                <div className="icon__wrapper">
                  <HiPhone size={25} color="#ffff" />
                </div>
                <a href="tel:0905763257">0905763257</a>
              </div>
              <div className="contact__item">
                <div className="icon__wrapper">
                  <HiMail size={25} color="#ffff" />
                </div>

                <a href="mailto:ngocdieu20121997@gmail.com">
                  ngocdieu20121997@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col c-6 m-12 t-12 contact__right">
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="form__input">
                <label>Name</label>
                <input ref={userName} type="text" name="user_name" />
                {validateName && (
                  <div className="error_message">{validateName}</div>
                )}
              </div>
              <div className="form__input">
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
              <div className="form__input">
                <label>Message</label>
                <textarea ref={message} name="message" />
              </div>
              <button
                className={`primary__button ${
                  !isLoading ? "" : "block_submit"
                } py-10`}
                type="submit"
              >
                <span>Send</span>
                <AiOutlineSend />
              </button>
            </form>
            {success && <div className="contact_success">{success}</div>}
          </div>

          <div className="google__wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6514414265894!2d106.6664855907268!3d10.837963861763079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529abcfd012d3%3A0x8b7cd7b29784eb3f!2zTE9UVEUgTWFydCBHw7IgVuG6pXA!5e0!3m2!1svi!2s!4v1690123489249!5m2!1svi!2s"
              width="100%"
              height="100%"
              // style="border:0;"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
