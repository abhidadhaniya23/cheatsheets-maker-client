const Footer = () => {
  return (
    <footer className="mt-auto pb-2 pt-10 text-sm text-blue-500 flex flex-col items-center md:flex-row md:justify-between">
      <span>
        Developed By{" "}
        <a
          className="underline focus-yellow mx-1"
          href="https://mdtarhini.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          MD. Tarhini
        </a>
        Maintaining by{" "}
        <a
          className="underline focus-yellow mx-1"
          href="https://abhidadhaniya.com?ref=cheatsheetmaker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abhi Dadhaniya
        </a>
      </span>
      <a
        href="https://github.com/abhidadhaniya23/cheat-sheets-maker-client"
        className="underline focus-yellow"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code hosted on Github
      </a>
    </footer>
  );
};
export default Footer;
