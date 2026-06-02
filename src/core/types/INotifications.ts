export interface INotifications {
  room: string;
  notification: {
    userId: number;
    title: string;
    message: string;
    type: string;
    data: {};
  };
}
