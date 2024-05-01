import { FC } from 'react';
import { classNames } from '../../shared/lib/classNames';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(classes.pageContainer, {}, [className])}>
    <span className={classNames(classes.loader, {}, [])} />
  </div>
);

export default PageLoader;
