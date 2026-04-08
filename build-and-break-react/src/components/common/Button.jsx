import clsx from 'clsx';
import './button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className,
  ...props 
}) => {
  const classes = clsx(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-outline': variant === 'outline',
    },
    className
  );

  const handleClick = (e) => {
    // Ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.25);
      width: 10px;
      height: 10px;
      left: ${e.clientX - rect.left - 5}px;
      top: ${e.clientY - rect.top - 5}px;
      transform: scale(0);
      animation: ripple 0.5s ease-out forwards;
      pointer-events: none;
    `;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (onClick) onClick(e);
  };

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
