import { SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';

interface SearchInputProps {}

export function SearchInput({}: SearchInputProps) {
  return (
    <div className="flex items-center">
      <SearchIcon className="w-5 h-5 text-gray-400 mr-2" />
      <Input
        type="text"
        placeholder="Search..."
        className="w-[200px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
