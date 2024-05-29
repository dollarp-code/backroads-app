const Tour = ({ img, date, title, info, icon, location, days, cost }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={icon}></i>
            </span>{' '}
            {location}
          </p>
          <p>{days}</p>
          <p>{cost}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
