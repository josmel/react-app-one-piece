import { ForwardedRef, forwardRef } from "react";

interface SearchInputProps {
  search: string;
  onChange: (value: string) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ search, onChange }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
);

export default SearchInput;
