import ClientForm from "../../ClientForm";
export default async function EditClientPage({ params }) {
  const { id } = await params;
  return <ClientForm clientId={id} />;
}
