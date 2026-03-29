import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-slate-900 text-center text-sm font-black text-white">A</div>
          <span className="text-lg font-bold tracking-tight">ArcFlow</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Plans</a>
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="hover:text-black">Blog</a>
        </div>

        <Button className="hidden md:inline-flex rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800" size="sm">
          Get Started Free
        </Button>
      </div>
    </nav>
  );
}
