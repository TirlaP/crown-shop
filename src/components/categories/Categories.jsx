import CategoryItem from '../category-item/CategoryItem';

import "./categories.styles.scss";

const Categories = ({categories}) => {

  

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  )
}

export default Categories