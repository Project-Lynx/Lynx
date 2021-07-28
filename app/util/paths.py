import pathlib

#------------------------------------
# Paths                        
#------------------------------------
PATH = pathlib.Path(__file__).parent
DATA_PATH = PATH.joinpath("../data").resolve()
ASSETS_PATH = PATH.joinpath("../assets").resolve()
#------------------------------------

