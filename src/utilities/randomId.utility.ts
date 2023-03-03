const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

export const randomId = (): string => {
    let id = '';

    for(var n=0;n<32;n++){
        id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return id;
}