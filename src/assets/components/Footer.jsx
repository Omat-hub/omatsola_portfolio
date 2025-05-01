const Footer = () => {
  return (
    <footer>
      <div className="flex items-start justify-between bg-gray-800 text-white text-sm  py-4 px-2">
        <p>© 2025 Omatsola Yarumen. All rights reserved.</p>

        <div className="footer-bottom flex flex-col space-y-2">
          <p>Designed and Developed by Omatsola Yarumen</p>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="https://www.linkedin.com/in/omatsolayarumen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Omat-hubs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/qr/4CBTXBLTT4APO1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
