// src/pages/ErrorPage.tsx
import { useRouteError, isRouteErrorResponse } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  let message = "Something went wrong.";
  if (isRouteErrorResponse(error)) {
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="mb-4 text-3xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="mb-6 text-gray-700">{message}</p>
      <button
        className="rounded-lg bg-[#13476D] px-6 py-2 text-white shadow-md hover:bg-[#0f3652]"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
}
