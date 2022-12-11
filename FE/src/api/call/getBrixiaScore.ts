import axios from "axios"
import { BRIXIA_SERVICE_URL } from "../../constants/env"
import { BaseSuccessResponse } from "../contracts/base";
import { GetBrixiaScoreResponse } from "../contracts/brixia";

export default (xRayImage: File) => {
    const formData = new FormData();
    formData.append('xray_image', xRayImage);

    return axios.post<BaseSuccessResponse<GetBrixiaScoreResponse>>(`${BRIXIA_SERVICE_URL}/v1/brixia-score/predict`, formData)
}