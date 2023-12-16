const Helmet = (props) => {
  document.title = `D&W Mtumba Collection-${props.title}`
  return <div className='body__wrapper'>{props.children}</div>
}

export default Helmet
