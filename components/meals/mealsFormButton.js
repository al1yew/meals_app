"use client";
import { useFormStatus } from "react-dom";

const MealsFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};
export default MealsFormButton;
