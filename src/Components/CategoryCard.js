import React from 'react';

class CategoryCard extends React.Component {
  render() {
    return (
      <div className="col card bg-primary text-white text-center font-weight-bold" style={{height: '5rem'}}>{this.props.category.title}</div>
    );
  }
}

export default CategoryCard;