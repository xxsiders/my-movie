import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import MovieProvider from "../../providers/MovieProvider";

const DetailsHOC = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {

        const { params }: any = useRoute()

        const { fetchDetails, loading, data } = MovieProvider()

        useEffect(() => {
            if (params) {
                fetchDetails(params.item.id)
            }
        }, [])

        return <Com
            {...props}
            data={data}
            loading={loading}
            movie={params.item}
        />
    }
    return wrapper
}

export default DetailsHOC
