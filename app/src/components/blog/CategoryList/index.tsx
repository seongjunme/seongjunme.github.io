import React from 'react';
import { Wrapper } from './style';
import CategoryItem from './CategoryItem';
import { CategoryListType } from 'types/category.type';

interface Props extends CategoryListType {
  seletedCategory: string;
}

const CategoryList: React.FC<Props> = ({ seletedCategory, categoryList }) => {
  return (
    <Wrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem to={`/blog?category=${name}`} activate={name === seletedCategory} key={name}>
          #{name}({count})
        </CategoryItem>
      ))}
    </Wrapper>
  );
};

export default CategoryList;
