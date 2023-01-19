import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export default function CategoryCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const submit = () => {
    let statusCode;
    fetch("https://demo-api-one.vercel.app/api/category", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, description }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        if (statusCode === 200) {
          toast.succedd("amjilttai nemegdlee");
        } else {
          if (statusCode === 403 || statusCode === 401) {
            Navigate("/signout");
          }
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3" controlId="form.name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name of the post..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
