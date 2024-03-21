
import { SignIn, currentUser } from "@clerk/nextjs";
import Link from 'next/link'
 

export default async function Page() {
  const user  = await currentUser();
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="flex justify-center">
          <SignIn />;
        </div>
      </div>
    </div>
  );
}
