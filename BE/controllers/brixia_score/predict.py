from flask import Blueprint, Response, request, json
from services.prediction import predict_bscore

brixia_prediction_api_v1 = Blueprint(
    "brixia_prediction_api",
    __name__,
    url_prefix="/v1/brixia-score"
)


@brixia_prediction_api_v1.route('/predict', methods=['POST'])
def predict():
    if 'xray_image' not in request.files:
        return Response(
            response=json.dumps({
                "success": False,
                "message": "Bad Request",
                "code": 400,
                "errors": [
                    {
                        "field": "xray_image",
                        "error": "Required"
                    }
                ]
            }),
            status=400,
            mimetype="application/json"
        )

    file = request.files['xray_image']

    response = predict_bscore.predict_bscore(file)

    return Response(
        response=response,
        status=200,
        mimetype="application/json"
    )
