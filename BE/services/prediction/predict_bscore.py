import cv2
import numpy as np
from PIL import Image
from tensorflow import keras

from infra.brixia_model import bscore_model


def _get_severity(score):
    global_score = 0

    global_score += score[0][0]
    global_score += score[0][1]
    global_score += score[1][0]
    global_score += score[1][1]
    global_score += score[2][0]
    global_score += score[2][1]

    severity = ''
    if global_score == 0:
        severity = 'Normal'
    elif 1 <= global_score <= 6:
        severity = 'Ringan'
    elif 7 <= global_score <= 12:
        severity = 'Normal'
    elif 13 <= global_score <= 18:
        severity = 'Berat'

    return severity


def _preprocess_input(original_image):
    img = cv2.cvtColor(original_image, cv2.COLOR_RGB2GRAY)
    img = img.astype(np.uint8)
    img = cv2.equalizeHist(img)
    img = img / 255
    img = cv2.resize(img, (512, 512))
    img = np.reshape(img, img.shape + (1,))

    return img


def predict_bscore(xray_image):
    original_image = Image.open(xray_image)
    original_image = original_image.convert('RGB')

    np_image = keras.preprocessing.image.img_to_array(original_image)

    original_image = _preprocess_input(np_image)

    prediction = bscore_model.predict(np.array([original_image]))[0]
    prediction = np.argmax(np.array(prediction), axis=-1)

    severity = _get_severity(prediction)

    return {
        "score": {
            "upper": {
                "left":  int(prediction[0][0]),
                "right": int(prediction[0][1])
            },
            "middle": {
                "left": int(prediction[1][0]),
                "right": int(prediction[1][1])
            },
            "lower": {
                "left": int(prediction[2][0]),
                "right": int(prediction[2][1])
            }
        },
        "severity": severity
    }
