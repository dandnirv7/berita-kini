import * as React from "react";
import { Input } from "@nextui-org/react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState(
    searchParams.get("q") || ""
  );

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      navigate("/");
    } else {
      setSearchParams({ q: searchQuery });
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        classNames={{
          base: "flex items-end",
          mainWrapper: "h-full w-3/5 flex items-end",
          input: "text-small",
          inputWrapper:
            "h-full  font-normal text-default-500 bg-transparent border border-[#E0E0E0] dark:bg-default-500/20",
        }}
        placeholder="Cari disini..."
        radius="sm"
        size="lg"
        endContent={
          <button type="submit">
            <BsSearch
              size={18}
              className="flex-shrink-0 text-2xl pointer-events-none text-secondary-text"
            />
          </button>
        }
        type="text"
      />
    </form>
  );
};

export default SearchInput;
