interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({
    children
} : ContainerProps) => {
  return (
    <div className='Container'>
      {children}
    </div>
  )
}

export default Container
