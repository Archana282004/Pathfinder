"use client"
import { Button } from "./button";
import { Spinner } from "./spinner";

interface LoadMoreProps {
  isLoading?: boolean;
  onLoadMore: () => void;
  label?: string;
  className?: string;
}

export default function LoadMore({ isLoading, onLoadMore, label = "Load more", className }: LoadMoreProps) {

    
  return (
    <div className={"flex justify-center pt-2" + (className ? ` ${className}` : "") }>
      <Button
        variant="outline"
        onClick={onLoadMore}
        disabled={!!isLoading}
        className="hover:bg-transparent hover:text-inherit"
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <Spinner className="size-4" /> Loading...
          </span>
        ) : (
          label
        )}
      </Button>
    </div>
  )
}