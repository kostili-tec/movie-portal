import React, { FC } from 'react';
import { classNames } from '../../shared/lib/classNames';
import classes from './Pagination.module.scss';

interface PaginationProps {
  page: number;
  limit: number;
  count: number;
  indent: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { count, indent, limit, onClick, page } = props;
  // Количество страниц
  const length = Math.ceil(count / Math.max(limit, 1));
  // Номера слева и справа относительно активного номера, которые остаются видимыми
  let left = Math.max(page - indent, 1);
  const right = Math.min(left + indent * 2, length);
  // Корректировка когда страница в конце
  left = Math.max(right - indent * 2, 1);

  // Массив номеров
  const items = [];
  // Первая страница всегда нужна
  if (left > 1) items.push(1);
  // Пропуск
  if (left > 2) items.push(null);
  // Последовательность страниц
  for (let pageNumber = left; pageNumber <= right; pageNumber += 1) items.push(pageNumber);
  // Пропуск
  if (right < length - 1) items.push(null);
  // Последняя страница
  if (right < length) items.push(length);
  return (
    <ul className={classNames('', {}, [classes.ul])}>
      {items.map((number, index) => (
        <li
          key={number !== null ? number : `null-${index}`}
          className={classNames('', { [classes.pointer]: number !== null }, [classes.li])}
        >
          {number ? (
            <button
              type="button"
              className={classNames('', { [classes.active]: number === page }, [
                classes.button,
                classes.buttonUsable,
              ])}
              value={number}
              onClick={onClick}
            >
              {number}
            </button>
          ) : (
            <button type="button" className={classNames('', {}, [classes.button])}>
              ...
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
