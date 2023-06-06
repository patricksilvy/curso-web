import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function ClientProCodigo() {
    const router = useRouter()

    return (
        <Layout>
            <span>Codigo = {router.query.codigo}</span>
        </Layout>
    )
}