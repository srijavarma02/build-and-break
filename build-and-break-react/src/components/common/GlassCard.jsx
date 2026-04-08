import clsx from 'clsx';
import './glass-card.css';

const GlassCard = ({ children, className, ...props }) => {
  return (
    <div className={clsx('glass-card', className)} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
