const Footer = () => {
  return (
    <>
      <footer className="bg-transparent rounded-3xl shadow p-5 mt-10 dark:bg-gray-800">
        <div className="container mx-auto bg-white/[.08] text-white rounded-3xl border-[0.5px] px-10 py-3 text-center">
          <span className="dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              MXCode™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
