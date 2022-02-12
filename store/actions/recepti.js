export const PROMJENA_FAVORITA = "PROMJENA_FAVORITA"
export const PROMJENA_KOSARICA = "PROMJENA_KOSARICA"
export const PROMJENAUkloni_KOSARICA = "PROMJENAUkloni_KOSARICA"
export const POSTAVI_CIJENU_KOLICINU = "POSTAVI_CIJENU_KOLICINU"

export const promjenaFavorita = (id) => {
    return{
        type: "PROMJENA_FAVORITA",
        idRecepta: id

    }
}

export const promjenaKosarica = (id) => {
    return{
        type: "PROMJENA_KOSARICA",
        idRecepta: id
    }
}

export const promjenaUkloniKosarica= (id) => {
    return{
        type: "PROMJENAUkloni_KOSARICA",
        idRecepta: id
    }
}

export const postaviCijenuKolicinu= () => {
    return{
        type: "POSTAVI_CIJENU_KOLICINU"
    }
}