import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { FormattedFlight } from "@/features/flights/types/formattedTypes";
import { getDict, getFlights } from ".";
import { Dict, FlightElement } from "@/features/flights/types/initialTypes";
import { flightsSerializer } from "@/pages/main-page/serializer";


export const flightsApi = createApi({
    reducerPath : "flightsApi",
    baseQuery : fakeBaseQuery(),
    endpoints: (builder) =>({
        getFlights: builder.query <FormattedFlight[],void>({
            async queryFn() {
                try {
                    const [flightsData,dictData] = await Promise.all([
                        getFlights(),
                        getDict()
                    ])
                    const formatted = flightsSerializer(
                        flightsData as FlightElement[],
                        dictData as Dict
                    )
                    return {data :formatted}
                }
                catch(err){
                    return { error: err as any }
                }
            },
        }),
        getDict: builder.query <Dict,void>({
            async queryFn(){
                try {
                    const dictData = await getDict()
                    return { data: dictData as Dict }
                }
                catch (err){
                    return {error:err as any }
                }
            }
        }),
    })
})

export const {useGetFlightsQuery,useGetDictQuery} = flightsApi


