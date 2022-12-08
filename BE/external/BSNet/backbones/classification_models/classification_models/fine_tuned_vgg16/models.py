from .builder import build_vgg16

def FineTunedVGG16(input_shape, input_tensor=None, weights=None, classes=1000, include_top=True):
    model = build_vgg16()
    model._name = 'fine_tuned_vgg_16'

    return model.layers[0]