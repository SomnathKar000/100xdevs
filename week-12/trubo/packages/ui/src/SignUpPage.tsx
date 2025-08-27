export function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-col items-center gap-4 ui:border-2 ui:p-4 ui:rounded-md">
        <input type="text" placeholder="User name" className=" ui:border-2" />
        <input type="text" placeholder="Email" className=" ui:border-2 " />
        <input type="text" placeholder="Password" className=" ui:border-2 " />
      </div>
    </main>
  );
}
