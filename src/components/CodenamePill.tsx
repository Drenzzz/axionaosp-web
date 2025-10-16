export const CodenamePill = ({ codename }: { codename: string }) => (
  <div className="relative group/pill inline-block">
    <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-emerald-400/30 blur-sm opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 rounded-full"></div>
        <div className="relative bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/40 hover:border-green-400/60 text-green-300 hover:text-green-200 text-xs font-mono px-2.5 py-1 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400/20 whitespace-nowrap">
      {codename}
    </div>
  </div>
);
