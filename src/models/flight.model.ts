//{
 //   "id": 171990,
 //   "type": {
 //     "id": 2,
 //     "name": "DEPARTURE"
 //   },
 //   "flightKey": "202503101215IDJU  5321JU  532",
 //  "flightNumber": "JU  532",
//    "destination": "Athens",
 //   "scheduledAt": "2025-03-10T12:15:00",
 //   "estimatedAt": null,
  //  "connectedType": "1",
 //   "connectedFlight": "JU  532",
 //   "plane": "319",
 //   "gate": null,
 //   "terminal": "2"
 // }

export interface FlightModel{
    id : number
    type: {
        id: number
        name: string
    }
    flightKey: string
    flightNumber: string
    destination: string
    scheduledAt:string
    estimatedAt: null | string
    connectedType: string
    connectedFlight: string
    plane: string
    gate: null | string
    terminal: string




}