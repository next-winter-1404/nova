import FavoritePage from "@/src/components/dashboard/favorite/favoritePage/favoritePage";


const SellerFavoritePage = async({ searchParams }: { searchParams: Promise<any> }) => {
  return(
  <FavoritePage searchParams={searchParams}/>

  )
}

export default SellerFavoritePage;
