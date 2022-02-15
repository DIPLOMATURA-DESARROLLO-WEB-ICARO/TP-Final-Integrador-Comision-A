export class Message {
  messageId?: number;
  message: string;
  userId: number;
  receiverId: number;

  constructor(message: string, userId: number, receiverId: number) {
    this.message = message;
    this.userId = userId;
    this.receiverId = receiverId;
  }
}
