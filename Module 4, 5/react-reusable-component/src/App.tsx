// import { ChangeEvent, useState } from "react";
// import Button from "./ui/Button";
// import Modal from "./ui/Modal";
// import NormalForm from "./components/NormalForm/NormalForm";
import Container from "./ui/Container";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

function App() {
  // const [modal, setModal] = useState(false);
  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };
  // const handleSubmit = (e: ChangeEvent) => {
  //   e.preventDefault();
  //   console.log('Clicked')
  //   if(true) {
  //     handleModalClose()
  //   }
  // }
  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  const submitForm = (data: FieldValues) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTest>();

  return (
    <Container>
      <Form onSubmit={handleSubmit(submitForm) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <Input
            type="email"
            register={register}
            level="email"
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
      {/* <NormalForm /> */}
      {/* <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>This is modal</h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
          <p>This is Modal</p>
        </Modal>
      </div> */}
    </Container>
  );
}

export default App;
