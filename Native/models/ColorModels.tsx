export interface SingleColorModel {
    IDFarbe: number
    RGB: string
    Name: string
    Beschreibung: string
}

export interface ColorCombinationModel {
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