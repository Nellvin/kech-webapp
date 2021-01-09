export class Sermon {
    id: Number
    name: string
    desc: string
    date: string
    image: File
    audio: File
    deleting: boolean = false;
    url: string
    photoUrl: string;
}
