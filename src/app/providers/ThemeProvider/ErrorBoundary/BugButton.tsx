import { useEffect, useState } from 'react';

const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button type="button" onClick={onThrow} className="submit">
      throw error
    </button>
  );
};

export default BugButton;
