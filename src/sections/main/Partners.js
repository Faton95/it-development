import { Container } from "react-bootstrap";
import useSWR from "swr";
import { fetcher } from "@/api/getAPI";

const Partners = ({ title }) => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:1337/api/partners?populate=*",
    fetcher
  );
  return (
    <Container>
      <div className='h-2 text-center m-t-160 m-b-40'>{title}</div>
      <div className='d-flex gap-5 overflow-auto'>
        {data?.data?.map((item, index) => (
          <picture key={index}>
            <img
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                item.attributes.partner?.data[0]?.attributes.url
              }
              alt='partner'
              height={86}
              width='auto'
            />
          </picture>
        ))}
      </div>
    </Container>
  );
};
export default Partners;
