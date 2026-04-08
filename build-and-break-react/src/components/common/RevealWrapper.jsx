import clsx from 'clsx';

const RevealWrapper = ({ children, delay = 0, className }) => {
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';
  
  return (
    <div className={clsx('reveal', delayClass, className)}>
      {children}
    </div>
  );
};

export default RevealWrapper;
