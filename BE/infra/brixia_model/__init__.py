import os
from external.BSNet.model import BSNet

cur_dir = os.path.abspath(os.curdir)

bscore_model = BSNet(backbone_name='resnet18',
                     input_shape=(512, 512, 1),
                     input_tensor=None,
                     encoder_weights=None,
                     freeze_encoder=True,
                     skip_connections='default',
                     decoder_block_type='transpose',
                     decoder_filters=(256, 128, 64, 32, 16),
                     decoder_use_batchnorm=True,
                     n_upsample_blocks=5,
                     upsample_rates=(2, 2, 2, 2, 2),
                     classes=4,
                     activation='sigmoid',
                     load_seg_model=True,
                     seg_model_weights=f"{os.path.join(cur_dir, 'external', 'BSNet', 'weights', 'segmentation_weights.h5')}",
                     freeze_segmentation=True,
                     load_align_model=True,
                     align_model_weights=f"{os.path.join(cur_dir, 'external', 'BSNet', 'weights', 'alignment_weights.h5')}",
                     freeze_align_model=True,
                     pretrain_aligment_net=False,
                     explict_self_attention=True,
                     load_bscore_model=True,
                     bscore_model_weights=f"{os.path.join(cur_dir, 'external', 'BSNet', 'weights', 'classification_weights.h5')}"
                     )[2]
