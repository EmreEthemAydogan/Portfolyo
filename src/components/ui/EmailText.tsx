/**
 * E-posta adresini gerekirse yalnızca "@" işaretinden satır atlayacak şekilde yazar.
 * Dar ekranlarda adresin kelime ortasından bölünmesini önler.
 */
export function EmailText({ email }: { email: string }) {
  const at = email.indexOf("@");
  if (at === -1) return <>{email}</>;

  return (
    <>
      {email.slice(0, at)}
      <wbr />
      {email.slice(at)}
    </>
  );
}
