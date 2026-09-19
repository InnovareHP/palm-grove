type EmailTextProps = {
  address: string;
};

export function EmailText({ address }: EmailTextProps) {
  const [user, domain] = address.split("@");

  if (!domain) {
    return <>{address}</>;
  }

  return (
    <>
      {user}@<wbr />
      {domain}
    </>
  );
}
