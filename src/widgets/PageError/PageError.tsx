import classes from './PageError.module.scss';

const PageError = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className={classes.error}>
      <div className={classes.errorItems}>
        <h2>Unexpected error</h2>
        <button type="button" onClick={reloadPage}>
          Reload page
        </button>
      </div>
    </div>
  );
};

export default PageError;
