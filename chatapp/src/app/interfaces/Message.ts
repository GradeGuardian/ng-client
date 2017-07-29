export class Message {
    message: string;
    isSenderServer: boolean;
    sent: boolean;
    continuous?: boolean;

    constructor() {
        this.sent = false;
        this.continuous = true;
    }
}