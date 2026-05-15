import { Link } from "react-router-dom";

interface InternalLink {
  title: string;
  url: string;
  description?: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
  columns?: 2 | 3 | 4;
}

const InternalLinks = ({ links, title = "Links Relacionados", columns = 2 }: InternalLinksProps) => {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  return (
    <section className="bg-primary/5 rounded-lg p-6 my-8">
      <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">
        {title}
      </h3>
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.url}
            className="group p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-primary/20 hover:border-primary"
          >
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-1">
              {link.title}
            </h4>
            {link.description && (
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InternalLinks;
