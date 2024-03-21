
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full mx-auto">
      <div className="flex justify-center">
          <SignUp />;
      </div>
    </div>
  );
}
