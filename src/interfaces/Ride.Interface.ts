declare namespace RideNameSpace {
  interface IModel {
    _id: string;
    userId: object;
    driverId: object;

    pickup: {
      latitude: number;
      longitude: number;
    };
    dropoff: {
      latitude: number;
      longitutde: number;
    };
  }

  interface ICreate {
    userId: object;
    driverId: object;

    pickup: {
      latitude: number;
      longitude: number;
    };
    dropoff: {
      latitude: number;
      longitutde: number;
    };
  }
}

export default RideNameSpace;
