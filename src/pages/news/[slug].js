import Layout from "@/components/Layout";
import { Container } from "react-bootstrap";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Markdown from 'react-markdown'
import { fetcher } from "@/api/getAPI";

export default function NewsDetail() {

  const router = useRouter();

  const { locale } = router;

  const { data, error, isLoading } = useSWR(
    `http://localhost:1337/api/news/${router.query.slug}?populate=*&locale=${locale}`,
    fetcher
  );

  return (
    <Layout>
        <Container className='m-t-50'>
            <h1>{data?.data?.attributes?.title}</h1>
            <Markdown>
                {data?.data?.attributes?.content}
            </Markdown>
        </Container>
    </Layout>
  )
}