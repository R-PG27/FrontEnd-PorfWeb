export class Educacion {
    imgEdu: string;
    id?: number;
    nombreEdu: string;
    descripcionEdu: string;
    yearsEdu: string;

    constructor(imgEdu: string, nombreEdu: string, descripcionEdu: string, añoEdu: string){
        this.imgEdu = imgEdu;
        this.nombreEdu =  nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.yearsEdu = añoEdu;
    }
}
