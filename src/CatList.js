const CatList = (props) => {
  return (
    {props.cats.map(cat) => {
      return <li>cat.name</li>
    }}
  )
}

export default CatList