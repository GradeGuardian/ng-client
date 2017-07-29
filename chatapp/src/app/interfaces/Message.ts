export class Message {
    message: string;
    isSenderServer: boolean;
    sent: boolean;

    constructor() {
        this.sent = false;
    }
}