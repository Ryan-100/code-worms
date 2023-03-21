import React from "react";
import { InputText } from "@/components/LV2/Inputs";
import { useForm } from "react-hook-form";
import MovieFolder from "../Home/MovieFolder";

const Main = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <div className="md:hidden">
        <InputText
          control={control}
          placeholder="Search Movies and shows here!"
          name="search"
          border
          width="370"
        />
      </div>
      <MovieFolder />
      <MovieFolder />
      <MovieFolder />
      <MovieFolder />
    </div>
  );
};

export default Main;
