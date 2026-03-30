import TestimonialForm from "../../TestimonialForm";
export default async function EditTestimonialPage({ params }) {
  const { id } = await params;
  return <TestimonialForm testimonialId={id} />;
}
