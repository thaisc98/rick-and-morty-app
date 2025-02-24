import { ChangeEventHandler } from "react";


type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}


const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <div>
    <input
      className={`search-box mt-6 px-4 py-2 leading-7 border-2 rounded-xl border-green-500/75 bg-zinc-900  text-white ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
