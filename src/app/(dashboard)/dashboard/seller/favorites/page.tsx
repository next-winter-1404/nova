import FadeIn from "@/src/components/animations/FadeIn";
import FavoritePage from "@/src/components/dashboard/favorite/favoritePage/favoritePage";


const SellerFavoritePage = async({ searchParams }: { searchParams: Promise<any> }) => {
  return(
  <FadeIn><FavoritePage searchParams={searchParams}/></FadeIn>

  )
}

export default SellerFavoritePage;
