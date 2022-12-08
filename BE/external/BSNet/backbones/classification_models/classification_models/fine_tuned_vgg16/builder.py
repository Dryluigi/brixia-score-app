from tensorflow.keras.applications import VGG16
from tensorflow.keras.layers import Dense, Flatten, Dropout
from tensorflow.keras.models import Sequential

def build_vgg16():
    model = VGG16(
        include_top=False,
        input_shape=(512, 512, 1),
        input_tensor=None,
        weights=None
    )

    seq_model = Sequential()
    seq_model.add(model)
    seq_model.add(Flatten())
    seq_model.add(Dense(units=512, activation='relu'))
    seq_model.add(Dropout(0.5))
    seq_model.add(Dense(units=256, activation='relu'))
    seq_model.add(Dropout(0.5))
    seq_model.add(Dense(units=2, activation='softmax'))

    return seq_model