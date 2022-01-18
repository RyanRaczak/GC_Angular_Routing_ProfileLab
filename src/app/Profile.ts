export class Profile{
    name:string;
    contact:string;
    bio:string;
    pic:string;
    picOptions:string[] = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_zxSQxnyO0iW9xucN-LCqcEcn6lQMEiUapXmlXNDS9BtfUNcxYhOsGGu8sgrZ_bofv94&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMP6fgfa4SGbqgmImouwJh6nqsK1xH4TD5ut-9vd9FCCoHnDB-TwAVnNCLs8kmve_zTA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnx92WQUeyht5MxsH95P-4WHVB3suRyQcsvWyRdrzzstjMs3yZE432y-c7hMfMRwKWJVM&usqp=CAU"
    ];

    constructor(){
        this.name = "Ryan";
        this.contact = "LikeIdTellYou@gmail.com";
        this.bio = "This is a bio and it has bio stuff.";
        this.pic = this.picOptions[0];
    }
}