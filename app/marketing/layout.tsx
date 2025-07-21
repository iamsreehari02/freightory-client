export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen bg-white text-black">{children}</main>;
}
