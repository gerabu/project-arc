export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-bold text-slate-900">ArcFlow</h4>
          <p className="mt-3 text-sm text-slate-500">The all-in-one project management platform built for architecture firms. From concept to completion.</p>
        </div>

        <div>
          <h4 className="text-md font-semibold text-slate-900">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900">Home</a></li>
            <li><a href="#" className="hover:text-slate-900">Plans</a></li>
            <li><a href="#" className="hover:text-slate-900">About Us</a></li>
            <li><a href="#" className="hover:text-slate-900">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold text-slate-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-900">Terms of Service</a></li>
            <li><a href="#" className="hover:text-slate-900">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-xs text-slate-400">&copy; 2026 ArcFlow. All rights reserved.</div>
    </footer>
  );
}
