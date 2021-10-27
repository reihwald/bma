export interface SingleColorModel {
    SingleColorId: number
    rgb: string
    name: string
}

export interface ColorCombinationModel {
    colorCombinationId: number
    rgbFirst: string
    rgbSecond: string
    rgbThird: string | null
    rgbFourth: string | null
}

export interface OutfitModel {
    outfitId: number
    shirtPictureLink: string
    jacketPictureLink: string
    pantsPictureLink: string
    shoesPictureLink: string
}

export interface ColorSelectedAnswerModel {
    description: string
    combinations: ColorCombinationModel[]
}