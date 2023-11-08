import axios from "axios";

export default async function CompleteTicket(maintenance_request_uid, setShowSpinner = () => {}){
    setShowSpinner(true);
    try {
        // const response = await fetch("https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/maintenanceRequests", {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "maintenance_request_uid": maintenance_request_uid,
        //         "maintenance_request_status": "COMPLETED"
        //     })
        // });
        // if (response.code === 200) {
        //     return true;
        // }
        const headers = { 
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials":"*"
        };

        const input = {
            maintenance_request_uid:maintenance_request_uid,
            maintenance_request_status:"COMPLETED"
        };

        console.log(input.maintenance_request_uid);
        console.log(input.maintenance_request_status);

        const response = await axios.put("https://l0h6a9zi1e.execute-api.us-west-1.amazonaws.com/dev/maintenanceRequests",
        input,
        headers);
        console.log("PUT result", response);
        if (response.code === 200) {
            return true;
        }
    } catch (error){
        console.log("error", error)
        return false;
    }
    setShowSpinner(false);
}