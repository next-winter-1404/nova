interface ProductCardWrapperProps{
    children: React.ReactNode;
    mode: "row" | "col";
} 

const ProductCardWrapper = ({children} :ProductCardWrapperProps) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default ProductCardWrapper
