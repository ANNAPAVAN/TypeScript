abstract class TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string 
    ){}

    abstract getSepia(): void
    getReelTime():number {
        // some complex calculations 
        return 12;
    }
}


class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const pavan1 = new Instagram("test","test",3);
