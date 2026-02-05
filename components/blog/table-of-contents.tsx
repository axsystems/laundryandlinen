"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (items.length === 0) return null;

  return (
    <nav className="card-elevated p-5 sticky top-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <List className="w-4 h-4 text-primary" />
          <span className="font-display font-semibold text-foreground text-sm">
            Table of Contents
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {isOpen && (
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                style={{ paddingLeft: item.level > 2 ? `${(item.level - 2) * 16}px` : undefined }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
