import React, { useEffect, useState } from "react";
import { Configs } from "../../constants/Configs";
import ListProvider from "../../providers/ListProvider";

const HomeHOC = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {
        const { fetchList, loading, data } = ListProvider()
        const [currentCategory, setCurrentCategory] = useState(Configs.listFilter.upcoming)

        useEffect(() => {
            fetchList(currentCategory)
        }, [currentCategory])

        return <Com
            {...props}
            loading={loading}
            data={data}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
        />
    }
    return wrapper
}

export default HomeHOC
