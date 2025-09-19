export interface Segment {
    departureTime: string
    departureCity: string
    arriveTime: string
    arriveCity: string
    duration: string
  }
  
  export interface FormattedFlight {
    id: string
    price: number
    airlines: string[]
    segments: Segment[]
  }