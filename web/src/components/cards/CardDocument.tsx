import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  href: string;
  type?: string;
  service?: string;
  date?: string;
  icon?: ReactNode;
};

export default function CardDocument({ title, href, type, service, date, icon }: Props) {
  return (
    <article className="group rounded-lg border border-zinc-200 dark:border-zinc-800 p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-3">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="ml-2 text-xs text-zinc-500 flex flex-wrap gap-x-2">
          {type && <span className="font-medium text-[var(--color-primary)]">{type}</span>}
          {service && <span>· {service}</span>}
          {date && <time>· {date}</time>}
        </div>
      </div>
      <h3 className="text-lg font-semibold group-hover:text-[var(--color-primary)] transition-colors duration-300">
        <Link href={href} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mt-4 flex items-center justify-between">
        <Link 
          href={href} 
          className="text-sm font-medium text-[var(--color-primary)] inline-flex items-center group/link"
        >
          Consulter
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <div className="text-xs text-zinc-400 dark:text-zinc-500">
          PDF
        </div>
      </div>
    </article>
  );
}
