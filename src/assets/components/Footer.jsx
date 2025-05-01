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
                <a href="" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
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
