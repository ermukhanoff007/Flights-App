import { Dict, FlightElement } from "@/features/flights/types/initialTypes"
import {prettyDurationFromSeconds,prettyTime} from '@/shared'

export const flightsSerializer = (flightsElements: FlightElement[], currentDict: Dict) => {
    return flightsElements.map((flightElement, index) => {
        const airlines = Array.from(
        new Set(
            flightElement.flights.flatMap((flight) =>
            flight.segments.map((segment) => {
                const existAirline = Object.entries(currentDict.airlines).find(
                (el) => segment.airline === el[0]
                ) as [string, { name: string }] | undefined

                return existAirline ? existAirline[1].name : "FlyArystan"
            })
            )
        )
        )

    const segments = flightElement.flights.map((flight) => {
        const depSegment = flight.segments[0]
        const arrSegment = flight.segments[flight.segments.length - 1]

        const departureCity =
            Object.entries(currentDict.airports).find(
            (el) => depSegment.dep.airport === el[0]
            )?.[1]?.city?.name || "Неизвестный"

        const arriveCity =
            Object.entries(currentDict.airports).find(
            (el) => arrSegment.arr.airport === el[0]
            )?.[1]?.city?.name || "Неизвестный"

        return {
            departureTime: prettyTime(depSegment.dep.at),
            departureCity,
            arriveTime: prettyTime(arrSegment.arr.at),
            arriveCity,
            duration: prettyDurationFromSeconds(flight.duration),
        }
        })

    return {
        airlines,
        price: flightElement.price.amount,
        segments,
        id: flightElement.id || `flight-${index}`,
        }
    })
}
