const Hashtags = ({ children, classes }) => {
  return (
    <span className={`hashtag ${classes}`}>
      <span className='blue'>#</span>
      {children}
    </span>
  );
};

export default Hashtags;
