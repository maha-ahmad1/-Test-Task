import { Link } from "components";

export const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center py-6 md:px-3 text-xs sm:px-12 sm:justify-center sm:text-sm ml-20 mr-10 ">
      <Link href="#">Talents Valley</Link>
      <Link href="#" className="px-3 sm:px-16">
        Contacts
      </Link>
      <Link href="#">Privacy & Terms</Link>
    </footer>
  );
};
