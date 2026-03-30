import ProjectForm from "../../ProjectForm";

export default async function EditProjectPage({ params }) {
  const { id } = await params;
  return <ProjectForm projectId={id} />;
}
