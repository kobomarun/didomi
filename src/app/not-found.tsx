import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="bg-accent-light-blue/10 p-6 rounded-full mb-6">
        <span className="material-symbols-outlined text-6xl text-primary">
          error
        </span>
      </div>
      <h2 className="text-4xl font-bold text-primary mb-4">Page Not Found</h2>
      <p className="text-lg text-slate-600 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
