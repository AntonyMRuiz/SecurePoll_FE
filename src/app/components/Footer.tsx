const Footer = () => {
    return (
      <footer className="bg-dark text-neutral py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Secure Poll - All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
export default Footer;