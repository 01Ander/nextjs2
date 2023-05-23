import Link from "next/link";

function Navigation() {
  const links: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];
  return (
    <nav className="m-4">
      <ul className="flex gap-4 border rounded-lg border-cyan-200 py-2 px-4">
        {links.map(({ label, href }) => (
          <li key={href} >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
