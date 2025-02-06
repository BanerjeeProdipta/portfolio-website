const FooterSection = () => {
  return (
    <footer className="row-start-3 mt-6 flex gap-6 flex-wrap items-center justify-center p-4 bg-bgDark text-white">
      <p>All rights reserved © {new Date().getFullYear()}</p>
      <a
        href="https://www.linkedin.com/in/asm-ashique/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primaryCyan transition"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/RahmanAshique"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primaryCyan transition"
      >
        GitHub
      </a>
      <a
        href="mailto:asm.rahman.ashique@gmail.com"
        className="hover:text-primaryCyan transition"
      >
        Email
      </a>
    </footer>
  );
};

export default FooterSection;
