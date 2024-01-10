import { useAtom } from "jotai";
import { servicedata } from "./../state/index";

const useServiceData = () => {
    const [serviceData, setServiceData] = useAtom(servicedata);

    const updateServiceData = (key: string, value: any) => {
        setServiceData((prev: any) => ({
            ...prev,
            [key]: value,
        }));
    };

    return {  
        serviceData,
        setServiceData,
        updateServiceData,
    };
};

export default useServiceData;
