import style from "./style.module.scss";

const NewsCard = ({ image, title, created_at }) => {
  return <div className={style.newsLayout}>
            <div>
              <div>{created_at}</div>
              <h5 className="m-t-16 m-b-12">{title}</h5>
            </div>
            <div className={style.imageLayout}>
              <picture>
                  <img
                      alt='image'
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
                      className={style.image}
                  />
              </picture>
            </div>
  </div>;
};

export default NewsCard;
