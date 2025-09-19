export interface Segment {
    airline: string
    dep: { airport: string; at: string }
    arr: { airport: string; at: string }
  }
  
  export interface Flight {
    duration: number
    segments: Segment[]
  }
  
  export interface FlightElement {
    id?: string
    price: { amount: number }
    flights: Flight[]
  }

  export interface Dict {
    airlines: Record <string,{name:string}>
    airports: Record <string, {city : {name :string}} >
  }


