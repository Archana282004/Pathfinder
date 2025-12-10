"use client";

import { Button } from "@/src/components/ui/button";

interface CategoryTabProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryTab = ({ categories, selected, onSelect }: CategoryTabProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          variant={selected === category ? "default" : "outline"}
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTab;
