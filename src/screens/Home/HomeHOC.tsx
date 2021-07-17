import React from "react";


const HomeHOC = (Com: React.ComponentType<any>) => {
    const wrapper = (props: any) => {

        return <Com
            {...props}
        />
    }
    return wrapper
}

export default HomeHOC
