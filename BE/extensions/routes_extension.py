from controllers.brixia_score.predict import brixia_prediction_api_v1

def register_routes(app):
    app.register_blueprint(brixia_prediction_api_v1)

    print("Routes registered.")