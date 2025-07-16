const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Besufikad Lemma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
