export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t py-4">
      <div className="container text-center text-sm text-muted-foreground">
        © {currentYear} DevHub. All rights reserved.
      </div>
    </footer>
  );
}
