import Layout from "@/components/Layout";

export function getStaticProps() {
    return {
        props: {
            num: Math.random()
        }
    }
}
export default function Estatico(props) {
    return (
        <Layout>
            <div>{props.num}</div>
        </Layout>
    )
}