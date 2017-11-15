export class Util {
    public static makeid(tam: number = 30) {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        if (tam <= 0) {
            tam = 10;
        }
        
        for (let i = 0; i < tam; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
      
        // console.log(text);
        return text;
    }
}