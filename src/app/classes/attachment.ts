export class Attachment {
  id: string;
  attachment: string;

  constructor(attachment: Attachment) {
    this.id = attachment.id;
    this.attachment = attachment.attachment;
  }
}
