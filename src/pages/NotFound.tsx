import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-light text-white tracking-[-0.03em]">404</h1>
        <p className="mt-4 text-lg text-[#888888]">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 text-sm text-white hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
