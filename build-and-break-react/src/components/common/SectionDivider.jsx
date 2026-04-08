const SectionDivider = () => {
  return (
    <div 
      style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--grad-start), var(--grad-end), transparent)',
        width: '80%',
        margin: '0 auto'
      }}
    />
  );
};

export default SectionDivider;
