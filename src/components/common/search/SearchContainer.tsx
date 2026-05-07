import SearchWrapper from './SearchWrapper';
import ListingType from './ListingType';

const SearchContainer = () => {
  return (
    <div className='flex flex-col gap-4 w-[86%] h-30'>
      <ListingType />
      <SearchWrapper />
    </div>
  )
}

export default SearchContainer;
