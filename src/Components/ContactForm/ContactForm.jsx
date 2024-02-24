import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

export const ContactForm = ({ onAddUser }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        onAddUser({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field name="number" id={numberId} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
