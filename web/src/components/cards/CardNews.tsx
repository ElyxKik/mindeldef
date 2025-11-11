import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  href: string;
  date?: string;
  excerpt?: string;
  image?: string;
};

export default function CardNews({ title, href, date, excerpt, image }: Props) {
  return (
    <article className="group rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        {date && <time className="text-xs font-medium text-[var(--color-primary)]">{date}</time>}
        <h3 className="mt-2 text-lg font-semibold group-hover:text-[var(--color-primary)] transition-colors duration-300">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>
        {excerpt ? (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">{excerpt}</p>
        ) : null}
        <div className="mt-4 flex items-center">
          <Link 
            href={href} 
            className="text-sm font-medium text-[var(--color-primary)] inline-flex items-center group/link"
          >
            Lire plus
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
