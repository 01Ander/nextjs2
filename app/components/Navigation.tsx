import Link from "next/link";

function Navigation() {
  const links: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];
  return (
    <nav className="m-4">
      <ul className="flex justify-around">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
