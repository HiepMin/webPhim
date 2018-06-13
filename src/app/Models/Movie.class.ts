export class Movie{
    private ID:number;
    private Title:string;
    private Description:string;
    private Image:string;
    private GenreName:string;
    private Director:string;
    private Writer:string;
    private Producer:string;
    private RealeaseDate:Date;
    private Rating:number;
    private TrailerURI:string;

    public get _ID():number { return this.ID }
    public set _ID(a:number) {  this.ID = a}

    public get _Rating():number { return this.Rating }
    public set _Rating(a:number) {  this.Rating = a}

    public get _Title():string { return this.Title}
    public set _Title(a:string) { this.Title = a}

    public get _Description():string { return this.Description}
    public set _Description(a:string) { this.Description = a}

    public get _Image():string { return this.Image}
    public set _Image(a:string) { this.Image = a}

    public get _GenreName():string { return this.GenreName}
    public set _GenreName(a:string) { this.GenreName = a}

    public get _Director():string { return this.Director}
    public set _Director(a:string) { this.Director = a}
    
    public get _Writer():string { return this.Writer}
    public set _Writer(a:string) { this.Writer = a}
    
    public get _Producer():string { return this.Producer}
    public set _Producer(a:string) { this.Producer = a}

    public get _RealeaseDate():Date { return this.RealeaseDate}
    public set _RealeaseDate(a:Date) { this.RealeaseDate = a}

    public get _TrailerURI():string { return this.TrailerURI}
    public set _TrailerURI(a:string) { this.TrailerURI = a}

    
}