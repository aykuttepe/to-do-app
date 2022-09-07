import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useToDo } from "../../../contexts/ToDoContext";

function NewToDoForm() {
  const { addToDo } = useToDo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        addToDo(values.text);
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default NewToDoForm;
