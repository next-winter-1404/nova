import FavoritePage from '@/src/components/dashboard/favorite/favoritePage/favoritePage'

const AdminFavoritesPage = async({ searchParams }: { searchParams: Promise<any> }) => {
  return (
    <FavoritePage searchParams={searchParams}/>
  )
}

export default AdminFavoritesPage
