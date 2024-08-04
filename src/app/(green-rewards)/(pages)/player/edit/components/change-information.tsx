import { PatchInput } from "./patch-input";

export function ChangeInformation() {
  return (
    <div className="mx-auto flex max-w-screen-sm flex-col gap-4 rounded-xl bg-content2 p-5">
      <PatchInput patchKey="document" label="Alterar CPF" />
      <PatchInput patchKey="username" label="Alterar Nome de usuário" />
      <PatchInput patchKey="email" label="Alterar Email" />
      <PatchInput patchKey="phone" label="Alterar Telefone" />
    </div>
  );
}
