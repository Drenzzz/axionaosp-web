"use client";

export function Footer() {
  return (
    <footer className="w-full bg-black text-center py-5">
      <p className="text-neutral-400 text-sm">
        &copy; {new Date().getFullYear()} AxionOS. All Rights Reserved.
      </p>
    </footer>
  );
}
