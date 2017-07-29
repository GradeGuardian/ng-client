export class Message {
    message: string;
    sender: string;
    sent: boolean;

    constructor() {
        this.sent = false;
    }
}