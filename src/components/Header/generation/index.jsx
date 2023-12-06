import Gen1 from "./Gen 1";
import Gen2 from "./Gen 2";
import Gen3 from "./Gen 3";
import Gen4 from "./Gen 4"

const Generation = ({title}) => {
    return (
    <>
        <h2>{title}</h2>
        <Gen1 title="Gen1 by Eager"/>
        <Gen2 title="Gen2 by Eager"/>
        <Gen3 title="Gen3 by Eager"/>
        <Gen4 title="Gen4 by Eager"/>
    </>
    );
    
};

export default Generation