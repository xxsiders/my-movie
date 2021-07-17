import React, { useEffect } from "react";

const DetailsHOC = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {

        useEffect(() => {
        }, [])

        return <Com
            {...props}
        />
    }
    return wrapper
}

export default DetailsHOC
