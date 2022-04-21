export class ServerResponse {
  constructor(
    public timestamp: Date,
    public status: number,
    public success: boolean,
    public message: string,
    public data: any,
    public count: number
  ) { }
}
