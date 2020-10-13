import React from 'react';
import CategoryCard from '../Components/CategoryCard';

class Categories extends React.Component {
  mapCategories = () => {
    if (this.props.categories.length > 0) {
      return this.props.categories.map(category => {
        return <CategoryCard key={category.id} category={category} />
      })
    }
  }

  render() {
    return (
      <div className="row">
        {this.mapCategories()}
      </div>
    );
  }
}

export default Categories;